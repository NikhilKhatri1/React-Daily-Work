import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// import App from './React-Tutorial/Day-24/App';
// import NestedRouteApp from './React-Tutorial/Day-24/NestedRouteApp';
// import { Body } from './Netflix-Clone/Body.component';
// import App from './React-Tutorial/Day-26/App';
// import Iterate from './React-Tutorial/Day-26/Iterate';
// import UserList from './React-Tutorial/Day-26/UserList';
import ConditionalRendering from './React-Tutorial/Day-26/ConditionalRendering';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <ConditionalRendering />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
