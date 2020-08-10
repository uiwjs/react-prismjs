React Component Example for TypeScript.
===


## Install

```bash
npm i @uiw/react-prismjs
```

## Basic Usage

```jsx
import ReactPrismjs from '@uiw/react-prismjs';
import React from 'react';
import ReactDOM from 'react-dom';

const Dome = () => (
  <ReactPrismjs />
);
```

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
