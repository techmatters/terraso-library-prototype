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

class Documents extends React.Component {
  constructor(props) {
      super(props)

      // Bind the this context to the handler function
      this.handler = this.handler.bind(this);
      this.setIframe = this.handler.bind(this);

      // Set some state
      this.state = {
          DocButtonsShown: true,
          IframeShown: false,
          BackButtonShown: false,
          IframeValue: "./"
          
      };
  }

  // This method will be sent to the child component
  handler(url) {
      this.setState({
          DocButtonsShown: !this.state.DocButtonsShown,
          IframeShown: !this.state.IframeShown,
          BackButtonShown: !this.state.BackButtonShown,
          IframeValue: url
      });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <>
      {this.state.DocButtonsShown &&
      <div>
      <DocumentInfo docName="Document 1" docLink="./dummy.pdf" ChangeView={this.handler}> </DocumentInfo>
      <DocumentInfo docName="Document 2" docLink="./dummy2.pdf" ChangeView={this.handler}> </DocumentInfo>
      </div>
      }
      {this.state.IframeShown && <iframe src={this.state.IframeValue} height="500" width="100%" title="Iframe Example"></iframe>}
      {this.state.BackButtonShown && <button class="btn-secondary btn-lg" onClick ={this.handler}>
        Back
      </button>}
      </>
    )
  }
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
  
  <button class="btn-secondary btn-lg" onClick= {() =>{props.ChangeView(props.docLink)}}>
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