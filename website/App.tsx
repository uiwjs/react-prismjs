import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import ReactPrismjs from '../';
import MDStr from '../README.md';
import './App.css';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Component for Prismjs.
        </p>
        <div>
          <ReactPrismjs />
        </div>
      </header>
      <pre className="info">
        <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      </pre>
    </div>
  );
}
