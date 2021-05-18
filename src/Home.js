import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown';

function Home() {
  // initializes useTranslation hook
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Dropdown />
      <h2>{t('Home.ContentViewerPrototype')}</h2>
      <p>{t('Home.Paragraph')}</p>
    </React.Fragment>
  );
}

export default Home;
