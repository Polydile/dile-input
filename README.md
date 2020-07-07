# Moved

**This package has moved** and is now available at [@dile/dile-input](https://github.com/Polydile/dile-components). Please update your dependencies. This repository is no longer maintained.

# Polydile Input

Input text field Web Component, with customized design. Based on LitElement.

```
<dile-input label="The label" placeholder="Write something..."></dile-input>
```

# Install

```
npm install dile-input
```

## Import the component

### Into your HTML page

```
<script src="./node_modules/dile-input/dile-input.js" type="module"></script>

```

### ...Or into your module script

```
import 'dile-input/dile-input';
```

## Use the component

```
<dile-input
  name="input_name"
  label="Text to the label"
  value="Text to the input"
  placeholder="Some text"
  disabled
  errored
></dile-input>
```

### Properties

- name: the name of the input element. This is usefull to distinguish the related element in an input event listener.
- label: the element label
- value: defines the text inside the input element
- placeholder: Defines the texts present in the input element when is empty
- disabled: on true, the element is disabled
- errored: on true, the element is marked as error
- disabeAutocomplete: on true, the input autocomplete HTML featured is disabled

## Run the project

You will need to configure Webpack, or some similar tool, as usual in your frontend workflow. But, if you prefer, simply run the "polymer serve" command from your project folder.

1. Install the Polymer CLI:

```npm i -g polymer-cli```

2. Run the development server and open a browser pointing to its URL:

```polymer serve```

## Styling

Custom property | Description | Default
----------------|-------------|---------
--dile-input-width | Input element width | 100%
--dile-input-border-width | Input element border width | 1px
--dile-input-border-color | Input element border color | #888
--dile-input-border-radius | Input element border radius | 5px
--dile-input-error-border-color | Input element border on errored property = true | #c00
--dile-input-focus-border-color | Input element border on focus | #6af
--dile-input-disabled-border-color | Input element border when disabled | #eee
--dile-input-font-size | Input element font size | 1em
--dile-input-line-height | Input element line height | 1.5em
--dile-input-label-font-size | Font size for the label | 1em
--dile-input-label-color | Color for the label text | #59e
--dile-input-label-font-weight | Label text font weight | normal
--dile-input-label-margin-bottom | Label marging bottom | 4px
--dile-input-background-color | Color for the background input element | #fff
--dile-input-padding | Padding for the input text | 5px

## Events

### input

This element acts as an native input element. So, you can listen the native `input` event.

```
inputField.addEventListener('input', (e) => {
  console.log('input event named ', e.target.name, ' has value: ', e.target.value);
});
```

### enter-pressed

The `enter-pressed` event is dispatched when the user press enter on it.

```
inputField.addEventListener('enter-pressed', (e) => {
  console.log('enter-pressed event, value: ', e.target.value);
});
```
