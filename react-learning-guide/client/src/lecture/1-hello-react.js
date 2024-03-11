// React
import { createElement as h } from 'https://esm.sh/react';
import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';

// React DOM (for web)
import ReactDOM from 'https://esm.sh/react-dom';
console.log(ReactDOM);

// 리액트 돔의 노드가 되는 리액트 엘리먼트 생성하기

//React.createElement('main', {})로 생성되는 자바스크립트 객체
// const mainReactElement = {
//   $$typeof: Symbol('react.element'),
//   key: null,
//   props: {},
//   ref: null,
//   type: 'main',
// }

// console.log(mainReactElement)

const heading1Element = h('h1', {}, '리액트 러닝 가이드');

const paragraphElement = h(
  'p',
  {},
  '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.'
);

const anchorElement = h(
  'a',
  {
    className: 'button',
    href: 'https://react.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': '리액트 공식 문서',
    'data-type': 'anchor',
  },
  'react',
  '.',
  'dev'
);

const mainElement = h(
  'main',
  {},
  heading1Element,
  paragraphElement,
  anchorElement
);

// virtual DOM (자바스크립트 오브젝트 트리)
// 
// React Element Tree → ReactDOM.createRoot → Render DOM

const rootElement = document.getElementById('root');

const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(mainElement);