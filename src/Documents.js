
import React from "react";
//import Document from "./Document"
//import Button from 'react-bootstrap/Button';




function CachePDF(url) {
  caches.open('resources').then(function(cache) {
    var updateCache = cache.add("Res_"+url);
    updateCache.then(function() {
      console.log("Article is now available offline.");
    }).catch(function (error) {
      console.log("Article could not be saved offline")
    })
  })
}
function UnCachePDF(url){
  caches.open('resources').then(cache => {
    cache.delete("Res_"
    +url)
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


class Documents extends React.Component {
  constructor(props) {
      super(props)

      // Bind the this context to the handler function
      this.handler = this.handler.bind(this);
      

      // Set some state
      this.state = {
          DocButtonsShown: this.handleSession("DocButtonsShown",true),
          IframeShown: this.handleSession("IframeShown", false),
          BackButtonShown: this.handleSession("BackButtonShown", false),
          IframeValue: this.handleSession("IframeValue","/.")
          
      };
  }

  // This method will be sent to the child component
  handler(url) {
    window.sessionStorage.setItem("DocButtonsShown", !this.state.DocButtonsShown)
    window.sessionStorage.setItem("IframeShown", !this.state.IframeShown)
    window.sessionStorage.setItem("BackButtonShown", !this.state.BackButtonShown)
    window.sessionStorage.setItem("IframeValue", url)
      this.setState({
          DocButtonsShown: !this.state.DocButtonsShown,
          IframeShown: !this.state.IframeShown,
          BackButtonShown: !this.state.BackButtonShown,
          IframeValue: url
      });

  }
  handleSession(key,value){
    const StorageValue = window.sessionStorage.getItem(key)
    if (key === "IframeValue" && StorageValue != null){
      return StorageValue
    }
    else if (StorageValue != null)
    {
      var ToReturn = (StorageValue==="true");
      return ToReturn
    }
    return value
  }

  
    
  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <>
      {this.state.DocButtonsShown &&
      <div>
      <DocumentInfo docName="Sample PDF" docLink="./Documents/samplePDF.pdf" ChangeView={this.handler}> </DocumentInfo>
      <DocumentInfo docName="Sample PNG" docLink="./Documents/samplePNG.png" ChangeView={this.handler}> </DocumentInfo>
      <DocumentInfo docName="Webpage" docLink="./Documents/samplehtm.htm" ChangeView={this.handler}> </DocumentInfo>
      
      </div>
      }
      {this.state.IframeShown && <iframe src={this.state.IframeValue} height="500" width="100%" title="Iframe Example"></iframe>}
      {this.state.BackButtonShown && <button class="btn-secondary btn-lg" onClick= {() =>{this.handler("./")}}>
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
  
  
  var imgSource = "./heartgrey.png"
  if (cached === 1){
    imgSource = "./heart.png"
  }
  
  return(
  <div>
  
  <button class="btn-secondary btn-lg" onClick= {() =>{props.ChangeView(props.docLink)}}>
    {props.docName}
  
  </button>
  <img src={imgSource} alt="button images"
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