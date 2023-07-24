import { useState } from 'react';
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-java';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  width: 100%;
  font-size: 21px;
`;

const APP = () => {
  const [lang, setLang] = useState('javascript');
  const [code, setCode] = useState(codeJSString);
  return (
    <Wrapper>
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
      <ReactPrismjs language={lang} source={code} />
    </Wrapper>
  );
}

export default APP;
