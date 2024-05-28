## This is an example of markdown document insertion

Code example:
```html
<script type="importmap">
  {
    "imports": {
      "@symbiotejs/symbiote": "https://esm.run/@symbiotejs/symbiote"
    }
  }
</script>

<script type="module">
  import Symbiote, { html, css } from '@symbiotejs/symbiote';

  export class MyComponent extends Symbiote {

    // Initiate state:
    init$ = {
      count: 0,
      increment: () => {
        this.$.count++;
      },
    }

  }

  // Define template:
  MyComponent.template = html`
    <h2>{{count}}</h2>
    <button ${{onclick: 'increment'}}>Click me!</button>
  `;

  // Describe styles:
  MyComponent.rootStyles = css`
    my-component {
      color: #f00;
    }
  `;

  // Register the new HTML-tag in browser:
  MyComponent.reg('my-component');
</script>

<my-component></my-component>
```