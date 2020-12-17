import React, {useState} from "react";
//import Document from "./Document"
//import Button from 'react-bootstrap/Button';
import Document from './Document.js';
import LiftState from './LiftState';

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

function useSessionState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.sessionStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function Documents()
{
  return (
    <>
      <LiftState></LiftState>
    </>
    );
}

function DocumentInfo(props){
  const[
    cached,
    setCached
  ] = useStickyState(0,props.docName)
  const [ShowDocument, setShowDocument] = useState(0)
  
  
  var imgSource = "./heartgrey.png"
  if (cached === 1){
    imgSource = "./heart.png"
  }
  
  return(
  <div>
  
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