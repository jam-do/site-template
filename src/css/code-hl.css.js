let hlSelectorsList = [
  '.hljs-string',
  '.hljs-comment',
  '.hljs-attr',
  '.hljs-attribute',
  '.hljs-function',
  '.hljs-variable',
  '.hljs-title',
  '.hljs-property',
  '.hljs-selector-class',
  '.hljs-keyword',
  '.hljs-tag',
  '.hljs-name',
  '.hljs-number',
  '.hljs-params',
  '.hljs-literal',
];

let hlStyles = '';
let step = 0;
let hsl = () => {
  return `hsl(${step++ * 150}deg 85% 74%)`;
};

hlSelectorsList.forEach((selector) => {
  hlStyles += /*css*/ `
    code ${selector} {
      color: ${hsl()};
    }
  `;
});

export default /*css*/ `
code {
  --clr-2: rgb(20, 20, 20);
  color: var(--clr-2, #fe0);
  border-radius: var(--r1, 6px);
}

code:not([class]) {
  background-color: rgba(160, 160, 160, .3);
  color: currentColor;
  display: inline-block;
  padding: .05em;
  padding-left: .5em;
  padding-right: .5em;
  margin-left: .2em;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}

code[class] {
  display: block;
  padding: var(--gap-max, 20px);
  background-color: var(--clr-2);
  color: #fff;
  overflow: auto;
}
code .hljs-comment {
  opacity: .5;
  font-style: italic;
}
code .function_ {
  font-style: italic;
}
${hlStyles}
`;
