# SDD + prompt de implementação — Essência Animal Vet

Versão 1.0 · 22/09/2026 · Prévia comercial de um site institucional

## 0. Comando para o Claude Code

Atue como desenvolvedor front-end sênior, designer de interfaces e redator de sites para negócios locais. Implemente o MVP descrito neste documento. Use Spec-Driven Development: transforme os requisitos em decisões registradas, tarefas verificáveis, código executável e uma revisão visual final.

Leia este documento inteiro antes de implementar. Não entregue apenas um plano, explicações ou componentes isolados: entregue o site funcionando localmente, com build concluído e uma apresentação visual adequada para Erick mostrar à empresa.

O projeto é uma prévia criada por Erick para a Essência Animal Vet. A empresa respondeu ao contato comercial, mas ainda não há contratação ou aprovação deste layout. Gratuita é a prévia; não prometa desenvolvimento completo, hospedagem, manutenção ou resultados comerciais gratuitos.

Resolva as escolhas técnicas rotineiras sem interromper a execução. Quando uma informação da empresa estiver ausente, aplique o fallback definido aqui e registre a pendência. Não invente dados para preencher espaços.

Se já existir um repositório, leia suas instruções e identifique a stack antes de editar. Preserve alterações existentes e reaproveite os componentes úteis. Em um repositório que pertença a outro projeto, crie uma pasta isolada para este MVP.

## 1. Objetivo e limites do produto

### Objetivo

Criar uma página bonita, acolhedora, compacta e fácil de usar no celular, que apresente os três núcleos do negócio e ajude o visitante a iniciar uma conversa pertinente no WhatsApp.

A apresentação deve permitir que a proprietária visualize uma aplicação concreta: alguém conhece os serviços, encontra a localização e solicita informações ou um horário. Não afirmar que o site, sozinho, trará tráfego, aumentará vendas ou garantirá agendamentos.

### Público e tarefas principais

| Visitante | O que precisa fazer |
| --- | --- |
| Tutor procurando atendimento veterinário | Entender os serviços informados e solicitar um horário |
| Tutor interessado em banho e tosa | Conhecer o centro de estética e perguntar sobre disponibilidade |
| Cliente da Pet Store | Perguntar sobre produtos ou medicamentos disponíveis |
| Pessoa que já conhece a empresa | Encontrar endereço, rota e contato rapidamente |

### Escopo P0: obrigatório

Uma página com navegação por âncoras, apresentação inicial, três áreas de serviços, uma interação útil para escolher o assunto do contato, informações sobre a experiência de atendimento, localização, perguntas frequentes e rodapé. WhatsApp e Maps são as integrações externas do MVP.

### Fora do MVP

Login, painel administrativo, banco de dados, pagamentos, carrinho, catálogo com estoque, agenda real, chatbot, IA de atendimento, triagem clínica, upload de exames, prontuários, captura de leads, CRM e gestão de anúncios.

Não construir essas funcionalidades como simulações enganosas. A evolução futura pode ser documentada em poucas linhas, sem atrasar a demonstração.

## 2. Fonte de verdade da empresa

Os dados abaixo foram fornecidos por Erick a partir do perfil do Google Maps e de uma conversa real com a empresa. Não precisam de cadastro em serviços externos para funcionar no MVP.

| Campo | Valor autorizado para esta especificação | Origem e observação |
| --- | --- | --- |
| Nome principal | Essência Animal Vet | Nome atual apresentado no Maps e no WhatsApp |
| Descrição | Pet Shop, Clínica Veterinária e Pet Store | Nome expandido no Maps; usar forma curta na interface |
| Localização | Taguatinga Sul, Brasília — DF | Maps fornecido pelo usuário |
| Endereço | St. A Sul QSA 22 LOTE 1 — Taguatinga Sul, Brasília — DF, 72015-220 | Manter o endereço, podendo melhorar a capitalização |
| WhatsApp | (61) 99813-5153 | O usuário recebeu uma resposta nesse contato em 22/09/2026 |
| Número internacional | 5561998135153 | String; não acrescentar nem remover dígitos |
| Link de contato | https://wa.me/5561998135153 | Abertura manual pelo visitante |
| Link do Maps | https://www.google.com/maps?cid=4402007383073806765 | Perfil enviado anteriormente por Erick |
| Avaliação | 4,9 de 5, com 122 avaliações | Retrato do Maps fornecido em 22/09/2026, não dado atualizado automaticamente |
| Atendimento | Com horário agendado | Informado pela própria empresa no WhatsApp |
| Serviços veterinários | Consultas, vacinas, exames laboratoriais e complementares | Informados no WhatsApp; não ampliar a lista por suposição |
| Comercialização | Pet Store e venda de medicamentos | Não há lista confirmada de marcas, itens, estoque ou preços |
| Centro de estética | Banho, cromoterapia e toalhas descartáveis; banho e tosa aparece no material do Maps | Descrever os serviços sem atribuir efeitos terapêuticos à cromoterapia |

### Informações que não estão confirmadas

- Logotipo oficial, paleta e tipografia da marca.
- Fotos autorizadas da equipe, do estabelecimento ou dos animais atendidos.
- Nome, foto e registro profissional das pessoas responsáveis pelo atendimento.
- Horários de abertura e fechamento de cada dia da semana.
- Preços, formas de pagamento, duração e disponibilidade dos serviços.
- Relação completa de espécies atendidas, produtos e marcas.
- Domínio, Instagram, e-mail comercial e eventual site já existente fora do Maps.

O texto “Aberto · Fecha às 19:00” é um estado observado no Maps. Ele não permite deduzir o horário de toda a semana. Não criar tabela de horários nem indicador dinâmico de “aberto agora”. Usar “Consulte os horários disponíveis pelo WhatsApp”.

O botão “Adicionar website” no Maps não comprova que a empresa não possui site em outro endereço. Não usar essa suposta ausência como argumento dentro da página.

Não reutilizar “Turma do Pet” ou outros nomes citados em avaliações antigas. A identidade apresentada nesta prévia é Essência Animal Vet.

## 3. Conteúdo e ordem da página

Toda a interface deve estar em português do Brasil. Frases curtas, concretas e naturais. Evitar linguagem de agência, superlativos e textos que poderiam servir para qualquer empresa.

### 3.1 Cabeçalho

- Nome “Essência Animal Vet”, com assinatura discreta “Taguatinga Sul”.
- Links: Serviços, Conheça, Localização e Dúvidas.
- CTA curto: “Falar no WhatsApp”.
- No celular: nome, botão de menu acessível e navegação compacta.
- Usar tratamento tipográfico provisório se não houver logo. Não inventar um selo profissional ou fingir que uma marca criada para a prévia é a identidade oficial.
- Na demonstração, exibir uma identificação discreta: “Prévia de site para avaliação”.

### 3.2 Abertura

**Linha de contexto:** Atendimento veterinário, estética e Pet Store em Taguatinga Sul.

**Título sugerido:** Cuidado para o seu pet, perto de você.

**Texto de apoio:** Consultas, vacinas, exames e cuidados estéticos, com atendimento por horário agendado na Essência Animal Vet.

**CTA principal:** Solicitar um horário.

**CTA secundário:** Conhecer os serviços — rola até a área correspondente.

**Informação complementar:** Taguatinga Sul, Brasília — DF · Atendimento com horário agendado.

Usar uma composição visual com um animal e elementos gráficos discretos. Essa imagem não pode ser apresentada como paciente da empresa se for ilustrativa. Não usar foto de veterinário genérico como se fosse integrante da equipe.

A abertura precisa explicar o negócio sem obrigar o visitante a rolar. Não colocar um texto enorme, uma frase abstrata ou um vídeo automático ocupando a tela.

### 3.3 Serviços e contato por assunto

**Título:** Como podemos ajudar seu pet?

Apresentar três cartões de tamanho equilibrado. Cada cartão precisa ter título, uma descrição breve, até quatro itens e um botão específico.

| Cartão | Conteúdo | Botão |
| --- | --- | --- |
| Atendimento veterinário | Consultas, vacinação, exames laboratoriais e complementares. Atendimento com horário agendado. | Solicitar atendimento |
| Banho e tosa | Cuidados estéticos; mencionar toalhas descartáveis. Cromoterapia pode aparecer como serviço informado pela empresa, sem promessa de benefício clínico. | Consultar horários |
| Pet Store | Produtos e medicamentos para pets. Disponibilidade e valores confirmados pela equipe. | Consultar produtos |

Os botões selecionam um assunto em uma área compacta logo abaixo dos cartões, chamada “Vamos conversar?”. Essa área mostra a mensagem que será preparada e oferece “Continuar no WhatsApp”. Não abrir uma nova janela só ao selecionar um cartão.

Todos os serviços devem continuar visíveis; a seleção serve para personalizar o contato, não para esconder informações importantes. No celular, os cartões podem ficar empilhados. Não exigir arrastar um carrossel para encontrar uma área do negócio.

### 3.4 Conheça a Essência Animal Vet

**Título:** Saúde, estética e produtos no mesmo endereço.

**Texto-base:** Na Essência Animal Vet, você encontra atendimento veterinário, centro de estética e Pet Store em Taguatinga Sul. Fale com a equipe para conhecer os serviços e consultar os horários disponíveis.

Destacar apenas informações confirmadas: atendimento com horário agendado, três áreas de serviço e localização.

Reservar lugar para até três fotos reais, caso sejam fornecidas. Se não houver material autorizado, entregar esta seção com texto, ícones e uma composição ilustrativa bem acabada, sem galeria vazia, cartões “em breve” ou imagens quebradas.

Pode haver um indicador pequeno: “4,9 no Google · 122 avaliações”, ligado ao perfil da empresa, acompanhado de “Dados consultados em 22/09/2026”. Não usar contador animado ou chamar esse número de avaliação do próprio site.

Não criar depoimentos, nomes de clientes, fotos de avaliadores ou histórias clínicas. Os recortes de avaliações fornecidos não têm identificação completa para montar cartões individuais com autoria.

### 3.5 Localização

**Título:** Estamos em Taguatinga Sul.

Exibir o endereço completo e o telefone clicável. Usar “Ver localização no Google Maps” como ação principal do bloco, com o link fornecido.

Para o MVP, preferir um cartão de endereço com acabamento visual e um link externo. Um mapa incorporado é opcional e só entra se houver um embed oficial válido; não inventar coordenadas, chaves de API ou uma imagem de mapa que pareça indicar uma rota real.

**Horários:** Atendimento com horário agendado. Consulte a disponibilidade pelo WhatsApp.

### 3.6 Perguntas frequentes

Usar um acordeão acessível, sem animação longa. Conteúdo inicial:

1. **Preciso marcar um horário?** Sim. A empresa informa que o atendimento é realizado com horário agendado. Entre em contato para consultar a disponibilidade.
2. **Quais serviços veterinários vocês oferecem?** Consultas, vacinas e exames laboratoriais e complementares. Consulte a equipe para saber mais sobre o atendimento que seu pet precisa.
3. **Vocês têm banho e tosa?** A empresa conta com centro de estética e serviços de banho e tosa. Os detalhes e horários são confirmados pelo WhatsApp.
4. **Posso consultar produtos e medicamentos pelo WhatsApp?** Sim, você pode falar com a equipe para consultar a disponibilidade e os valores.

Não adicionar dúvidas sobre urgências, tratamentos, diagnósticos, sedação, contraindicações ou prescrição. O site não presta orientação clínica.

### 3.7 Rodapé

Nome, localização resumida, telefone, link do Maps e identificação da demonstração. Na prévia, usar “Proposta de site desenvolvida por Erick Rocha”. Não exibir “site oficial” ou afirmar contratação.

Não adicionar ícones de redes sociais sem URL confirmada, página de privacidade fictícia ou links que não levam a lugar algum.

## 4. Direção visual

### Personalidade

Uma clínica de bairro bem apresentada: acolhedora, organizada e contemporânea. Equilibrar confiança no atendimento veterinário com a proximidade de um negócio pet. O resultado deve parecer pensado para essa empresa.

Evitar tanto a aparência de sistema hospitalar quanto uma loja infantil cheia de desenhos. Não usar a estética escura, neon ou os elementos técnicos de um portfólio de programador.

### Paleta proposta, ainda não oficial

| Token | Valor inicial | Aplicação |
| --- | --- | --- |
| Fundo | #F7F6F2 | Fundo principal quente e claro |
| Superfície | #FFFFFF | Cartões e áreas de leitura |
| Primária | #164A3D | Botões principais, títulos pontuais e ícones |
| Primária suave | #E8EFE8 | Faixas e detalhes de apoio |
| Texto | #24332D | Títulos e texto principal |
| Texto secundário | #59685F | Descrições |
| Borda | #D8E1D9 | Separações discretas |
| Detalhe quente | #D7AE7C | Elementos decorativos pequenos, sem texto branco sobre eles |

Se forem fornecidos materiais oficiais coerentes, adaptar os tokens à identidade real. Registrar a origem da decisão; não dizer que a paleta acima foi extraída da empresa.

### Escala e composição

- Conteúdo com largura máxima próxima de 1120 px.
- Margens laterais de 20 px no celular e 24–40 px em telas maiores.
- Cabeçalho de aproximadamente 64–72 px no desktop e 56–64 px no celular.
- Título principal: 40–52 px no desktop; 30–36 px no celular, ajustado à quebra das palavras.
- Títulos de seção: 26–34 px no desktop; 24–28 px no celular.
- Corpo: 16–18 px; entrelinha confortável. Informações secundárias de 13–14 px somente quando continuarem legíveis.
- Botões com pelo menos 44 px de altura e rótulos curtos; normalmente 44–48 px são suficientes.
- Espaçamento vertical entre seções: aproximadamente 56–80 px no desktop e 40–56 px no celular.
- Cantos arredondados moderados: 12–20 px. Sombras leves, usadas seletivamente.
- Uma família tipográfica bem escolhida, com no máximo três pesos. Preferir fonte local existente; se adicionar outra, conferir licença e desempenho. Manter fallback de sistema.
- A abertura em desktop pode usar duas colunas com texto e imagem. No celular, título, descrição e CTA vêm antes do visual.
- Não usar `height: 100vh` para cada seção nem cabeçalhos de 80–120 px. Na abertura, a altura vem do conteúdo.
- Em 1440 × 900, o visitante deve enxergar o título, o texto, os CTAs e pelo menos a transição para o conteúdo seguinte. Em 390 × 844, o CTA principal precisa aparecer sem rolagem excessiva.

### Acabamento esperado

Usar alinhamento rigoroso, cartões com hierarquia consistente, fotografias bem enquadradas e pequenas variações de fundo entre blocos. Um detalhe orgânico discreto pode dar personalidade à abertura. Não repetir patinhas em todo lugar.

Não aceitar a primeira versão com aparência genérica. Rever especialmente proporção do título, tamanho da imagem, densidade dos cartões, distribuição de espaço e legibilidade no celular.

## 5. Interações e comportamento

### RF-01 — Navegação

Âncoras funcionam com compensação da altura do cabeçalho. Menu móvel abre e fecha, responde a Escape e devolve o foco ao botão. Um link escolhido fecha o menu.

### RF-02 — Escolha do assunto

Três opções: atendimento veterinário, banho e tosa, Pet Store. Usar estado explícito e botões com indicação acessível de seleção. A seleção atualiza o assunto e a prévia da mensagem.

Estado inicial: mensagem geral. Mudar a seleção não dispara WhatsApp, não submete dados e não gera um falso sucesso. Se o componente estiver fora da tela, uma rolagem curta pode levá-lo à área visível; respeitar redução de movimento.

### RF-03 — WhatsApp

Centralizar o número em uma configuração e gerar todos os links com a mesma função. Usar exatamente `5561998135153`.

| Origem do contato | Mensagem a preparar |
| --- | --- |
| Cabeçalho e contato geral | Olá! Vi a página da Essência Animal Vet e gostaria de saber mais sobre os serviços. |
| Solicitar um horário na abertura | Olá! Vi a página da Essência Animal Vet e gostaria de consultar os horários disponíveis para atendimento. |
| Atendimento veterinário | Olá! Gostaria de informações sobre atendimento veterinário na Essência Animal Vet e de consultar os horários disponíveis. |
| Banho e tosa | Olá! Gostaria de saber mais sobre o banho e tosa da Essência Animal Vet e consultar os horários disponíveis. |
| Pet Store | Olá! Gostaria de consultar a disponibilidade e os valores de produtos na Pet Store da Essência Animal Vet. |

Estrutura: `https://wa.me/5561998135153?text=` + mensagem codificada por `encodeURIComponent`.

A navegação só acontece após clique explícito. O site prepara a mensagem; a pessoa a envia no WhatsApp. Não programar envio automático, checagem de existência de contas ou integrações não oficiais.

O texto da interface deve dizer “Solicitar”, “Consultar” ou “Falar”. Não mostrar “Agendamento confirmado”, pois não existe confirmação de agenda no MVP.

### RF-04 — Acesso rápido ao contato

No celular, pode haver uma barra discreta com “Falar no WhatsApp”, desde que não cubra conteúdo, respeite a área segura inferior e tenha espaço correspondente no final da página. No desktop, usar botão de contato no cabeçalho; evitar vários controles flutuantes concorrentes.

### RF-05 — Acordeão e movimento

Perguntas frequentes operáveis por teclado, com estado de expansão comunicado corretamente. Preferir controles nativos quando suficientes.

Hover e transições entre 150 e 220 ms; entradas de seção de até 350 ms, com deslocamento pequeno. Respeitar `prefers-reduced-motion`. O conteúdo permanece disponível se animações não executarem.

Sem cursor personalizado, som, vídeo automático, parallax intenso, carrossel automático ou animações que atrasem o clique.

### RF-06 — Fotos opcionais

Se houver fotos reais autorizadas em quantidade suficiente, uma galeria pequena pode abrir um visualizador com Escape, fechamento visível e foco correto. Se não houver, omitir essa interação. A falta de galeria não impede a conclusão do MVP.

## 6. Ativos visuais

1. Examinar os arquivos fornecidos no projeto antes de escolher imagens.
2. Priorizar materiais autorizados da empresa. Conferir se são dessa unidade e se têm resolução adequada.
3. Se não houver, usar imagem licenciada claramente ilustrativa ou uma composição gráfica própria simples. Registrar fonte e licença no README. Não tratar uma foto encontrada no Maps como automaticamente autorizada para reutilização.
4. Não criar retratos de supostos veterinários, fotos falsas do estabelecimento, certificados, uniformes com marcas não aprovadas ou animais apresentados como pacientes reais.
5. Não usar a captura da frase comercial enviada por Erick como imagem do site. Ela é apenas contexto da conversa de vendas.
6. Evitar dependência de hotlinks instáveis. Armazenar localmente os ativos permitidos e tratar falha de carregamento com um fallback visual.
7. Não deixar imagens sem dimensões, recortes que escondam o animal ou textos importantes dentro da fotografia.

## 7. Arquitetura e implementação

### Escolha de stack

Reutilizar a stack do repositório quando adequada. Em uma pasta vazia, usar Vite, React e TypeScript, com CSS organizado por tokens e componentes. Se Tailwind já estiver instalado, pode ser mantido. Não instalar um framework pesado apenas para esta página.

Escolher versões compatíveis disponíveis no ambiente, sem pressupor que uma versão citada de memória seja a atual. Quando precisar consultar APIs, usar documentação oficial. Não migrar dependências sem necessidade.

Preferir exportação estática e poucas dependências. O site deve funcionar sem servidor de aplicação, chaves de API ou serviços pagos.

### Organização sugerida

Adaptar à estrutura existente; os nomes abaixo são referência:

```text
docs/
  spec.md
  tasks.md
  validation.md
src/
  data/business.ts
  lib/contact.ts
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    ContactIntent.tsx
    About.tsx
    Location.tsx
    FAQ.tsx
    Footer.tsx
  styles/tokens.css
  App.tsx
public/
  images/
README.md
```

`business.ts` concentra nome, endereço, telefone, Maps, serviços, mensagens, avaliação e data de referência. Os horários semanais devem permanecer ausentes enquanto não forem confirmados. Armazenar o CID do Maps e o telefone como strings.

Separar conteúdo de apresentação para Erick poder ajustar textos e substituir imagens sem percorrer todos os componentes.

### Acessibilidade

Hierarquia de títulos coerente, links e botões semânticos, foco visível, rótulos completos, navegação por teclado e textos alternativos adequados. Elementos decorativos devem ser ignorados pelo leitor de tela.

Buscar contraste mínimo de 4,5:1 para texto comum. Seleção, estado e erro não podem depender apenas de cor. Verificar uso com zoom de 200% e ausência de rolagem horizontal em 360 px.

### Desempenho

Imagens dimensionadas e comprimidas, formatos modernos quando disponíveis e carregamento tardio das imagens abaixo da abertura. A imagem principal não deve atrasar por lazy loading desnecessário.

Evitar bibliotecas grandes para ícones e animações simples. Usar SVGs pequenos ou recursos já existentes. Não carregar Maps incorporado, vídeo ou scripts de marketing na abertura.

Como meta de revisão, buscar Lighthouse mobile de desempenho acima de 90 no build quando a ferramenta estiver disponível. Registrar resultado e ambiente reais; não afirmar uma nota que não foi medida.

### Demonstração e publicação

O modo de demonstração é o padrão, identificado na interface. Aplicar `noindex, nofollow` à prévia; isso é uma instrução para mecanismos de busca, não controle de acesso.

Não apresentar metadados, domínio ou rodapé como presença oficial contratada. Na prévia, evitar dados estruturados que a apresentem como site oficial da empresa. Título: “Essência Animal Vet — Prévia de site”.

Não incluir analytics, pixels, formulários persistentes ou cookies opcionais no MVP. Não criar uma política jurídica fictícia para aparentar completude.

Entregar a prévia local e o build. Se Erick já tiver indicado um ambiente de publicação autorizado para demonstrações, seguir esse fluxo; caso contrário, informar como compartilhar uma prévia sem publicar automaticamente em nome da empresa.

## 8. Plano de execução por especificação

### Etapa A — Inspeção e decisões

Ler o repositório, identificar assets e comandos existentes e registrar em `docs/spec.md`: objetivo, fonte de dados, paleta provisória, componentes e exclusões. Criar `docs/tasks.md` com itens P0 curtos. Não copiar centenas de tarefas triviais.

### Etapa B — Primeira tela e base visual

Implementar tokens, cabeçalho, abertura, CTA e estrutura responsiva. Conferir a composição em desktop e celular antes de expandir os blocos. Corrigir escala e espaçamento nesta etapa, sem deixar uma primeira tela gigantesca para ajustar no final.

### Etapa C — Página completa

Implementar serviços, contato por assunto, Conheça, localização, FAQ e rodapé. Conectar todos os botões às ações reais previstas. Nenhum botão pode ficar com `href="#"` sem função adequada.

### Etapa D — Verificação funcional e visual

Executar o build e as verificações adequadas à stack. Testar o fluxo inteiro como visitante. Corrigir os problemas observados, respeitando o escopo.

### Etapa E — Entrega

Finalizar documentação, registrar pendências reais e fornecer comandos de execução. Entregar evidências visuais se o ambiente permitir. Não encerrar com “posso implementar depois”.

## 9. Critérios de aceitação

| ID | Condição para aprovar |
| --- | --- |
| AC-01 | Em poucos segundos, a abertura identifica Essência Animal Vet, a localização e o que a empresa oferece. |
| AC-02 | Cabeçalho, abertura e cartões têm escala equilibrada; não há seções artificialmente forçadas a ocupar uma tela inteira. |
| AC-03 | Os três núcleos do negócio aparecem com serviços respaldados pelo material fornecido. |
| AC-04 | Todos os links de WhatsApp usam exatamente 5561998135153 e mensagens corretamente codificadas. |
| AC-05 | Selecionar um serviço altera a prévia do contato sem abrir ou enviar nada automaticamente. |
| AC-06 | O CTA final abre o WhatsApp com o assunto escolhido; nenhuma reserva é marcada como confirmada. |
| AC-07 | O botão do Maps usa o perfil correto e o endereço corresponde ao fornecido. |
| AC-08 | Não existem preços, horários semanais, profissionais, credenciais, clientes ou resultados inventados. |
| AC-09 | A avaliação, se utilizada, aparece com número e data de referência; nenhum dado é apresentado como atualizado ao vivo. |
| AC-10 | Menu, acordeão e demais controles funcionam por teclado, com foco visível e Escape quando aplicável. |
| AC-11 | A página permanece utilizável com redução de movimento e zoom de 200%. |
| AC-12 | Em 360, 390, 768 e 1440 px de largura não há sobreposição ou rolagem horizontal; o contato móvel não cobre conteúdo. |
| AC-13 | Imagens têm origem documentada, dimensões adequadas e fallback. Ausência de fotos reais não produz seções incompletas. |
| AC-14 | Build concluído e ausência de erros de aplicação no console no fluxo principal. |
| AC-15 | A prévia é identificada como demonstração, sem falsa aprovação da empresa e sem indexação intencional. |
| AC-16 | Erick consegue trocar telefone, endereço, serviços e mensagens em uma configuração central. |

### Verificações mínimas com utilidade real

- Conferir automaticamente ou com um teste focado a função geradora do WhatsApp: número correto, acentos preservados após decodificação e correspondência entre serviço escolhido e mensagem. Esse ponto é prioritário porque a prospecção anterior já teve confusão entre telefone comercial e WhatsApp.
- Fazer uma passagem manual de navegação, menu, seleção de serviço, CTA e FAQ.
- Inspecionar visualmente em 390 × 844 e 1440 × 900; verificar também 360 e 768 px para quebras de layout.
- Usar o build de produção para a verificação final de carregamento quando possível.
- Testar a composição dos links sem enviar mensagens à empresa. Se o ambiente impedir abrir o WhatsApp, registrar essa limitação; não declarar uma conversa ou conta como validada pelo navegador.
- Se não houver ferramenta de screenshot, registrar a limitação e fornecer passos concretos para inspeção. Não inventar capturas, testes ou notas de desempenho.

Não criar uma suíte extensa de testes para estilos estáticos, nem testes que apenas repitam os valores do código sem verificar comportamento.

## 10. Entregáveis e formato do encerramento

Entregar:

1. Site implementado na pasta apropriada, com dependências registradas e build reproduzível.
2. README com comandos exatos de instalação, execução e build; localização dos dados editáveis; fonte dos assets; instrução para trocar a identidade provisória.
3. `docs/spec.md` e `docs/tasks.md`, refletindo o que foi realmente feito.
4. `docs/validation.md` com resultado dos critérios de aceitação, verificações executadas e limitações concretas.
5. Captura desktop e mobile, quando tecnicamente disponível, para Erick apresentar a proposta.
6. Lista curta das informações necessárias antes de transformar a prévia em site oficial: identidade visual, autorização dos materiais, horários completos, informações profissionais cabíveis e revisão dos serviços pela empresa.

No encerramento, informar objetivamente: o que funciona, como abrir, quais verificações passaram e o que depende de informação da empresa. Pendências de conteúdo não devem impedir uma prévia visual completa com os fallbacks acima.

## 11. Regra final de qualidade

O objetivo não é construir a maior quantidade de recursos. É produzir uma demonstração que a empresa consiga entender e avaliar: visual próprio, conteúdo verdadeiro, navegação simples e contato útil.

Antes de entregar, pergunte internamente: o site parece feito para uma clínica e pet shop de Taguatinga Sul? A primeira tela está equilibrada? O contato usa o número correto? A experiência deixa claro que o horário será combinado com a equipe? Há alguma afirmação que não veio dos dados fornecidos?

Corrija o que falhar e conclua a implementação.
