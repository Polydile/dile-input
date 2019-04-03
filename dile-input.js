import { LitElement, html, css } from 'lit-element';
/**
 * # Polydile Input
 * 
 * <dile-input></dile-input>
 * 
 * @customElement
 * @litElement
 */
class DileInput extends LitElement {
  static get properties() {
    return {
      /** Label to the element */
      label: { type: String },

      /** Set a placeholder to the input element */
      placeholder: { type: String },

      /** Disable the input field */
      disabled: { type: Boolean },

      /** Set initial value to the input. This property syncs to the input field value property */
      value: { type: String },
    };
  }
  constructor() {
    super();
    this.placeholder = '';
    this.label = '';
    this.value = '';
  }
  static get styles() {
    return css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 4px;
      color: var(--dile-input-label-color, #59e);
    }
    input {
      box-sizing: border-box;
      border-radius: 5px;
      border: var(--dile-input-border-size, 1px) solid var(--dile-input-border-color, #888);
      font-size: 1em;
      padding: 5px;
      width: 100%;
    }
    input.invalid {
      border-color: var(--dile-input-invalid-color, #c33);
    }
    input:focus {
      outline: none;
      border-color: var(--dile-input-focus-border-color, #6af)
    }
    input::placeholder {
      color: #ccc;
    }
    input:disabled {
      background-color: #f5f5f5;
      border-color: var(--dile-input-disabled-border-color, #eee);
    }
    `;
  }
  render() {
    return html`
    <div>
      ${this.label
        ? html`<label for="textField">${this.label}:</label>`
        : ''
      }
      <input 
        type="text" 
        id="textField" 
        placeholder="${this.placeholder}" 
        ?disabled="${this.disabled}" 
        @keypress="${this._lookForEnter}"
        @input="${this._input}"
        .value="${this.value}">
    </div>
    `;
  }
  _lookForEnter(e) {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        this.dispatchEvent(new CustomEvent('enter-pressed'));
    }
  }
  _input(e) {
    this.value = e.target.value;
  }
  
}
customElements.define('dile-input', DileInput);