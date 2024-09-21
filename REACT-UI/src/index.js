import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// import CounterThree from './React-Tutorial/Day-21/counterThree';
import App from './React-Tutorial/Day-22/App';
// import { CounterTwo } from './React-Tutorial/Day-21/counterTwo';
// import ContextDemo from './React-Tutorial/Day-15/ContextDemo';
// import { UseRefHookDom } from './React-Tutorial/Day-12/useRefDom';
// import { ConditionalRendering } from './React-Tutorial/Day-20/condition-Rendering';
// import ReducerDemo from './React-Tutorial/Day-21/reducerDemo';
// import CounterOne from './React-Tutorial/Day-21/counterOne';
// import ParentComponent from './React-Tutorial/Day-19/ParentComponent';
// import { FakestoreIndex } from './fakestore/fakestore-index.jsx';
// import { UseRefHookDom } from './React-Tutorial/Day-12/useRefDom.jsx';
// import { UseRefHook } from './React-Tutorial/Day-12/useRefHook.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
