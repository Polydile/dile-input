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
></dile-input>
```

## Run the project

You will need to configure Webpack, or some similar tool, as usual in your frontend workflow. But, if you prefer, simply run the "polymer serve" command from your project folder.

1. Install the Polymer CLI:

```npm i -g polymer-cli```

2. Run the development server and open a browser pointing to its URL:

```polymer serve```

## Styling

Custom property | Description | Default
----------------|-------------|---------
--dile-input-label-color | Mixin applied to entire element | #59e
--dile-input-border-size | Input element border size | 1px
--dile-input-border-color | Input element border color | #888 
--dile-input-focus-border-color | Input element border on focus | #6af
--dile-input-disabled-border-color | Input element border when disabled | #eee

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