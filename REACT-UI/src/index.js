import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// import { FakeStore } from './React-Tutorial/Day-10/fake.jsx';
// import { BasicFormik } from './React-Tutorial/Day-11/BasicFormik.jsx';
// import { Ranging } from './React-Tutorial/Day-10/Range.jsx'
import { CustomHook } from './React-Tutorial/Day-11/CustomHook.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <FakeStore /> */}
    {/* <Checkbox /> */}
    {/* <BasicFormik /> */}
    {/* <Ranging /> */}
    <CustomHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
