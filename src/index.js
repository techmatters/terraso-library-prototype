import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import i18next from 'i18next';
import { config } from './config';
import './i18n.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // needs to be after bootstrap to override

require('dotenv').config();

if (!process.env.REACT_APP_API_KEY) {
  throw new Error('Specify a REACT_APP_API_KEY in your environemnt');
}

if (!process.env.REACT_APP_API_URL) {
  throw new Error('Specify a REACT_APP_API_URL in your environemnt');
}

i18next.init({
  interpolation: { escapeValue: false },
  debug: config.i18n.debug
});

ReactDOM.render(
  <Suspense fallback={null}>
    <Main />
  </Suspense>,
  document.getElementById('root')
);
