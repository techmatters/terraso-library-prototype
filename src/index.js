import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import i18next from 'i18next';
import './i18n.js';
import 'bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

require('dotenv').config();


i18next.init({
  interpolation: { escapeValue: false }
});

ReactDOM.render(
  <Suspense fallback={null}>
    <Main />
  </Suspense>,
  document.getElementById('root')
);
