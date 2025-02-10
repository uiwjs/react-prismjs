@uiw/react-prismjs
===
<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-prismjs/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-prismjs/actions/workflows/ci.yml)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-prismjs.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-prismjs)
[![npm version](https://img.shields.io/npm/v/@uiw/react-prismjs.svg)](https://www.npmjs.com/package/@uiw/react-prismjs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-prismjs.svg)](https://bundlephobia.com/result?p=@uiw/react-prismjs)

React Component for [prismjs](https://github.com/PrismJS/prism). The current [document website](https://uiwjs.github.io/react-prismjs/).

## Install

```bash
npm i @uiw/react-prismjs
```
## 🌏  Open in the Cloud 
Click any of the buttons below to start a new development environment to demo or contribute to the codebase:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/uiwjs/react-prismjs)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/uiwjs/react-prismjs)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/uiwjs/react-prismjs)
[![Edit react-jsbarcode](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-jsbarcode-2659g?fontsize=14&hidenavigation=1&theme=dark)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-jsbarcode?file=src%2FApp.tsx)[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/uiwjs/react-prismjs)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/uiwjs/react-prismjs)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/react-prismjs)

## Basic Usage

```jsx mdx:preview?background=#fff
import React from 'react';
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-java';

const JAVAString =`import com.demo.util.MyType;
import com.demo.util.MyInterface;

public enum Enum {
  VAL1, VAL2, VAL3
}

public class Class<T, V> implements MyInterface {
  public static final MyType<T, V> member;
  
  @Override
  public MyType method() {
    return member;
  }

  public void method2(MyType<T, V> value) {
    method();
    value.method3();
    member = value;
  }
}
`;

export default function Demo() {
  return (
    <ReactPrismjs language="java" source={JAVAString} style={{ backgroundColor: '#f6f8fa', fontSize: 16 }} />
  )
}
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

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-prismjs/graphs/contributors">
  <img src="https://uiwjs.github.io/react-prismjs/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.