import { cssMin } from '@jam-do/jam-tools/iso/cssMin.js';
import CODE_HL from './code-hl.css.js';

const col = /* css */ `
  margin-left: auto;
  margin-right: auto;
  max-width: var(--col-width);
  padding: var(--gap-max);
`;

export default cssMin( /* css */ `
:root {
  --color-1: #212121;
  --color-2: rgb(180, 180, 180);
  --color-3: rgb(27, 27, 27);

  --radius-1: 4px;
  --radius-2: 8px;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --col-width: 960px;

  --ui-height: 38px;
}

* {
  box-sizing: border-box;
}

html, body {
  background-color: var(--color-1);
  color: var(--color-2);
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

header {
 /* <header> styles */
 display: flex;
 align-items: center;
 gap: var(--gap-max);
 font-size: 1.4em;
 ${col}
}

main {
  padding: var(--gap-mid);
}

h1 {
  &[col] {
    display: block;
    ${col}
  }
}

section {
  /* <section> styles */
  article {
    display: block;
    background-color: var(--color-3);
    color: var(--color-2);
    border-radius: var(--radius-2);
    ${col}
  }
}

button {
  /* <button> styles */
}

a {
  /* hyperlink styles */
}

ul {
  /* list styles */
  li {
    /* list item nested styles */
  }
}

footer {
  /* <footer> styles */
  ${col}
}

menu {
  display: flex;
  gap: var(--gap-mid);
  flex-wrap: wrap;
  justify-content: center;
  padding: var(--gap-mid);
  background-color: var(--color-3);
  margin: 0;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: var(--ui-height);
    width: var(--ui-height);
    background-color: var(--color-2);
    color: var(--color-1);
    border-radius: 100%;
    text-decoration: none;
    transition: transform .2s;

    &:hover, &:focus {
      transform: scale(1.2);
    }
  }
}

${CODE_HL}
`);