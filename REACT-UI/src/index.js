import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// import { FakeStore } from './React-Tutorial/Day-10/fake.jsx';
// import { OptionDesign } from './React-Tutorial/Day-8/OptionDesign1.jsx';
import { Counter } from './React-Tutorial/Day-9/btnCounter.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Counter />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
