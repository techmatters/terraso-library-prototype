import React from "react";
//import Document from "./Document"
import {useTranslation} from 'react-i18next';
//import Button from 'react-bootstrap/Button';
import Reader from './Document.js';
import listReactFiles from 'list-react-files'

function Documents()
{
  const {t} = useTranslation();
  return (
      <div>
       <Reader title="Document 1" link="dummy.pdf"></Reader>
      </div>
    );
}

 
export default Documents;