import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Documents from "./Documents";
import About from "./About";
//import Card from "./Dropdown"
import {useTranslation} from 'react-i18next';
//import {Dropdown} from 'react-bootstrap';

function Main()
{   
  const {t} = useTranslation();
  return (
    
    <HashRouter>
      <div>
        <h1>{t('Main.CloudContentViewer')}</h1>
        <ul className="header">
        <li><NavLink exact to="/">{t('Main.Home')}</NavLink></li>
        <li><NavLink to="/Documents">{t('Main.Documents')}</NavLink></li>
        <li><NavLink to="/About">{t('Main.About')}</NavLink></li>
        </ul>
      <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Documents" component={Documents}/>
          <Route path="/About" component={About}/>
      </div>
      </div>
    </HashRouter>
    
  );
}
  export default Main;