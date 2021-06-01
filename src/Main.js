import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './Homepage';
import DocumentContainer from './DocumentContainer';
import About from './About';
import Modal from './Modal';

// initializes translation and a hash router for navigating between pages in the SPA
function Main () {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HashRouter>
        <ul className="header">
          <img src="./logo.png" alt="banner" />
        </ul>
        <ul className="header">
          <li><NavLink exact to="/">{t('Main.Home')}</NavLink></li>
          <li><NavLink to="/Documents">{t('Main.Documents')}</NavLink></li>
          <li><NavLink to="/About">{t('Main.About')}</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Documents" component={DocumentContainer} />
          <Route path="/About" component={About} />
        </div>
      </HashRouter>
      <Modal/>
    </React.Fragment>
  );
}
export default Main;
