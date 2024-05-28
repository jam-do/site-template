import { htmlMin } from '@jam-do/jam-tools/iso/htmlMin.js';

export default htmlMin(/* svg */ `
<svg 
  version="1.1"
  width="100" height="100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="rgba(0, 0, 0, .1)" />
  <circle cx="50" cy="50" r="40" fill="#c00" />
  <circle cx="50" cy="50" r="30" fill="#cc0" />
  <circle cx="50" cy="50" r="20" fill="#c00" />
  <text x="50" y="59" font-size="30" text-anchor="middle" fill="#fff">A</text>
</svg>
`);