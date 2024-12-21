import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



// import App from './React-Tutorial/Day-53/App';
// import Parent from './React-Tutorial/Day-53/liftingStateUp/Parent';
// import DefaultProp from './React-Tutorial/Day-53/DefaultProps/DefaultProp';
// import App from './React-Tutorial/Day-53/KeyProp/App';
import App from './React-Tutorial/Day-54/App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
