import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import homePage from './Homepage';
import DocumentContainer from './DocumentPage';
import aboutPage from './AboutPage';
import Modal from './Modal';
import LanguageSelector from './LanguageSelector';

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
          <li><NavLink to="/documents">{t('Main.Documents')}</NavLink></li>
          <li><NavLink to="/about">{t('Main.About')}</NavLink></li>
          <li><LanguageSelector /></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={homePage} />
          <Route path="/documents" component={DocumentContainer} />
          <Route path="/about" component={aboutPage} />
        </div>
      </HashRouter>
      <Modal />
    </React.Fragment>
  );
}
export default Main;
