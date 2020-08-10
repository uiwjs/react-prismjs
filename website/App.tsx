import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import ReactPrismjs from '../';
import 'prismjs/components/prism-java';
import MDStr from '../README.md';
import './App.css';

const codeJSString = `import React from 'react';
import styles from './index.less';

const Select = ({ value, options, onChange }) => {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      {options.map((item, key) => {
        const optionProps = { key };
        if (value === item) {
          optionProps.value = item;
        }
        return (
          <option {...optionProps}> {item} </option>
        );
      })}
    </select>
  );
};

export default Select;
`;

const codeJAVAString =`import com.demo.util.MyType;
import com.demo.util.MyInterface;

public enum Enum {
  VAL1, VAL2, VAL3
}

public class Class<T, V> implements MyInterface {
  public static final MyType<T, V> member;
  
  private class InnerClass {
    public int zero() {
      return 0;
    }
  }

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

export default () => {
  const [lang, setLang] = useState('javascript');
  const [code, setCode] = useState(codeJSString);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Component for Prismjs. 
        </p>
        <div>
          <button type="button" onClick={() => {
            setLang('java');
            setCode(codeJAVAString);
          }}>
            {lang === 'java' && '√'} Set JAVA Lang
          </button>
          <button type="button" onClick={() => {
            setLang('javascript');
            setCode(codeJSString);
          }}>
            {lang === 'javascript' && '√'} Set JavaScript Lang
          </button>
        </div>
        <div>
          <ReactPrismjs language={lang} source={code} />
        </div>
      </header>
      <pre className="info">
        <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      </pre>
    </div>
  );
}
