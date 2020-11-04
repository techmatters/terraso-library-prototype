
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import enTranslation from './locales/en/translation.json';
import spTranslation from './locales/sp/translation.json';
const resources = {
  en: {
    translation: enTranslation,
  },
  sp: {
    translation: spTranslation,
  },
};
i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    resources,
    lng: 'sp',
    fallbackLng: 'en',
    whitelist: ['en', 'sp'],
 
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
 
export default i18n;