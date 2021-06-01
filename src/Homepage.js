import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown';

function homePage () {
  // initializes useTranslation hook
  const { t } = useTranslation();
  return (
    <>
      <Dropdown />
      <h2>{t('Home.ContentViewerPrototype')}</h2>
      <p>{t('Home.Paragraph')}</p>
    </>
  );
}

export default homePage;
