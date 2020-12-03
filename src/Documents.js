import React from "react";
//import Document from "./Document"

//import Button from 'react-bootstrap/Button';
import Reader from './Document.js';


function Documents()
{
  
  return (
      <div>
       <Reader title="Document 1" link="dummy.pdf"></Reader>
      <CacheButton/>
      </div>
      
    );
}

function CacheButton() {

  function sayHello() {
    caches.open('PDFS').then(cache => {
      const urls = ["./dummy.pdf"]
      cache.addAll(urls)
  })
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}



 
export default Documents;