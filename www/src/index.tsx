import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-prismjs/README.md';
import Example from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title={
      <a href="https://github.com/uiwjs/react-prismjs" target="_blank" rel="noopener noreferrer">
        React Prismjs
      </a>
    }
    description="React Component for Prismjs."
    version={`v${VERSION}`}
  >
    <MarkdownPreviewExample.Github href="https://github.com/uiwjs/react-prismjs" />
    <MarkdownPreviewExample.Example>
      <Example />
    </MarkdownPreviewExample.Example>
  </MarkdownPreviewExample>,
);
