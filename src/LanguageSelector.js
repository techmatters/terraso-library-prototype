import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation(['translation', 'welcome']);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const updateLanguage = (language) => {
    changeLanguage(language);
    window.localStorage.setItem('Language', language);
  };

  return (
    <div className="dropdown show">
      <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {t('ChangeLanguage.Title')}
      </a>
      <div className="dropdown-menu" href="!#" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="!#" onClick={() => { updateLanguage('es'); }}>
          Espanol
        </a>
        <a className="dropdown-item" href="!#" onClick={() => { updateLanguage('en'); }}>
          English
        </a>
        <a className="dropdown-item" href="!#" onClick={() => { updateLanguage('fr'); }}>
          Français
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;
