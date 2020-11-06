import React from "react";
//import Document from "./Document"
import {useTranslation} from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Document from './Document.js';


function Documents()
{
  const {t} = useTranslation();

  return (
      <div>
        <h2>{t('Documents.Documents')}</h2>
        <Document>
          
        </Document>
           
    
        
        
        

      </div>
    );
}

 
export default Documents;