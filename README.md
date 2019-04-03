# Polydile Input

Text field Web Component, a customized design form input text field, based on LitElement.

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

### Into your module script

```
import 'dile-input/dile-input';
```

## Use the component

```
<dile-input 
  label="Text to the label"
  value="Text to the input"
  placeholder="Some text"
  disabled
></dile-input>
```

## Run the project

You will need to configure Webpack, or some similar tool, as usual in your frontend workflow. But, if you prefer a faster posibility, simply run the "polymer serve" command from your project folder.

1. Install the Polymer CLI:

```npm i -g polymer-cli```

2. Run the development server and open a browser pointing to its URL:

```polymer serve```