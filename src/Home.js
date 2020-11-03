import React from "react";
import {useTranslation} from 'react-i18next';

function Home(){
  const {t} = useTranslation();
    return (
      <div>
        <h2>{t('Home.ContentViewerPrototype')}</h2>
          <p>{t('Home.Paragraph')}</p>
          
      </div>
    );
  
}
 
export default Home;