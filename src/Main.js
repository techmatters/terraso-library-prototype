import React, { useState } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from './Home'
import DocumentContainer from './DocumentContainer'
import About from './About'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
// initializes translation and a hash router for navigating between pages in the SPA

function Main () {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <HashRouter>
        <ul className='header'>
          <img src='./logo.png' alt='banner'></img>
          <p>{t('Main.CloudContentViewer')}</p>
        </ul>
        <ul className='header'>
          <li><NavLink exact to="/">{t('Main.Home')}</NavLink></li>
          <li><NavLink to='/Documents'>{t('Main.Documents')}</NavLink></li>
          <li><NavLink to='/About'>{t('Main.About')}</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route path='/Documents' component={DocumentContainer} />
          <Route path='/About' component={About} />
        </div>
      </HashRouter>
      <button onClick = {() => setIsOpen(true)}> Open Modal</button>
      <Modal open = {isOpen} onClose={() => setIsOpen(false)}></Modal>
    </>
  )
}
export default Main
