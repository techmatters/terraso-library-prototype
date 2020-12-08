import React, {useState} from "react";
//import Document from "./Document"
//import Button from 'react-bootstrap/Button';
import Document from './Document.js';


function Documents()
{
  return (
      <div>
      <DocumentInfo docName="Document 1" docLink="./document1.pdf"> </DocumentInfo>
      <Document></Document>
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
  
  return(<div>
  <h1>{props.docName}</h1>
  <h1>{props.docLink}</h1>
  <button class="btn-secondary btn-lg"
    onClick={function()
    {
      if (cached === 0){
        setCached(1)
        //setButtonText("Uncache")
      }
      else{
        setCached(0)
        //setButtonText("Cache")
      }
    }
    }>
    {cached}
  </button>
  
  
  </div>
  )
}

/*function App() {
  const [
    count,
    setCount
  ] = useStickyState(0, "count");

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
*/

function DocInfo(){
  const[
    Cached,
    setCached
  ] = useStickyState(0, "display")
  return(
    <div>
    <button
    onClick={() => setCached(1)}>
    Cache
    </button>
    <button
    onClick={() => setCached(0)}>
    Uncache
    </button>
    </div>
  )
}
export default Documents;