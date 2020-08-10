@uiw/react-prismjs
===
<!--dividing-->

[![](https://img.shields.io/github/issues/uiwjs/react-prismjs.svg)](https://github.com/uiwjs/react-prismjs/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-prismjs.svg)](https://github.com/uiwjs/react-prismjs/network)
[![](https://img.shields.io/github/stars/uiwjs/react-prismjs.svg)](https://github.com/uiwjs/react-prismjs/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-prismjs)](https://github.com/uiwjs/react-prismjs/releases)
[![](https://img.shields.io/npm/v/@uiw/react-prismjs.svg)](https://www.npmjs.com/package/@uiw/react-prismjs)

React Component for [prismjs](https://github.com/PrismJS/prism). The current [document website](https://uiwjs.github.io/react-prismjs/).

## Install

```bash
npm i @uiw/react-prismjs
```

## Basic Usage

```js
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-java';

const Dome = () => (
  <ReactPrismjs language="java" source="java code string." />
);
```

### Options Props

```typescript
interface ReactPrismjsProps {
  prefixCls?: string;
  language?: string;
  source?: string;
  className?: string;
}
```

- `source` - _string_ The code string source to parse (**required**)
- `language` - _string_ A language id in [`Prism.languages`](https://github.com/PrismJS/prism/blob/388ad996c4b576205de4d4feda69202bd26c1345/components.json).
- `className` - _string_ Class name of the container element.

## Development

**development**

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
npm run ts:watch
# Step 2, listen for compilation output type .d.ts file
npm run types:watch
# Step 3, development mode, listen to compile preview website instance
npm run doc:dev
```

**production**

Builds the app for production to the build folder.

```bash
npm run released
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
