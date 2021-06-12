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
import Updater from './Updater';
import LanguageSelector from './LanguageSelector';

/**
 * Initializes translation and a hash router for navigating between pages
 */
function Main () {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <HashRouter>
        <ul className="header">
          <img src="./logo.png" width='50px' height='50px'alt="banner" />
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
      <Updater />
    </React.Fragment>
  );
}
export default Main;
