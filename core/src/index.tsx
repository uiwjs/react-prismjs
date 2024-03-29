import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './style/index.less';

export interface ReactPrismjsProps {
  prefixCls?: string;
  language?: string;
  source?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ReactPrismjs(props: ReactPrismjsProps = {}) {
  const codeRef = React.createRef<HTMLPreElement>();
  const { prefixCls = 'w-prismjs', className, language, source, children, ...others } = props;
  const langCls = language ? `language-${language}` : '';
  async function highlight() {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current as Element);
    }
  }
  useEffect(() => {
    highlight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, source]);
  return (
      <pre className={`${prefixCls} ${className || ''} ${langCls}`} {...others}>
        <code className={langCls} ref={codeRef}>
          {source || children}
        </code>
      </pre>
  );
}
