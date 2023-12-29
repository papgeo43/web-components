const template = document.createElement('template');
template.innerHTML = `
  <style>
  .container{
      border: 1px solid;
      padding: 10px;
      width: 300px;
    }
  .inner{
    margin: 0;
    color: red
  }
  </style>
 
  <div class="container">
      Web Component
      <button> dispatch event</button>
    <p > you searched for: <span class="inner"></span></p>
  </div>
 
`;
 
class Card extends HTMLElement {
 
  constructor() {
 
    super();
 
    this.attachShadow({ mode: 'open' });
 
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
 
  static get observedAttributes() {
    return ['name-attribute'];
  }
 
  attributeChangedCallback(name, oldValue, newValue) {
 
    if (name == 'name-attribute') {
      this.shadowRoot.querySelector('.inner').innerHTML = `${newValue}`;
    }
 
  }
 
  connectedCallback() {
 
    this.shadowRoot
      .querySelector('button')
      .onclick = () => {
        this.dispatchEvent(new CustomEvent('show-greeting', {
          detail: {
              showGreetings: true
          },
          bubbles: true,
          composed: true
       }));
 
      };
  }
 
}
 
window.customElements.define('card-wrapper', Card);
 