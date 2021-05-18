import React from 'react';
import { useTranslation } from 'react-i18next';

// initializes useTranslation hook
function About () {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('About.AdditionalDetails')}</h2>
      <p>{t('About.Paragraph1')}<a href='https://techmatters.org/project/1000-landscapes/'> {t('About.Here')}</a></p>
      <p>{t('About.Paragraph2')}<a href='https://github.com/Murphstarr/content-prototype'> {t('About.Here')}</a></p>
    </div>
  );
}

export default About;
