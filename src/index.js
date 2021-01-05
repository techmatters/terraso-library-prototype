import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

import reportWebVitals from './reportWebVitals';
import "./i18n.js"

import i18next from "i18next"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 //USED FOR VISUAL COMPONENTS: COULD BE CHANGED TO MAKE SMALLER
import './index.css';




i18next.init({
  interpolation: {escapeValue: false},
});
ReactDOM.render(
  <Suspense fallback={null}>
  <Main/>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
