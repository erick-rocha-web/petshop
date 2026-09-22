# Essência Animal Vet — prévia de site

Prévia comercial de um site institucional de página única para a **Essência
Animal Vet** (Pet Shop, Clínica Veterinária e Pet Store — Taguatinga Sul,
Brasília — DF), desenvolvida por Erick Rocha.

> **Esta é uma demonstração.** A empresa respondeu ao contato comercial, mas não
> houve contratação nem aprovação deste layout. A prévia leva `noindex, nofollow`
> e um `robots.txt` que bloqueia rastreadores, e a interface se identifica como
> prévia. Nada aqui afirma ser o site oficial da empresa.

## Comandos

```bash
npm install        # instala as dependências (52 pacotes)
npm run dev        # servidor local de desenvolvimento -> http://localhost:5173
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o build de produção    -> http://localhost:4173
npm test           # testes da geração dos links de WhatsApp
npm run images     # regera as cópias otimizadas a partir de assets/
```

Requer Node 20.19+ (desenvolvido e verificado com Node 24.14.0).

## Onde editar o conteúdo

**`src/data/business.ts` é o único arquivo que você precisa abrir** para mudar
telefone, endereço, serviços, mensagens, avaliação e textos. Nenhum componente
repete esses valores.

| Quero mudar | Campo |
| --- | --- |
| Telefone exibido | `business.phoneDisplay` |
| Número do WhatsApp | `business.whatsappNumber` (string, sem sinais) |
| Endereço e CEP | `business.address` |
| Link do Google Maps | `business.mapsUrl` |
| Nota e nº de avaliações | `business.rating` (com `checkedOn`, a data de consulta) |
| Cartões de serviço | `services` (título, descrição, até 4 itens, botão, imagem) |
| Mensagens do WhatsApp | `whatsappMessages` |
| Perguntas frequentes | `faq` |
| Textos da prévia | `preview` |

Todos os links de WhatsApp são gerados por `whatsappLink()` em
`src/lib/contact.ts`, a partir de `business.whatsappNumber`. Trocar o número em
um lugar troca em todos os botões da página.

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
| `assets/atendimento-veterinario.png` | `servico-atendimento-veterinario-480/720.webp` | Cartão Atendimento veterinário |
| `assets/banho-e-tosa.png` | `servico-banho-e-tosa-480/720.webp` | Cartão Banho e tosa |
| `assets/pet-store.png` | `servico-pet-store-480/720.webp` | Cartão Pet Store |

Os quatro arquivos originais foram fornecidos por Erick junto com o projeto e
têm 1536×1024 (proporção 3:2). Eles **não são alterados**: `npm run images`
apenas gera cópias WebP redimensionadas em `public/images/`, mantendo a mesma
proporção e o mesmo enquadramento, sem recorte. A compressão leva cada arquivo
de ~2,2 MB para 13–61 kB.

**As imagens são ilustrativas.** Nenhum animal exibido é apresentado como
paciente da empresa, e não há foto de pessoa apresentada como integrante da
equipe. A página informa "Imagens ilustrativas" abaixo da imagem de abertura e
no rodapé. Antes de publicar como site oficial, substitua por material real
autorizado.

## Identidade provisória

A paleta e a tipografia **não são a identidade oficial da empresa** — são uma
proposta deste documento de especificação.

- **Cores:** todas em `src/styles/tokens.css`, como variáveis CSS. Para aplicar
  a identidade real, troque os valores em `:root`; nenhum componente escreve cor
  literal.
- **Tipografia:** Plus Jakarta Sans, sob a SIL Open Font License 1.1, servida
  localmente em `public/fonts/plus-jakarta-sans-latin-var.woff2` (subconjunto
  latino, 27 kB). Não há chamada a CDN de fontes em tempo de execução. O
  fallback de sistema está declarado em `--font-sans`.
- **Marca:** não existe logotipo. O nome usa tratamento apenas tipográfico, e o
  `public/favicon.svg` é um monograma provisório da prévia.

## Estrutura

```
assets/              imagens originais, preservadas
docs/
  spec.md            decisões registradas e o que foi construído
  tasks.md           tarefas P0 e o que ficou de fora, com o motivo
  validation.md      critérios de aceitação, medições e limitações
  screenshots/       capturas de desktop e celular para apresentação
public/
  images/            cópias otimizadas (geradas, podem ser recriadas)
  fonts/             fonte servida localmente
  favicon.svg, robots.txt
scripts/
  optimize-images.mjs
src/
  data/business.ts   conteúdo editável
  lib/contact.ts     geração dos links de WhatsApp
  components/        um arquivo .tsx + um .css por componente
  styles/            tokens e base
```

## Como mostrar a prévia

Para uma apresentação local:

```bash
npm run build && npm run preview
```

e abra `http://localhost:4173`. As capturas em `docs/screenshots/` servem para
enviar por mensagem sem precisar de um link.

**Se for publicar**, use um endereço neutro e temporário (por exemplo um
subdomínio de teste de um serviço estático), nunca um domínio com o nome da
empresa, e mantenha a meta `noindex` e o `robots.txt` enquanto não houver
aprovação. Publicar em nome da Essência Animal Vet depende de autorização
explícita dela.

## Verificações

Resultados completos em `docs/validation.md`. Resumo: build sem erros, 8 testes
passando, Lighthouse mobile 99 de desempenho / 100 de acessibilidade / 100 de
boas práticas, sem rolagem horizontal de 320 a 1374 px e contraste mínimo de
5,03:1.

## Fora do MVP

Login, painel, banco de dados, pagamentos, carrinho, catálogo com estoque,
agenda real, chatbot, triagem clínica, prontuários, captura de leads, CRM,
anúncios, analytics e cookies. Nada disso foi simulado na interface.
