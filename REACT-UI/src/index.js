import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



// import ReduxToolkitApp from './React-Tutorial/Day-34/ReduxToolkitApp';
// import App from './React-Tutorial/Day-36/App';
// import UseStateHook from './React-Tutorial/Day-37/useStateHook';
// import UseStateHook1 from './React-Tutorial/Day-37/useStateHook1';
// import UseStateCounter from './React-Tutorial/Day-37/useStateCounter';
// import UseEffectHook from './React-Tutorial/Day-37/useEffectHook';
// import UseRefHook from './React-Tutorial/Day-37/UseRefHook';
// import UseRefHookDom from './React-Tutorial/Day-37/UseRefHookDom';
// import UseMemo from './React-Tutorial/Day-37/UseMemo';
import UseCallbackHook from './React-Tutorial/Day-37/UseCallbackHook';
// import { Body } from './Netflix-Clone/Body.component';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <UseCallbackHook />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
