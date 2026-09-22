/**
 * Verificacao focada da funcao geradora do WhatsApp (SDD secao 9).
 *
 * O que importa checar e comportamento: numero correto, acentos que sobrevivem
 * a codificacao/decodificacao e correspondencia entre servico escolhido e
 * mensagem. Nao replicamos aqui o texto inteiro de cada mensagem.
 */
import { describe, expect, it } from 'vitest';
import { whatsappLink, telLink } from './contact';
import { services, whatsappMessages, type IntentId } from '../data/business';

const NUMERO = '5561998135153';
const TODOS: IntentId[] = ['geral', 'horario', 'veterinario', 'banho', 'petstore'];

/** Extrai e decodifica o parametro `text` do link gerado. */
function textoDecodificado(link: string): string {
  const url = new URL(link);
  return decodeURIComponent(url.searchParams.get('text') ?? '');
}

describe('whatsappLink', () => {
  it('usa exatamente o numero 5561998135153 em todos os assuntos', () => {
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
  });

  it('codifica o texto e preserva os acentos depois de decodificar', () => {
    const link = whatsappLink('veterinario');
    // O link trafega codificado...
    expect(link).toContain('?text=');
    expect(link).not.toContain(' ');
    expect(link).toContain('%C3%A1'); // "á" de "página"/"Olá"
    // ...e o WhatsApp recebe o texto original, com acentos intactos.
    expect(textoDecodificado(link)).toBe(whatsappMessages.veterinario);
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
      veterinario: 'atendimento veterinário',
      banho: 'banho e tosa',
      petstore: 'Pet Store',
    };
    for (const service of services) {
      const decodificado = textoDecodificado(whatsappLink(service.id));
      expect(decodificado.toLowerCase()).toContain(esperado[service.id].toLowerCase());
      expect(decodificado).toContain('Essência Animal Vet');
    }
  });

  it('gera mensagens diferentes para assuntos diferentes', () => {
    const textos = TODOS.map((intent) => textoDecodificado(whatsappLink(intent)));
    expect(new Set(textos).size).toBe(TODOS.length);
  });

  it('nao promete agendamento confirmado em nenhuma mensagem', () => {
    for (const intent of TODOS) {
      const texto = textoDecodificado(whatsappLink(intent)).toLowerCase();
      expect(texto).not.toMatch(/confirmad|agendado para|reserva confirmada/);
    }
  });
});

describe('telLink', () => {
  it('reaproveita o mesmo numero centralizado', () => {
    expect(telLink()).toBe(`tel:+${NUMERO}`);
  });
});
