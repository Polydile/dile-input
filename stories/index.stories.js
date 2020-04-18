import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileInput } from '../index.js';
import '../dile-input.js';

import readme from '../README.md';

storiesOf('dile-input', module)
  .addDecorator(withKnobs)
  .add(
    'Default input',
    () => html`
      <h2>Basic text field</h2>

      <dile-input
        id="theInput"
        name="the_input_name"
        placeholder="Write something..."
        label="Text field"
      ></dile-input>
      <hr>
      <button @click=${() => {
        alert(document.querySelector('dile-input').value);
      }}>Alert value</button>
      `,
  )
  .add(
    'Styled input',
    () => html`
      <h2>Customized styles</h2>
      <style>
      * {font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;}
      .customized {
        --dile-input-border-width: 3px;
        --dile-input-focus-border-color: #3c7;
        --dile-input-border-color: #cc7;
        --dile-input-border-radius: 2px;
        --dile-input-label-color: #f99;
        --dile-input-label-font-size: 0.8em;
        --dile-input-width: 50%;
        --dile-input-line-height: 1.5em;
        --dile-input-label-font-weight: bold;
        --dile-input-font-size: 1.5em;
      }
      </style>
      <dile-input
        class="customized"
        placeholder="I'am customized"
        label="Customized text field"
        value="This text is in value attribute"
      ></dile-input>
      `,
  )
  .add(
    'Errored input',
    () => html`
      <h2>Errored input field</h2>

      <dile-input 
        label="Input with error" 
        value="I have an error!!" 
        errored
      ></dile-input>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileInput), { notes: { markdown: readme } })

  