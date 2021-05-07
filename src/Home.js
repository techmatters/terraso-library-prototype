import React from 'react'
import { useTranslation } from 'react-i18next'
import Dropdown from './Dropdown'
const {REACT_APP_API_KEY} = process.env
function Home () {
  // initializes useTranslation hook
  const { t } = useTranslation()
  return (
    <div>
      <Dropdown />
      <h2>{t('Home.ContentViewerPrototype')}</h2>
      <p>{t('Home.Paragraph')}</p>
      {REACT_APP_API_KEY}
    </div>
  )
}

export default Home
