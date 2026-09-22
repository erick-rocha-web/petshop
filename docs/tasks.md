# Tarefas — Animalandia Pet Shop (prévia)

Estado real no fim da adaptação, na branch `clientes/animalandia`.

## Preparação

- [x] Conferir a branch atual, o remoto e a árvore limpa antes de editar.
- [x] Ler o SDD da prévia anterior como referência técnica e visual.
- [x] Inspecionar stack, componentes, dados, metadados e a pasta `assets/`.
- [x] Preservar a versão anterior intacta em `clientes/essencia-animal-vet`.

## Conteúdo

- [x] Trocar nome, endereço, CEP e telefone pelos dados da Animalandia.
- [x] Centralizar tudo em `src/data/business.ts` (nada repetido nos componentes).
- [x] Destacar banho e tosa como foco principal, com o rótulo da própria empresa.
- [x] Apresentar produtos e acessórios como informação secundária.
- [x] Criar a seção "Também temos na loja" com as seis categorias confirmadas.
- [x] Separar peixes e coelhos em "Animais à venda", sem sugerir serviço.
- [x] Tratar medicamentos só como categoria, sem uso, dosagem ou alegação.
- [x] Remover consultas, vacinas, exames, cromoterapia e demais serviços não
      confirmados.
- [x] Reescrever "Conheça" sem tempo de mercado, equipe, certificação ou número
      de clientes.
- [x] Trocar a nota fixa de avaliações por um link para a ficha do Google.
- [x] Reescrever as perguntas frequentes com respostas sustentadas pelos dados.
- [x] Atualizar título da aba, descrição, Open Graph e textos de compartilhamento.
- [x] Atualizar textos alternativos das imagens.

## Contato

- [x] Montar todos os links com `encodeURIComponent`.
- [x] Mensagens próprias para banho e tosa, produtos e cada categoria da loja.
- [x] Botão "Consultar disponibilidade" com a mensagem confirmada no escopo.
- [x] Deixar claro, em três pontos da página, que abrir o WhatsApp é consulta e
      não reserva.
- [x] Link do mapa como busca por nome e endereço, sem Place ID nem coordenadas.

## Visual

- [x] Paleta provisória própria, só em `src/styles/tokens.css`.
- [x] Favicon e marca tipográfica provisórios, sem logotipo inventado.
- [x] Ícones novos para as categorias, no mesmo traço dos existentes.
- [x] Remover o ícone de estetoscópio e a imagem de atendimento veterinário.
- [x] Rótulo de destaque sobre a imagem, para os cartões não desalinharem.
- [x] Número de colunas do catálogo definido por medição, não por chute.

## Verificação

- [x] `npm run build` (typecheck + build) sem erros.
- [x] `npm test` — 19 testes passando.
- [x] Teste que falha se algum dado da empresa anterior reaparecer.
- [x] Teste que falha se surgir serviço veterinário, preço, horário fixo ou
      contagem de avaliações.
- [x] Conferência de 320 a 1440 px: sem rolagem horizontal e sem texto cortado.
- [x] Auditoria dos 30 links da página renderizada.
- [x] Contraste da paleta calculado par a par.

## Fora do MVP, de propósito

- Carrinho, checkout, estoque, pagamento e painel administrativo — a empresa
  informou que não vende pelo site e não tem disponibilidade para administrá-lo.
- Agendamento automático e confirmação de horário: a página só prepara a
  conversa.
- Grade de horários, preços, taxas e área de entrega: não foram informados.
- Dados estruturados `LocalBusiness`: dependem de horários reais.
- Analytics, pixels, cookies e política jurídica fictícia.
- Fotos reais da loja, da equipe e dos produtos: dependem de material autorizado.
- Publicação e deploy: fora desta etapa.
