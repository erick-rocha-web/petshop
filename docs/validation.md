# Validação — Animalandia Pet Shop (prévia)

Resultado real das verificações executadas em 22/09/2026, sobre o build de
produção servido por `npm run preview` (`http://localhost:4173/`).

Ambiente: Windows 11, Node 24.14.0, npm 11.9.0, Chrome.

## 1. Build e testes

```
npm run build     tsc --noEmit + vite build — concluído sem erros
                  dist/index.html     2,35 kB  (gzip 1,07 kB)
                  dist/assets/*.css  23,57 kB  (gzip 5,20 kB)
                  dist/assets/*.js  248,80 kB  (gzip 76,26 kB)

npm test          19 testes, 19 passando (src/lib/contact.test.ts)
```

Os testes cobrem:

- **WhatsApp** — número `5562985410004` em todos os assuntos, 13 dígitos sem
  acréscimo nem remoção, acentos preservados depois de `decodeURIComponent`,
  correspondência entre serviço e mensagem, mensagens distintas por assunto e
  ausência de texto que prometa horário confirmado.
- **Mapa** — busca com o endereço codificado, sem Place ID, CID ou coordenadas.
- **Catálogo** — as seis categorias confirmadas estão presentes; peixes e
  coelhos ficam no grupo de animais à venda e nenhum texto desse grupo menciona
  banho, tosa, atendimento ou veterinário; cada categoria gera um link válido e
  codificado; nada de marca, preço, estoque, espécie ou raça; o aviso de
  medicamentos fala de disponibilidade e não de uso, dosagem ou indicação.
- **Herança** — o teste falha se `Essência`, `Essencia`, o telefone, o CEP, a
  cidade ou o CID da empresa anterior reaparecerem em qualquer campo publicado.
- **Serviços não confirmados** — falha se surgir vacina, exame, consulta
  clínica, cromoterapia ou atendimento veterinário.
- **Dados inventados** — falha se aparecer horário fixo, preço ou contagem de
  avaliações.

Validar o formato dos links **não é testar o envio**: nenhuma mensagem foi
enviada para o número da loja em momento algum.

## 2. Links da página renderizada

Auditoria dos `href` da página montada no navegador (build de produção):

| Verificação | Resultado |
| --- | --- |
| Links totais | 30 |
| Links de WhatsApp | 14, todos em `https://wa.me/5562985410004` |
| Links `tel:` | 2, ambos `tel:+5562985410004` |
| Links do Google Maps | 4, todos a mesma busca codificada |
| URLs com espaço não codificado | 0 |
| `target="_blank"` sem `rel="noopener"` | 0 |
| Links com dados da empresa anterior | 0 |

## 3. Layout em várias larguras

Cada largura foi carregada em um quadro de viewport exato e medida, não avaliada
a olho. Larguras verificadas: **320, 360, 390, 430, 600, 768, 900, 1024, 1280 e
1440 px**.

| Verificação | Resultado |
| --- | --- |
| Rolagem horizontal (`scrollX` após tentar rolar 800 px) | 0 em todas |
| Elementos com conteúdo cortado | nenhum |
| Colunas do catálogo | 1 → 2 → 3 → 4, conforme a faixa |

As únicas sobras de conteúdo detectadas são as formas decorativas da abertura e
da seção "Conheça", recortadas de propósito pelos seus contêineres.

**Correções feitas a partir dessas medições:**

1. O rótulo "Nosso maior foco" empurrava o título do cartão em destaque e
   desalinhava os dois cartões lado a lado. Passou a ficar sobre a imagem.
2. O catálogo com `auto-fill` deixava trilhas vazias e cartões estreitos, e o
   rótulo "Medicamentos" (que precisa de ~210 px e não pode quebrar no meio da
   palavra) era cortado em 320, 390 e 640 px. As faixas de coluna passaram a ser
   explícitas, cada uma só acrescentando uma coluna quando todas continuam
   cabendo nessa largura.

## 4. Barra de contato do celular

Em 390 px, com a página rolada até o fim: a última linha do rodapé termina em
680 px e a barra fixa começa em 717 px. **Não há sobreposição** — o `body`
reserva o espaço equivalente.

## 5. Contraste da paleta

Calculado par a par a partir dos tokens de `src/styles/tokens.css`, pela fórmula
de luminância relativa da WCAG.

| Par | Contraste |
| --- | --- |
| Texto sobre fundo | 12,02:1 |
| Texto sobre superfície | 13,22:1 |
| Texto sobre superfície alternativa | 12,66:1 |
| Texto secundário sobre fundo | 5,05:1 |
| Texto secundário sobre superfície | 5,55:1 |
| Texto secundário sobre superfície alternativa | 5,31:1 |
| Texto secundário sobre primária suave | 4,77:1 |
| Primária sobre superfície | 7,95:1 |
| Primária sobre fundo | 7,24:1 |
| Branco sobre primária (botão) | 7,95:1 |
| Branco sobre primária forte (hover) | 10,78:1 |

**Mínimo: 4,77:1**, acima do mínimo de 4,5:1 da WCAG AA para texto normal.

A cor de detalhe (`--c-accent`) é usada apenas em elementos decorativos e no
ícone de estrela do link de avaliações; nunca recebe texto sobre ela.

## 6. Alvos de toque

Botões, opções de assunto, itens do catálogo e links de contato têm pelo menos
44 px de altura. Duas exceções, herdadas do layout anterior e mantidas:

- Links do rodapé (telefone e Google Maps): 26 px de altura, com espaçamento
  entre eles. Passam no mínimo de 24×24 px da WCAG 2.5.8 (AA), mas ficam abaixo
  da recomendação de 44 px.
- Links de navegação e CTA do cabeçalho no desktop: 41–42 px, em um contexto de
  mouse.

## 7. O que não foi executado

- **Lighthouse** não foi reexecutado nesta adaptação. As notas registradas na
  versão anterior não valem para esta página e por isso não foram copiadas.
- **Teste em aparelho real**: a conferência de celular foi feita em quadros de
  viewport exata no Chrome de desktop, não em um telefone.
- **Envio de mensagem pelo WhatsApp**: nenhum. Os links foram validados apenas
  quanto a formato, número e codificação.
- **Leitor de tela**: a marcação usa `aria-pressed`, `aria-label`, `aria-live` e
  `<details>` nativo, mas não houve teste com NVDA ou VoiceOver.

## 8. Capturas

`docs/screenshots/` traz três capturas de desktop e duas de celular (390 px) do
build atual, para enviar por mensagem sem precisar de um link.
