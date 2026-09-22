# Animalandia Pet Shop — prévia de site

Prévia comercial de um site institucional de página única para a **Animalandia
Pet Shop** (banho e tosa, produtos e acessórios — Setor Garavelo, Aparecida de
Goiânia — GO), desenvolvida por Erick Rocha.

> **Esta é uma demonstração.** A empresa autorizou a preparação da prévia, mas
> não houve contratação nem aprovação deste layout. A prévia leva
> `noindex, nofollow` e um `robots.txt` que bloqueia rastreadores, e a interface
> se identifica como prévia. Nada aqui afirma ser o site oficial da empresa.

Esta branch (`clientes/animalandia`) é uma adaptação da prévia feita para outra
empresa, preservada intacta em `clientes/essencia-animal-vet`. Nenhum dado
daquela empresa permanece aqui.

## Comandos

```bash
npm install        # instala as dependências (52 pacotes)
npm run dev        # servidor local de desenvolvimento -> http://localhost:5173
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o build de produção    -> http://localhost:4173
npm test           # testes dos links de WhatsApp, do mapa e do conteúdo
npm run images     # regera as cópias otimizadas a partir de assets/
```

Requer Node 20.19+ (desenvolvido e verificado com Node 24.14.0).

## O que a empresa confirmou

Tudo o que a página afirma vem de duas fontes: o cadastro público da loja e o
retorno da própria empresa pelo WhatsApp.

| Confirmado | Onde aparece |
| --- | --- |
| "Nosso maior foco é banho e tosa" | Título, cartão em destaque, barra do celular |
| Rações, medicamentos, brinquedos, acessórios pet | Seção "Também temos na loja" |
| Peixes e coelhos (animais vendidos na loja) | Grupo "Animais à venda" |
| Compras e retirada na loja, entrega | Cartão de produtos e seção "Conheça" |
| Estacionamento gratuito no local | Abertura e seção "Conheça" |
| Entrada acessível a cadeirantes | Seção "Conheça" |
| Endereço, CEP e telefone | Abertura, localização e rodapé |

**O que não foi confirmado não está na página**: grade semanal de horários,
preços, área e taxa de entrega, marcas, modalidades de banho e tosa, espécies de
peixe, raças de coelho, tempo de mercado, tamanho da equipe e quantidade de
clientes. O "fecha às 19h" que aparece no Google é um estado momentâneo e não
permite deduzir os dias e horários, então a página só oferece a consulta pelo
WhatsApp.

Medicamentos aparecem apenas como categoria à venda. A página não indica uso,
dosagem, posologia nem qualquer alegação terapêutica.

## Onde editar o conteúdo

**`src/data/business.ts` é o único arquivo que você precisa abrir** para mudar
telefone, endereço, serviços, categorias, mensagens e textos. Nenhum componente
repete esses valores.

| Quero mudar | Campo |
| --- | --- |
| Telefone exibido | `business.phoneDisplay` |
| Número do WhatsApp | `business.whatsappNumber` (string, só dígitos) |
| Endereço e CEP | `business.address` |
| Busca usada no Google Maps | `business.mapsQuery` |
| Facilidades da loja | `storeFeatures` |
| Cartões de serviço | `services` (título, destaque, itens, botão, imagem) |
| Categorias "Também temos na loja" | `catalog` (grupos e mensagens por categoria) |
| Aviso sobre medicamentos | `medicinesNote` |
| Mensagens do WhatsApp | `whatsappMessages` |
| Perguntas frequentes | `faq` |
| Textos da prévia | `preview` |

Todos os links de WhatsApp passam por `whatsappLink()` / `whatsappLinkFor()` em
`src/lib/contact.ts`, e o link do mapa por `mapsLink()`. Todos codificam o texto
com `encodeURIComponent`. Trocar o número em um lugar troca em todos os botões
da página.

### Adicionar fotos reais da empresa

A seção "Conheça" tem lugar reservado para até três fotos autorizadas. Coloque
os arquivos em `public/images/` e preencha:

```ts
realPhotos: [
  { src: '/images/fachada.webp', alt: 'Descrição objetiva da foto.' },
]
```

Com a lista preenchida, a galeria substitui a composição ilustrativa
automaticamente. Com ela vazia, a seção continua completa, sem espaço em branco
nem cartões "em breve".

## Imagens

| Original (preservado) | Cópias usadas no site | Onde aparece |
| --- | --- | --- |
| `assets/hero-pets.png` | `hero-cachorro-e-gato-800/1200.webp` | Abertura |
| `assets/banho-e-tosa.png` | `servico-banho-e-tosa-480/720.webp` | Cartão Banho e tosa |
| `assets/pet-store.png` | `servico-pet-store-480/720.webp` | Cartão Produtos e acessórios |

`assets/atendimento-veterinario.png` continua no repositório, mas **não é usado
nem gerado**: a Animalandia não presta atendimento veterinário, e a página não
pode sugerir esse serviço. Por isso ele saiu de `scripts/optimize-images.mjs`.

As categorias de "Também temos na loja" usam **ícones desenhados no próprio
projeto**, não fotos: não temos imagem autorizada de nenhum produto ou animal da
loja, e não faria sentido inventar uma.

Os originais têm 1536×1024 (proporção 3:2) e **não são alterados**:
`npm run images` apenas gera cópias WebP redimensionadas em `public/images/`,
mantendo a mesma proporção e o mesmo enquadramento, sem recorte.

**As imagens são ilustrativas.** Nenhum animal exibido é apresentado como
cliente da loja, e não há foto de pessoa apresentada como integrante da equipe.
A página informa "Imagens ilustrativas" abaixo da imagem de abertura e no
rodapé. Antes de publicar como site oficial, substitua por material real
autorizado.

## Identidade provisória

A paleta e a tipografia **não são a identidade oficial da empresa** — são uma
proposta desta demonstração. A empresa não forneceu logotipo nem cores.

- **Cores:** todas em `src/styles/tokens.css`, como variáveis CSS. Para aplicar
  a identidade real, troque os valores em `:root`; nenhum componente escreve cor
  literal.
- **Tipografia:** Plus Jakarta Sans, sob a SIL Open Font License 1.1, servida
  localmente em `public/fonts/plus-jakarta-sans-latin-var.woff2` (subconjunto
  latino, 27 kB). Não há chamada a CDN de fontes em tempo de execução.
- **Marca:** não existe logotipo. O nome usa tratamento apenas tipográfico, e o
  `public/favicon.svg` é um monograma provisório da prévia.

## Estrutura

```
assets/              imagens originais, preservadas
docs/
  spec.md            decisões da adaptação e o que foi construído
  tasks.md           o que foi feito e o que ficou de fora, com o motivo
  validation.md      verificações executadas, com números reais
public/
  images/            cópias otimizadas (geradas, podem ser recriadas)
  fonts/             fonte servida localmente
  favicon.svg, robots.txt
scripts/
  optimize-images.mjs
src/
  data/business.ts   conteúdo editável
  lib/contact.ts     geração dos links de WhatsApp e do mapa
  components/        um arquivo .tsx + um .css por componente
  styles/            tokens e base
```

## Como mostrar a prévia

Para uma apresentação local:

```bash
npm run build && npm run preview
```

e abra `http://localhost:4173`.

**Se for publicar**, use um endereço neutro e temporário (por exemplo um
subdomínio de teste de um serviço estático), nunca um domínio com o nome da
empresa, e mantenha a meta `noindex` e o `robots.txt` enquanto não houver
aprovação do layout. A autorização recebida é para preparar a prévia, não para
publicar um site oficial em nome da Animalandia.

## Publicação definitiva

Só depois de aprovação e autorização explícitas da empresa. Nesta ordem:

1. Remover `<meta name="robots" content="noindex, nofollow" />` de `index.html`.
2. Em `public/robots.txt`, trocar `Disallow: /` por `Disallow:` (vazio).
3. Preencher `og:url` com o domínio real e publicar uma imagem de
   compartilhamento (`og:image`, URL absoluta). Hoje as duas tags estão ausentes
   de propósito: não existe domínio nem imagem oficial, e nenhum dos dois foi
   inventado.
4. Substituir as imagens ilustrativas por material autorizado da loja.
5. Só então considerar dados estruturados (`LocalBusiness`) — que exigem
   horários reais e devem ser adicionados apenas com dados confirmados.

## Verificações

Resultados completos em `docs/validation.md`. Resumo: build sem erros, 19 testes
passando, nenhuma rolagem horizontal nem texto cortado de 320 a 1440 px, os 14
links de WhatsApp da página usando exatamente `5562985410004` e contraste mínimo
de 4,77:1 na paleta.

## Fora do MVP

Login, painel, banco de dados, pagamentos, carrinho, catálogo com estoque,
agenda real, chatbot, prontuários, captura de leads, CRM, anúncios, analytics e
cookies. Nada disso foi simulado na interface.
