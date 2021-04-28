import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import './i18n.js'
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { config } from './config.js'
//  USED FOR VISUAL COMPONENTS: COULD BE CHANGED TO MAKE SMALLER
import './index.css'
require('dotenv').config()

const url = config.url.API_URL
console.log(url)

// initialize i18next (translation)
i18next.init({
  interpolation: { escapeValue: false }
})

/* Renders the root component, wrapping in <Suspense> (prevents errors in i18n) and
ApolloProvider (gives access to Apollo client features) */
ReactDOM.render(
  <Suspense fallback={null}>
    <Main></Main>
  </Suspense>,
  document.getElementById('root')
)
