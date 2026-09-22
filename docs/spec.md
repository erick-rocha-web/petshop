# Especificação implementada — Animalandia Pet Shop (prévia)

Registro das decisões da adaptação e do que foi efetivamente construído nesta
branch (`clientes/animalandia`).

## 1. Objetivo

Uma vitrine simples e acolhedora que apresenta o banho e tosa — foco principal
declarado pela própria empresa —, mostra as demais categorias vendidas na loja,
informa onde a loja fica e facilita o contato pelo WhatsApp.

O visitante precisa conseguir três coisas: entender o serviço principal,
conhecer a loja e sua localização, e pedir informações ou consultar horários
pelo WhatsApp.

A entrega é uma **prévia comercial**, identificada como tal na interface. A
empresa autorizou preparar a prévia; não há contratação, aprovação de layout nem
promessa de resultado comercial.

## 2. Ponto de partida

Esta branch parte da prévia construída para outra empresa (preservada em
`clientes/essencia-animal-vet`), aproveitando a estrutura técnica e o acabamento
visual já resolvidos. A stack não mudou: Vite 8 + React 19 + TypeScript 5.9, CSS
por tokens, um `.tsx` e um `.css` por componente, Vitest para os testes.

O que foi substituído: todo o conteúdo, a paleta, os metadados, a marca
provisória, os ícones e a seleção de imagens. Nenhum dado público da empresa
anterior permaneceu — há um teste automatizado que falha se algum reaparecer
(`src/lib/contact.test.ts`, bloco "dados publicados").

## 3. Fonte de dados

Tudo o que a página afirma sobre a empresa vive em `src/data/business.ts` e vem
de duas fontes: o cadastro público da loja e o retorno da própria empresa pelo
WhatsApp.

### Confirmado e publicado

- Nome, endereço completo, CEP e telefone `(62) 98541-0004` / `5562985410004`.
- "Nosso maior foco é banho e tosa" — dito pela empresa.
- Categorias vendidas: rações, medicamentos, brinquedos, acessórios pet, e os
  animais peixes e coelhos.
- Compras e retirada na loja, entrega, estacionamento gratuito no local e
  entrada acessível a cadeirantes.

### Ausente de propósito

Grade semanal de horários, preços, área e taxa de entrega, marcas, modalidades
de banho e tosa, espécies de peixe, raças de coelho, tempo de mercado, tamanho
da equipe, número de clientes e qualquer serviço veterinário.

O horário "fecha às 19h" visto no Google é um estado momentâneo do perfil e não
permite deduzir a grade da semana. Por isso a seção de localização diz, em uma
linha, que os horários de cada dia ainda não foram informados, e todos os
caminhos levam à consulta pelo WhatsApp.

### Avaliações

O material fornecido registrava nota e contagem de avaliações, mas esses números
mudam. A página **não publica número nenhum**: leva a um link "Ver avaliações no
Google", onde a nota e os comentários ficam sempre atualizados. Não há
depoimentos, autores ou estrelas inventados.

## 4. Estrutura da página

| Seção | Conteúdo |
| --- | --- |
| Abertura | "Banho e tosa no Setor Garavelo", chamada curta, CTA "Consultar horários no WhatsApp" e "Como chegar" |
| Serviços | Banho e tosa (cartão em destaque) e Produtos e acessórios |
| Também temos na loja | Categorias confirmadas, em dois grupos: produtos e animais à venda |
| Vamos conversar? | Escolha do assunto e prévia da mensagem antes de abrir o WhatsApp |
| Conheça | Texto curto, facilidades da loja e link para as avaliações |
| Localização | Endereço completo e botão para o Google Maps |
| Dúvidas | Quatro perguntas, todas respondidas por dados confirmados |
| Rodapé | Nome, endereço, telefone, mapa e identificação da prévia |

### Decisões de conteúdo

- **Banho e tosa é o destaque.** É o único cartão com o rótulo "Nosso maior
  foco", e o rótulo fica sobre a imagem, não dentro do corpo do cartão — assim
  os dois cartões continuam alinhados lado a lado.
- **Produtos são informação secundária.** Nenhuma categoria promete estoque: o
  texto sempre remete a disponibilidade à equipe.
- **Peixes e coelhos ficam em um grupo próprio, "Animais à venda".** São animais
  vendidos na loja. A separação evita que sejam lidos como atendimento, banho,
  tosa ou serviço veterinário para essas espécies — o que a loja não oferece.
- **Medicamentos entram só como categoria.** Um aviso curto diz que a equipe
  informa a disponibilidade e que a página não indica uso, dosagem nem substitui
  a orientação de um médico-veterinário. Nenhuma alegação terapêutica, nenhuma
  posologia, nenhuma menção a dispensa de receita.

## 5. WhatsApp

Todos os links passam por `src/lib/contact.ts`:

- `whatsappLink(assunto)` — mensagens dos três assuntos da área de contato.
- `whatsappLinkFor(texto)` — mensagem própria de cada categoria da loja.
- `telLink()` e `mapsLink()` — telefone e busca no mapa, do mesmo dado central.

Todo texto é codificado com `encodeURIComponent`, o que evita acento e pontuação
quebrados no aplicativo. O número vive em um único lugar.

**Abrir o WhatsApp não reserva horário**, e a interface diz isso em três pontos:
na abertura, na área "Vamos conversar?" e na seção de localização. Os botões
falam em *consultar*, nunca em agendar ou confirmar. A página nunca envia
mensagem sozinha: o clique apenas abre a conversa com o texto pronto para a
pessoa revisar.

## 6. Mapa

O link é uma **busca** pelo nome e endereço da loja, no formato público
`https://www.google.com/maps/search/?api=1&query=…`, com a consulta codificada.
Não usamos Place ID, CID nem coordenadas: nenhum dos três foi fornecido, e
inventá-los levaria o visitante ao lugar errado. O mesmo link serve para "Como
chegar" e para "Ver avaliações no Google".

## 7. Direção visual

A paleta é uma **proposta desta demonstração**, não a identidade oficial: a
empresa não forneceu logotipo nem cores. Azul-petróleo (`#15586b`) com um tom de
areia (`#f0a05a`) como detalhe, sobre fundo quente e claro — uma leitura limpa e
acolhedora, coerente com banho e tosa, e visivelmente distinta da prévia feita
para a outra empresa.

Todas as cores ficam em `src/styles/tokens.css`. Nenhum componente escreve cor
literal; as poucas transparências usam os canais `--c-*-rgb` dos mesmos tokens.
O contraste mínimo medido na paleta é 4,77:1 (texto secundário sobre a cor de
apoio), acima do mínimo de 4,5:1 para texto normal.

A marca é apenas tipográfica, e o favicon é um monograma provisório. Nenhum
logotipo foi inventado.

### Ícones

As seis categorias da loja usam ícones SVG desenhados no projeto
(`src/components/Icons.tsx`), com o mesmo traço dos demais. Não há foto de
produto nem de animal da loja, porque não temos nenhuma imagem autorizada — e
uma foto de banco apresentada como o estoque real seria falsa.

O ícone de estetoscópio foi removido junto com os serviços veterinários.

## 8. Imagens

Três dos quatro originais continuam em uso (abertura, banho e tosa, produtos).
`assets/atendimento-veterinario.png` foi retirado do site e do script de
otimização: sugere atendimento veterinário, que a loja não presta. O arquivo
original permanece no repositório, sem ser gerado nem referenciado.

Todas as imagens são ilustrativas e estão identificadas como tal na abertura e
no rodapé. Nenhum animal é apresentado como cliente da loja e não há pessoa
apresentada como integrante da equipe.

## 9. Demonstração

`noindex, nofollow` no `index.html` e `Disallow: /` no `robots.txt`. A faixa
superior e o rodapé identificam a prévia e a autoria da proposta.

Open Graph tem título, descrição, tipo, idioma e nome do site; `og:url` e
`og:image` estão **ausentes de propósito**, porque não existe domínio publicado
nem imagem oficial da loja. Não há dados estruturados: `LocalBusiness` pediria
horários reais, que não temos. O passo a passo para retirar o `noindex` na
publicação autorizada está no README.
