import { getImportMap } from '@jam-do/jam-tools/node/getImportMap.js';
import blogMenu from '../components/blog-menu.js';

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <base href="./" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="icon" href="./svg/logo/index.svg">
  <link rel="stylesheet" href="./css/index.css">
  ${getImportMap()}
  <script src="./js/index.js" type="module"></script>
</head>
<body>
  <header>
    <img width="80px" src="./svg/logo/index.svg">
    <span>Header text</span>
  </header>
  ${blogMenu}
  <main>
    {{CONTENT}}
  </main>
  <footer>Footer text &copy; 2024</footer>
</body>
</html>
`;
