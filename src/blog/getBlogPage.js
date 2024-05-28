import { htmlMin, md, applyData } from '../lib/exports.js';
import template from '../templates/blog.tpl.js';

/**
 * 
 * @param {String} fileName 
 */
export function getBlogPage(fileName) {
  let entryFolderName = fileName.split('/blog/')[1].split('/')[0];
  let mdPath = `./src/blog/${entryFolderName}/entry.md`;
  
  const CONTENT = /*html*/ `<section><article>${md(mdPath)}</article></section>`;
  
  return htmlMin(applyData(template, {
    CONTENT,
  }));
}

