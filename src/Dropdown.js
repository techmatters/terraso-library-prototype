import React from 'react';
import { useTranslation } from 'react-i18next';
 
const Dropdown = () => {
  const { t, i18n } = useTranslation(['translation', 'welcome']);
 
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };
 
  return (
    <div>
      <h1>{t('Dropdown.Title', 'Hello there.')}</h1>
      <button type="button" onClick={() => changeLanguage('sp')}>
        {t('translation:sp')}
      </button>
 
      <button type="button" onClick={() => changeLanguage('en')}>
        {t('translation:en')}
      </button>
 
      
    </div>
  );
};
 
export default Dropdown;