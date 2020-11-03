import React from "react";
//import Document from "./Document"
import {useTranslation} from 'react-i18next';

function Documents()
{
  const {t} = useTranslation();
  return (
      <div>
        <h2>{t('Documents.Documents')}</h2>
        
        
        

      </div>
    );
}

 
export default Documents;