# POC - CSS Modules X CSS-In-JS

Este projeto tem o fim de comparar o uso destas duas tecnologias, CSS Modules e CSS-In-Js, na criação
de um design system.

Foram desenvolvidos 2 projetos, com os mesmos componentes e com as mesmas funcionalidades, porém, com tecnologias diferentes para comparar qual "melhor" nesse cenário.

Para avaliar isto, tive como foco avaliar o custo **Complexidade x Escalabilidade x Performance**.

## Comparação dos bundles gerados no build

Abaixo estão os logs do build do Nextjs e também os chunks que o browser do usuário vai consumir.

### CSS Modules
 - Build do Nextjs
```
Page                                Size     First Load JS
┌ ○ /                               1.59 kB        65.3 kB
├   └ css/41e6b747b6c8bb552f6c.css  517 B
├   /_app                           0 B            63.7 kB
└ ○ /404                            3.18 kB        66.9 kB
+ First Load JS shared by all       63.7 kB
  ├ chunks/framework.64eb71.js      42 kB
  ├ chunks/main.477735.js           20.3 kB
  ├ chunks/pages/_app.478407.js     576 B
  ├ chunks/webpack.61095c.js        810 B
  └ css/7577b4c7358f9abae257.css    290 B
```

 - Chunks Javascript gerados (7)
```
All (294.88 KB)
static/chunks/framework-64eb7138163e04c228e4.js (127.17 KB)
static/chunks/polyfills-a54b4f32bdc1ef890ddd.js (89.86 KB)
static/chunks/main-4777350f2a9ff73ea2b0.js (61.35 KB)
static/chunks/pages/_error-9faf4177fb4e528b4124.js (8.3 KB)
static/chunks/pages/index-91537e46ddab733a87bd.js (5.46 KB)
static/chunks/webpack-61095c13c5984b221292.js (1.54 KB)
static/chunks/pages/_app-4784079995e030570ffe.js (1.2 KB)
```

### CSS-In-JS
 - Build do Nextjs
```
Page                                Size     First Load JS
┌ ○ /                               14.6 kB        78.3 kB
├   └ css/41e97c503890c3dd5f1f.css  101 B
├   /_app                           0 B            63.7 kB
└ ○ /404                            3.18 kB        66.9 kB
+ First Load JS shared by all       63.7 kB
  ├ chunks/framework.64eb71.js      42 kB
  ├ chunks/main.477735.js           20.3 kB
  ├ chunks/pages/_app.2767dd.js     555 B
  ├ chunks/webpack.61095c.js        810 B
  └ css/7577b4c7358f9abae257.css    290 B
```

 - Chunks Javascript gerados (8)
```
All (327.69 KB)
static/chunks/framework-64eb7138163e04c228e4.js (127.17 KB)
static/chunks/polyfills-a54b4f32bdc1ef890ddd.js (89.86 KB)
static/chunks/main-4777350f2a9ff73ea2b0.js (61.35 KB)
static/chunks/530-0b7ae5d4836b82199ae3.js (35.02 KB)
static/chunks/pages/_error-9faf4177fb4e528b4124.js (8.3 KB)
static/chunks/pages/index-894ed6b128f4022d31e1.js (3.3 KB)
static/chunks/webpack-61095c13c5984b221292.js (1.54 KB)
static/chunks/pages/_app-2767ddbc84b83c8aece3.js (1.15 KB)
```

## Teste de performance do Chrome

### CSS Modules
<img src="/.github/css-modules-performance.png">
## CSS-In-JS
<img src="/.github/css-in-js-performance.png">


### Performance

O teste de performance do google chrome apontou pequena diferença, apenas 10 ms na categoria scripting e 7 ms no loading. Acredito que essa diferença nos testes não é o suficiente pra julgar qual é melhor, pois são números muito pequenos e podem variar um pouco de teste pra teste.

A diferença no total no tamanho do bundle também é insignificante, em torno de 30k.


## Escalabilidade e Complexidade

Com ambas tecnologias foi possível criar a mesma interface para o dev que vai fazer uso dos componentes. Podendo mudar o texto, tamanho, esquema de cores, tipo do botão. No entanto, a forma como cada um lida com isso por debaixo dos panos é diferente.

A forma feita com o CSS-In-Js foi mais enxuta no desenvolvimento. O que resulta em menos código, menos arquivos que é igual + escalabilidade e um código mais fácil de ser mantido.

A forma feita com o CSS-Modules foi um pouco hardcore. Como não se tem uma library pra fazer a ponte entre a mutabilidade e variações do componente com os estilos, isso teve que ser feito na mão com javascript puro. O que tornou o código menos legível, mais complexo e com isso é mais difícil de dar manutenção.

Apesar de utilizar variáveis css com as duas tecnologias. O CSS-In-JS tem o Theme Provider (e mais todas as features do css nativo) que pode facilitar este trabalho, é mais custoso mas absorve complexidade. Já o CSS-Modules só se pode usar as features do css nativo (variáveis css e classes).


#### CSS Redundante por parte do CSS-In-JS

Uma observação interessante a se fazer, é que o styled-components criou muito CSS redundante. Basicamente, ele criou uma classe pra cada botão renderizado. Colocou dentro dessas classes o somatório de todas as variações de estilo (size, colorScheme e variant).

<img src="/.github/dom-css-in-js.png">
<img display="block" src="/.github/style-css-in-js.png">

#### Otimização/reaproveitamento de estilos por parte do CSS Modules

Já o CSS Modules, criou apenas um css com exatamente aquilo que foi desenvolvido. Separou cada variação de cor, tamanho e etc por classes e referenciou no componente.

<img src="/.github/dom-css-modules.png">
<img display="block" src="/.github/style-css-modules.png">
