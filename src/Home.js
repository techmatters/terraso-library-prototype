import React from "react";
import {useTranslation} from 'react-i18next';
import Dropdown from './Dropdown';
function Home(){
  const {t} = useTranslation();
    return (
      <div>
        <Dropdown />
        <h2>{t('Home.ContentViewerPrototype')}</h2>
          <p>{t('Home.Paragraph')}</p>
          
      </div>
    );
  
}
 
export default Home;