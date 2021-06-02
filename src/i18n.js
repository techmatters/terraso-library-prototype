import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import { config } from './config';

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: config.i18n.debug,

    lng: window.localStorage.getItem('Language'),
    fallbackLng: config.i18n.defaultLanguage,
    whitelist: ['en', 'es', 'fr'],

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
