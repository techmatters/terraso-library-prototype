import React, {useState} from "react";
//import Document from "./Document"
//import Button from 'react-bootstrap/Button';
import Document from './Document.js';

function CachePDF(url) {
  caches.open('PDFS').then(cache => {
    cache.add(url)
  })
  
}
function UnCachePDF(url){
  caches.open('PDFS').then(cache => {
    cache.delete(url)
  })
}

function Documents()
{
  return (
      <div>
      <DocumentInfo docName="Document 1" docLink="./dummy.pdf"> </DocumentInfo>
      <DocumentInfo docName="Document 2" docLink="./dummy2.pdf"> </DocumentInfo>
      
      </div>
    );
}

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function DocumentInfo(props){
  const[
    cached,
    setCached
  ] = useStickyState(0,props.docName)
  const [buttonText, setButtonText] = useState("Cache")
  var imgSource = "./heartgrey.png"
  if (cached === 1){
    imgSource = "./heart.png"
  }
  
  return(<div>
 
  <button class="btn-secondary btn-lg">
    {props.docName}
  </button>
  <img src={imgSource}
    onClick={function()
      {
        if (cached === 0){
          setCached(1)
          CachePDF(props.docLink)
        }
        else{
          setCached(0)
          UnCachePDF(props.docLink)
          
        }
      }
  }/> 
  </div>
  )
}



export default Documents;