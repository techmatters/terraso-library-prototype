import React from "react";
import DocumentInfo from "./DocumentInfo"
import {useStickyState, CachePDF, UnCacheDPF, callAPI} from "./CacheFunctions"
import LinkList from "./LinkList"

class DocumentContainer extends React.Component {
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
        <LinkList> </LinkList>
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
export default DocumentContainer