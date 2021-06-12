import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Renders the homepage which consists of the title and
 * a paragraph describing the purpose of the application
 */
function homePage () {
  // initializes useTranslation hook
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h2>{t('Home.ContentViewerPrototype')}</h2>
      <p>{t('Home.Paragraph')}</p>
    </React.Fragment>
  );
}

export default homePage;
