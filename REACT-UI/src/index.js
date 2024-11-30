import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';





// import App from './React-Tutorial/Day-45/App';
// import UseReducerHook from './React-Tutorial/Day-46/UseReducerHook';
// import Count from './React-Tutorial/Day-46/Count';
// import App from './React-Tutorial/Day-47/App';
// import ComplexReducer from './React-Tutorial/Day-48/ComplexReducer';
import DataFetcher from './React-Tutorial/Day-48/DataFetchReducer';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <DataFetcher />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
