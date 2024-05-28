import { htmlMin, md, applyData } from './lib/exports.js';
import template from './templates/homepage.tpl.js';

const CONTENT = /*html*/ `
<section>
  <h1 col>Hello World!</h1>
  <article>${md('./src/md/example.md')}</article>
</section>
`;

export default htmlMin(applyData(template, { CONTENT }));
