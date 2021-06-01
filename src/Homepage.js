import React from 'react';
import { useTranslation } from 'react-i18next';

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
