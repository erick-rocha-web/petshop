# Especificação implementada — Essência Animal Vet (prévia)

Registro das decisões tomadas na Etapa A do SDD e do que foi efetivamente
construído. Complementa `SDD_Essencia_Animal_Vet_MVP.md`, que continua sendo o
documento de origem.

## 1. Objetivo

Uma página única que apresenta os três núcleos do negócio (atendimento
veterinário, banho e tosa, Pet Store), mostra onde a empresa fica e ajuda o
visitante a iniciar uma conversa pertinente no WhatsApp.

A entrega é uma **prévia comercial**, identificada como tal na interface. Não há
contratação, aprovação de layout nem promessa de resultado comercial.

## 2. Inspeção inicial do repositório

| Item | Resultado |
| --- | --- |
| Repositório existente | Não. A pasta tinha apenas o SDD e `assets/`. |
| Git | Não inicializado. |
| Stack anterior | Nenhuma. `package.json` criado do zero. |
| Assets fornecidos | 4 PNGs, todos 1536×1024 (3:2), ~2,1–2,4 MB cada. |

Como a pasta estava vazia em termos de código, foi aplicada a opção padrão do
SDD (seção 7): **Vite + React + TypeScript, com CSS por tokens e componentes**.
Nenhum framework pesado, nenhuma biblioteca de ícones e nenhuma biblioteca de
animação foram instalados.

### Versões escolhidas

Consultadas no registro npm no momento da implementação, não de memória:
Vite 8.3, React 19.3, TypeScript 5.9, Vitest 5.0, sharp 0.35 (apenas para gerar
as imagens; não vai para o navegador). Total: 52 pacotes instalados.

## 3. Fonte de dados

Tudo o que a página afirma sobre a empresa vem de `src/data/business.ts`, que
reproduz somente a tabela "Fonte de verdade" do SDD (perfil do Google Maps +
conversa no WhatsApp de 22/09/2026).

Campos deliberadamente **ausentes** do código, porque não foram confirmados:
horários de cada dia da semana, preços, formas de pagamento, marcas e produtos,
nomes e registros profissionais, logotipo, redes sociais, e-mail e domínio.

`business.realPhotos` existe vazio de propósito: é o lugar reservado para até
três fotos reais autorizadas. Enquanto estiver vazio, a seção "Conheça" usa a
composição ilustrativa, sem galeria vazia nem cartões "em breve".

## 4. Identidade visual (provisória)

A paleta é a proposta do SDD, **não** extraída de material oficial da empresa:

| Token | Valor | Uso |
| --- | --- | --- |
| `--c-bg` | `#F7F6F2` | Fundo principal |
| `--c-surface` | `#FFFFFF` | Cartões |
| `--c-primary` | `#164A3D` | Botões, ícones, rodapé |
| `--c-primary-soft` | `#E8EFE8` | Faixas de apoio |
| `--c-text` | `#24332D` | Texto principal |
| `--c-text-muted` | `#59685F` | Descrições |
| `--c-border` | `#D8E1D9` | Separações |
| `--c-accent` | `#D7AE7C` | Detalhes pequenos, sem texto branco sobre eles |

Tipografia: **Plus Jakarta Sans** (SIL Open Font License 1.1), arquivo variável
do subconjunto latino, servido localmente em `public/fonts/` — sem chamada a
CDN de fontes em tempo de execução. Fallback de sistema declarado. Três pesos em
uso (400, 600/700, 800).

Não existe logotipo: o nome recebe tratamento apenas tipográfico. O `favicon.svg`
é um monograma provisório da prévia, não uma marca oficial.

## 5. Componentes

```
src/
  data/business.ts          conteúdo editável (única fonte de verdade)
  lib/contact.ts            geração centralizada dos links de WhatsApp e tel:
  lib/contact.test.ts       verificação focada dessa geração
  components/
    Header.tsx              cabeçalho fixo + menu móvel acessível
    Hero.tsx                abertura
    Services.tsx            três cartões de serviço
    ContactIntent.tsx       área "Vamos conversar?"
    About.tsx               "Conheça" + composição ilustrativa + avaliação
    Location.tsx            endereço, contato e horários
    FAQ.tsx                 acordeão nativo
    Footer.tsx              rodapé e identificação da prévia
    MobileContactBar.tsx    acesso rápido ao WhatsApp no celular
    Figure.tsx              imagem com dimensões e fallback de carregamento
    Icons.tsx               SVGs inline (sem biblioteca de ícones)
  styles/tokens.css         tokens de cor, tipografia, medidas e movimento
  styles/global.css         base, layout, botões e utilitários
```

O estado do assunto de contato vive em `App.tsx` porque é compartilhado entre os
cartões de serviço e a área "Vamos conversar?".

## 6. Decisões de implementação registradas

- **Ordem da cascata.** `tokens.css` e `global.css` são importados antes de
  `App` em `src/main.tsx`. Sem isso, o CSS dos componentes entra antes do global
  e regras de mesma especificidade (`.header__cta` vs `.btn`) se invertem.
- **Cartões em coluna única abaixo de 900 px.** Três colunas em 768 px ficariam
  estreitas demais, e um cartão horizontal recortaria a foto. Em coluna única e
  centrada (máx. 520 px) os três ficam idênticos e o enquadramento 3:2 original
  é preservado.
- **Sem mapa incorporado.** Não há embed oficial validado; o bloco usa cartão de
  endereço com acabamento e link externo para o perfil real, como o SDD pede.
- **Acordeão nativo** (`<details>/<summary>`), suficiente para teclado, estado e
  leitores de tela, sem JavaScript próprio.
- **Foco no menu móvel.** Escape devolve o foco ao botão que abriu o menu; a
  escolha de um link apenas fecha o menu e deixa a âncora conduzir o foco.
- **Sem animação de entrada de seção.** Transições ficam em 160–200 ms em hover
  e estado. `prefers-reduced-motion` desliga rolagem suave e transições.

## 7. Fora do escopo (confirmado)

Login, painel, banco de dados, pagamentos, carrinho, catálogo com estoque, agenda
real, chatbot, triagem clínica, prontuários, captura de leads, CRM, anúncios,
analytics, pixels, cookies opcionais e política jurídica fictícia. Nada disso foi
simulado na interface.
