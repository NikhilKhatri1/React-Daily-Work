import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// import App from './React-Tutorial/Day-14/app.jsx';
// import { ContextDemo } from './React-Tutorial/Day-14/useContext-demo.jsx';
// import App from './React-Tutorial/Day-15/App.jsx';
// import CartDemo from './React-Tutorial/Day-15/CartContext/CartContext.jsx';
import { Car } from './React-Tutorial/Day-16/classComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Car />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
