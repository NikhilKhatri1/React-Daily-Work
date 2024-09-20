import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// import ContextDemo from './React-Tutorial/Day-15/ContextDemo';
// import { UseRefHookDom } from './React-Tutorial/Day-12/useRefDom';
import UseRef from './React-Tutorial/Day-12/UseRef';
import { UseRefHookDom } from './React-Tutorial/Day-12/useRefDom';
// import ParentComponent from './React-Tutorial/Day-19/ParentComponent';
// import { FakestoreIndex } from './fakestore/fakestore-index.jsx';
// import { UseRefHookDom } from './React-Tutorial/Day-12/useRefDom.jsx';
// import { UseRefHook } from './React-Tutorial/Day-12/useRefHook.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <UseRefHookDom />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
