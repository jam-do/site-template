import { getProjectStructure } from '../lib/exports.js';
let blogPosts = Object.keys(getProjectStructure('./src/').blog);

let links = '';

blogPosts.forEach((postFolder) => {
  links += /*html*/ `<a href="./blog/${postFolder}/">${postFolder}</a>`;
});

export default /*html*/ `<menu>${links}</menu>`;