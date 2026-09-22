/**
 * Verificacao focada dos links externos da pagina.
 *
 * O que importa checar e comportamento: numero correto em todos os assuntos,
 * acentos que sobrevivem a codificacao/decodificacao, correspondencia entre o
 * servico escolhido e a mensagem, e ausencia de qualquer dado da empresa
 * anterior. Nao replicamos aqui o texto inteiro de cada mensagem.
 *
 * Validar o formato do link NAO e testar o envio: nenhuma mensagem e enviada.
 */
import { describe, expect, it } from 'vitest';
import { mapsLink, telLink, whatsappLink, whatsappLinkFor } from './contact';
import {
  business,
  catalog,
  faq,
  medicinesNote,
  services,
  whatsappMessages,
  type IntentId,
} from '../data/business';

const NUMERO = '5562985410004';
const TODOS: IntentId[] = ['geral', 'banho', 'produtos'];

/** Extrai e decodifica o parametro `text` do link gerado. */
function textoDecodificado(link: string): string {
  const url = new URL(link);
  return decodeURIComponent(url.searchParams.get('text') ?? '');
}

describe('whatsappLink', () => {
  it('usa exatamente o numero 5562985410004 em todos os assuntos', () => {
    for (const intent of TODOS) {
      const url = new URL(whatsappLink(intent));
      expect(url.origin).toBe('https://wa.me');
      expect(url.pathname).toBe(`/${NUMERO}`);
    }
  });

  it('nao acrescenta nem remove digitos do numero', () => {
    const digitos = new URL(whatsappLink('geral')).pathname.replace(/\D/g, '');
    expect(digitos).toBe(NUMERO);
    expect(digitos).toHaveLength(13);
    expect(business.whatsappNumber).toBe(NUMERO);
  });

  it('codifica o texto e preserva os acentos depois de decodificar', () => {
    const link = whatsappLink('banho');
    // O link trafega codificado...
    expect(link).toContain('?text=');
    expect(link).not.toContain(' ');
    expect(link).toContain('%C3%A1'); // "a" com acento agudo, de "Ola"/"horarios"
    // ...e o WhatsApp recebe o texto original, com acentos intactos.
    expect(textoDecodificado(link)).toBe(whatsappMessages.banho);
    expect(textoDecodificado(link)).toContain('Olá');
  });

  it('preserva acentos e cedilha em todas as mensagens', () => {
    for (const intent of TODOS) {
      const decodificado = textoDecodificado(whatsappLink(intent));
      expect(decodificado).toBe(whatsappMessages[intent]);
      expect(decodificado).toMatch(/[áâãàéêíóôõúç]/i);
    }
  });

  it('liga cada servico do site a mensagem correspondente', () => {
    const esperado: Record<string, string> = {
      banho: 'banho e tosa',
      produtos: 'disponibilidade de um produto',
    };
    for (const service of services) {
      const decodificado = textoDecodificado(whatsappLink(service.id));
      expect(decodificado.toLowerCase()).toContain(esperado[service.id].toLowerCase());
      expect(decodificado).toContain('Animalandia');
    }
  });

  it('gera mensagens diferentes para assuntos diferentes', () => {
    const textos = TODOS.map((intent) => textoDecodificado(whatsappLink(intent)));
    expect(new Set(textos).size).toBe(TODOS.length);
  });

  it('nao promete agendamento confirmado em nenhuma mensagem', () => {
    for (const intent of TODOS) {
      const texto = textoDecodificado(whatsappLink(intent)).toLowerCase();
      expect(texto).not.toMatch(/confirmad|agendado para|reserva confirmada|horário reservado/);
    }
  });
});

describe('telLink', () => {
  it('reaproveita o mesmo numero centralizado', () => {
    expect(telLink()).toBe(`tel:+${NUMERO}`);
  });
});

describe('mapsLink', () => {
  it('monta uma busca codificada com o nome e o endereco da loja', () => {
    const url = new URL(mapsLink());
    expect(url.origin + url.pathname).toBe('https://www.google.com/maps/search/');
    expect(url.searchParams.get('api')).toBe('1');
    expect(url.searchParams.get('query')).toBe(business.mapsQuery);
    expect(url.searchParams.get('query')).toContain('74930-570');
  });

  it('nao usa Place ID nem coordenadas inventadas', () => {
    const link = mapsLink();
    expect(link).not.toMatch(/cid=|place_id|@-?\d+\.\d+,/);
    expect(link).not.toContain(' ');
  });
});

describe('dados publicados', () => {
  /** Rastros da empresa anterior nao podem sobreviver nesta versao. */
  it('nao guarda nenhum dado da Essencia Animal Vet', () => {
    const conteudo = JSON.stringify({ business, services, catalog, faq, whatsappMessages, medicinesNote });
    for (const rastro of [
      'Essência',
      'Essencia',
      '5561998135153',
      '99813-5153',
      '72015-220',
      'Taguatinga',
      '4402007383073806765',
    ]) {
      expect(conteudo).not.toContain(rastro);
    }
  });

  /** Servicos nao confirmados pela Animalandia nao podem aparecer na pagina. */
  it('nao menciona servicos veterinarios', () => {
    const conteudo = JSON.stringify({ business, services, catalog, faq, whatsappMessages, medicinesNote }).toLowerCase();
    // "medicamentos" NAO entra nesta lista: a loja confirmou que vende a
    // categoria. O que nao pode existir e o SERVICO veterinario.
    for (const proibido of ['vacina', 'exame', 'consulta clínica', 'cromoterapia', 'atendimento veterinário']) {
      expect(conteudo).not.toContain(proibido);
    }
  });

  /** Sem grade de horarios, precos ou contagem de avaliacoes inventados. */
  it('nao publica horarios, precos ou numero de avaliacoes', () => {
    const conteudo = JSON.stringify({ business, services, catalog, faq, whatsappMessages, medicinesNote }).toLowerCase();
    expect(conteudo).not.toMatch(/19h|segunda a |das \d{1,2}h|r\$ ?\d|\d+ avalia|nota 4/);
  });
});

describe('catalogo da loja', () => {
  const categorias = catalog.flatMap((group) => group.categories);

  it('cobre as seis categorias confirmadas pela empresa', () => {
    expect(categorias.map((c) => c.id).sort()).toEqual([
      'acessorios',
      'brinquedos',
      'coelhos',
      'medicamentos',
      'peixes',
      'racoes',
    ]);
  });

  it('separa os animais vendidos dos produtos', () => {
    const animais = catalog.find((group) => group.categories.some((c) => c.id === 'peixes'));
    expect(animais?.categories.map((c) => c.id).sort()).toEqual(['coelhos', 'peixes']);
    // Nenhum grupo pode sugerir servico prestado a essas especies. "Consultar a
    // disponibilidade" e sobre a venda, entao nao entra na lista.
    expect(JSON.stringify(animais).toLowerCase()).not.toMatch(/banho|tosa|atendimento|veterin/);
  });

  it('gera um link de WhatsApp codificado e com o numero certo para cada categoria', () => {
    for (const categoria of categorias) {
      const url = new URL(whatsappLinkFor(categoria.message));
      expect(url.origin + url.pathname).toBe(`https://wa.me/${NUMERO}`);
      expect(decodeURIComponent(url.searchParams.get('text') ?? '')).toBe(categoria.message);
      expect(url.href).not.toContain(' ');
    }
  });

  it('nao inventa marca, preco, estoque, especie ou raca', () => {
    const conteudo = JSON.stringify(catalog).toLowerCase();
    expect(conteudo).not.toMatch(/r\$|pre[çc]o|estoque|em falta|unidades|betta|ang[ei]l|anão|mini lop/);
  });

  it('mantem a categoria de medicamentos sem orientacao de uso', () => {
    const texto = medicinesNote.toLowerCase();
    expect(texto).toContain('disponibilidade');
    expect(texto).not.toMatch(/dosagem de \d|administre|aplique|trate |cura|sem receita|indicado para/);
  });
});

/** O botao "Consultar disponibilidade" usa a mensagem confirmada no escopo. */
describe('consulta de disponibilidade', () => {
  it('fala de produto ou animal na loja', () => {
    const texto = decodeURIComponent(
      new URL(whatsappLink('produtos')).searchParams.get('text') ?? '',
    );
    expect(texto).toContain('disponibilidade de um produto ou animal na loja');
  });
});
