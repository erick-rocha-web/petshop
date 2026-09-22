# Tarefas P0 — Essência Animal Vet (prévia)

Estado real no fim da implementação. Itens curtos e verificáveis, conforme a
Etapa A do SDD.

## Etapa A — Inspeção e decisões

- [x] Ler o SDD inteiro antes de escrever código.
- [x] Inspecionar a pasta e identificar os 4 assets fornecidos (1536×1024, 3:2).
- [x] Conferir visualmente cada imagem e confirmar o conteúdo de cada arquivo.
- [x] Escolher a stack (Vite + React + TS) e consultar as versões no registro npm.
- [x] Registrar objetivo, dados, paleta, componentes e exclusões em `docs/spec.md`.

## Etapa B — Base visual e primeira tela

- [x] Tokens de cor, tipografia, medidas e movimento em `styles/tokens.css`.
- [x] Servir a fonte localmente (Plus Jakarta Sans, OFL) com fallback de sistema.
- [x] Cabeçalho fixo com âncoras, CTA e menu móvel acessível.
- [x] Faixa discreta "Prévia de site para avaliação".
- [x] Abertura em duas colunas no desktop e empilhada no celular.
- [x] Conferir escala e espaçamento antes de expandir os blocos.

## Etapa C — Página completa

- [x] Três cartões de serviço de tamanho equilibrado, com imagens equivalentes.
- [x] Área "Vamos conversar?" com seleção de assunto e prévia da mensagem.
- [x] Seção "Conheça" com pontos confirmados, composição ilustrativa e avaliação datada.
- [x] Espaço reservado para até três fotos reais (`business.realPhotos`).
- [x] Localização com endereço, telefone clicável e link do perfil do Maps.
- [x] FAQ em acordeão nativo com as quatro perguntas do SDD.
- [x] Rodapé com identificação da demonstração e autoria da proposta.
- [x] Barra de contato no celular, com espaço correspondente no fim da página.
- [x] Conferir que nenhum botão ficou com `href="#"` ou sem função.

## Etapa D — Verificação

- [x] `npm run build` (typecheck + bundle) sem erros.
- [x] Teste focado da função geradora do WhatsApp (8 casos, todos passando).
- [x] Passagem manual: navegação, menu, seleção de serviço, CTA e FAQ.
- [x] Varredura de 320 a 1374 px procurando rolagem horizontal e sobreposição.
- [x] Conferência de contraste nos textos e estados.
- [x] Teste do fallback de imagem com arquivo inexistente.
- [x] Console sem erros de aplicação no fluxo principal.

## Etapa E — Entrega

- [x] README com comandos, dados editáveis, origem dos assets e troca de identidade.
- [x] `docs/spec.md`, `docs/tasks.md` e `docs/validation.md`.
- [x] Capturas de desktop e celular em `docs/screenshots/`.
- [x] Lista do que depende de informação da empresa (em `docs/validation.md`).

## Não feito, por decisão registrada

- [ ] Mapa incorporado — só entra com um embed oficial válido.
- [ ] Galeria de fotos reais e visualizador — depende de material autorizado.
- [ ] Lighthouse — ferramenta não disponível neste ambiente (ver `validation.md`).
