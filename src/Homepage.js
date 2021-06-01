import React from 'react';
import { useTranslation } from 'react-i18next';

function homePage () {
  // initializes useTranslation hook
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('Home.ContentViewerPrototype')}</h2>
      <p>{t('Home.Paragraph')}</p>
    </>
  );
}

export default homePage;
