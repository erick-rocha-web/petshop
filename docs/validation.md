# Validação — Essência Animal Vet (prévia)

Resultado real das verificações executadas em 22/09/2026, no build de produção
servido por `npm run preview` (`http://localhost:4173/`), salvo onde indicado.

Ambiente: Windows 11, Node 24.14.0, npm 11.9.0, Chrome 1374×724 CSS (janela
maximizada, `devicePixelRatio` 1,25).

## 1. Build e testes

```
npm run build     tsc --noEmit + vite build — concluído sem erros
                  dist/index.html    1,28 kB  (gzip 0,69 kB)
                  dist/assets/*.css 20,08 kB  (gzip 4,75 kB)
                  dist/assets/*.js 243,23 kB  (gzip 75,11 kB)

npm test          8 testes, 8 passando (src/lib/contact.test.ts)
```

O teste cobre o ponto que o SDD marcou como prioritário: número correto em todos
os assuntos, 13 dígitos sem acréscimo ou remoção, acentos preservados após
`decodeURIComponent`, correspondência entre serviço escolhido e mensagem,
mensagens distintas por assunto e ausência de texto que prometa confirmação.

## 2. Lighthouse

Executado com Lighthouse 13.5.0 sobre o build de produção, Chrome headless.

| Perfil | Desempenho | Acessibilidade | Boas práticas | SEO |
| --- | --- | --- | --- | --- |
| Mobile | **99** | **100** | **100** | 66 |
| Desktop | **100** | **100** | **100** | não auditado |

Métricas mobile: FCP 1,4 s · LCP 2,2 s · TBT 0 ms · CLS 0.
Métricas desktop: LCP 0,5 s · TBT 0 ms · CLS 0.

**Sobre o SEO 66:** a única auditoria reprovada é `is-crawlable` — "Page is
blocked from indexing". Isso é intencional e exigido pelo SDD (seção 7): a
prévia leva `noindex, nofollow` e um `robots.txt` que bloqueia rastreadores.
Quando a empresa aprovar o site, basta remover a meta tag e o `robots.txt` para
essa nota subir. Nenhuma outra auditoria de SEO falhou.

## 3. Critérios de aceitação

| ID | Situação | Evidência |
| --- | --- | --- |
| AC-01 | Atende | A abertura nomeia a empresa, diz o que ela faz e onde fica, acima da dobra em desktop e celular. |
| AC-02 | Atende | Cabeçalho 69 px no desktop e 61 px no celular; nenhuma seção usa altura de tela cheia. |
| AC-03 | Atende | Os três cartões listam só serviços vindos do material fornecido. |
| AC-04 | Atende | Os 7 links de WhatsApp da página usam `https://wa.me/5561998135153?text=`; conferido no DOM e por teste. |
| AC-05 | Atende | Selecionar um serviço altera a prévia e o link, sem navegar nem enviar (verificado por script: URL inalterada). |
| AC-06 | Atende | "Continuar no WhatsApp" usa o assunto escolhido; nenhum texto afirma reserva confirmada. |
| AC-07 | Atende | Botão do Maps usa o CID fornecido; endereço idêntico ao da fonte de verdade. |
| AC-08 | Atende | Sem preços, horários semanais, profissionais, credenciais, clientes ou resultados. |
| AC-09 | Atende | "4,9 no Google · 122 avaliações" com "Dados consultados em 22/09/2026"; valor estático. |
| AC-10 | Atende | Menu abre/fecha, Escape fecha e devolve o foco ao botão; FAQ em `<details>` nativo; foco visível global. |
| AC-11 | Atende | `prefers-reduced-motion` desliga rolagem suave e transições; zoom 200 % equivale a ~687 px, largura verificada sem quebra. |
| AC-12 | Atende | Sem rolagem horizontal em 320, 360, 390, 480, 600, 687, 720, 768, 900, 1024, 1280 e 1374 px. Barra móvel deixa 37 px de folga abaixo da última linha. |
| AC-13 | Atende | Imagens com `width`/`height`, origem documentada e fallback testado com arquivo inexistente. |
| AC-14 | Atende | Build concluído; console sem erros de aplicação ao percorrer a página, abrir todo o FAQ e trocar todos os assuntos. |
| AC-15 | Atende | Faixa "Prévia de site para avaliação", rodapé com autoria, `noindex, nofollow` e `robots.txt`. |
| AC-16 | Atende | Telefone, endereço, serviços, mensagens, avaliação e textos ficam em `src/data/business.ts`. |

## 4. Verificações executadas

### Links e conteúdo
- 23 links na página; nenhum `href="#"` ou vazio.
- 7 links de WhatsApp, todos com o número correto e mensagens codificadas.
- Links externos: perfil do Maps (CID fornecido) e `tel:+5561998135153`.
- Hierarquia de títulos: um `h1`, quatro `h2` de seção, `h3` nos cartões.

### Seleção de assunto (RF-02)
Clicar no botão de um cartão marca o chip correspondente, e clicar num chip
marca o botão do cartão — os dois estados ficam sincronizados. A prévia da
mensagem e o link mudam junto. A URL da página não muda e nenhuma aba abre.

### Menu móvel (RF-01)
Abrir (`aria-expanded=true`), Escape (fecha e o foco volta ao botão), reabrir,
escolher um link (fecha e a âncora leva à seção). Rótulo alterna entre
"Abrir menu" e "Fechar menu".

### Âncoras
Com o cabeçalho de 69 px, as quatro seções param a 80 px do topo da janela;
nenhum título fica atrás do cabeçalho.

### Imagens
As três imagens de serviço renderizam **exatamente no mesmo tamanho** em todas as
larguras conferidas (por exemplo 334×222 em 390 px, 518×346 em 768 px, 357×237 em
1374 px), sempre na proporção 3:2 original, sem recorte. Todas têm texto
alternativo descritivo. O `srcset` entrega o arquivo de 480 px em telas menores e
o de 720 px quando a densidade pede.

Fallback: ao apontar uma imagem para um arquivo inexistente, o componente marca
`data-failed`, oculta o `img`, mantém a área reservada e mostra "Imagem
indisponível" com o texto alternativo como `aria-label`. Os outros cartões
continuam idênticos.

### Contraste (mínimo exigido: 4,5:1)
Menor valor medido: **5,03:1**. Amostras: texto secundário sobre fundo 5,44:1;
sobre superfície branca 5,88:1; corpo sobre branco 13,24:1; nota do rodapé com
alfa sobre a primária 7,36:1; chip selecionado 10,09:1; links de navegação
5,88:1. A seleção nunca depende só de cor — muda borda, fundo, peso e marca.

## 5. Limitações concretas

- **Largura de 1440 px não foi testada diretamente.** A janela do Chrome estava
  maximizada em 1536×864 físicos (1374×724 CSS) e não aceitou redimensionamento.
  As larguras de 320 a 1374 px foram verificadas dentro de iframes de largura
  fixa, que aplicam as media queries corretamente. Acima de 1120 px o conteúdo
  fica travado na largura máxima, então 1440 px mostra o mesmo layout de 1374 px
  com margens laterais maiores.
- **Nenhuma mensagem foi enviada à empresa.** Só a composição dos links foi
  verificada. O WhatsApp não foi aberto e nenhuma conta foi validada pelo
  navegador.
- **Lighthouse rodou contra `localhost`**, sem latência de rede real. Os números
  acima valem como referência do build, não como medição de um site publicado.
- **Sem fotos reais da empresa.** As quatro imagens são ilustrativas e estão
  identificadas como tal na página.
- **Sem dados de horário semanal, preços ou profissionais**, porque não foram
  confirmados. A página direciona ao WhatsApp nesses pontos.

## 6. O que depende da empresa antes de virar site oficial

1. **Identidade visual** — logotipo, paleta e tipografia reais. A paleta atual é
   uma proposta e está inteiramente em `src/styles/tokens.css`.
2. **Autorização dos materiais** — fotos reais do estabelecimento, da equipe e
   dos serviços, com permissão de uso. Há lugar reservado para até três.
3. **Horários completos** de abertura e fechamento por dia da semana.
4. **Informações profissionais cabíveis** — nome e registro de quem responde
   tecnicamente, se a empresa quiser exibir.
5. **Revisão dos serviços** — confirmar a lista de cada área, espécies atendidas
   e o que pode ser afirmado sobre a cromoterapia.
6. **Canais** — domínio, e-mail comercial e redes sociais com URL confirmada.
7. **Decisão sobre publicação** — remover `noindex`/`robots.txt` e definir onde
   o site será hospedado.
