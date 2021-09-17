@uiw/react-prismjs
===
<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-prismjs/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-prismjs/actions/workflows/ci.yml)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-md-editor.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-md-editor)
[![npm version](https://img.shields.io/npm/v/@uiw/react-prismjs.svg)](https://www.npmjs.com/package/@uiw/react-prismjs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-prismjs.svg)](https://bundlephobia.com/result?p=@uiw/react-prismjs)

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

### Theme

Support [`prismjs`](https://github.com/PrismJS/prism/tree/master/themes) theme setting

```js
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/themes/prism-coy.css';
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
# listen to the component compile and output the .js file and listen for compilation output type .d.ts file
npm run watch
# development mode, listen to compile preview website instance
npm run doc:dev
```
