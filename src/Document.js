import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Document, Page, pdfjs } from 'react-pdf';
 
function Reader() {
 const [count, setDoc] = useState("NULL");
 const [show, setShow] = useState(false)
 const myFiles= ["dummy1", "dummy2"]
  return (
    <div>
    

    
    
    
    
    {show && <iframe src={count} width="100%" height="500px"/> }
    
    <button onClick={() => {
      setDoc("./dummy.pdf");  
      setShow(true)
      }}>
      Document1
    </button>
    <button onClick={() => {
      setDoc("./dummy2.pdf");  
      setShow(true)
      }}>
      Document2
    </button>
    </div>
  );
}
export default Reader;