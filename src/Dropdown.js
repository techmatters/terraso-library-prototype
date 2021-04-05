import React from 'react';
import { useTranslation } from 'react-i18next';
 
//constructs a dropdown menu
const Dropdown = () => {
  //initializes state, defines changeLanguage function
  const { t, i18n } = useTranslation(['translation', 'welcome']);
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };
 
  return (
    <div className="dropdown show">
      <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {t('Dropdown.Title')}</a>
      <div className="dropdown-menu" href="!#" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="!#" onClick={() => {changeLanguage('sp') 
          window.localStorage.setItem("Language","sp")}}>
          Espanol
        </a>
        <a className="dropdown-item" href="!#" onClick={() => {changeLanguage('en') 
          window.localStorage.setItem("Language","en")}}>
          English
        </a>
        <a className="dropdown-item" href="!#" onClick={() => {changeLanguage('fr') 
          window.localStorage.setItem("Language","fr")}}>
          Français
        </a>
      </div>
    </div>
  );
};
 
export default Dropdown;