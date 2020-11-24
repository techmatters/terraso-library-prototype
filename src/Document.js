import React from 'react';
import Buttons from "./Buttons.json";
import i18n from 'i18next';
export class Example2 extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      display: "./",
      showIframe: false,
      showButtons: true,
      showBack: false
      
    };
  }
  render() {
    return (
      <div>
        {this.state.showIframe && <iframe title="header" src={this.state.display} width="100%" height="500px"/>}  
        
        {this.state.showButtons && (Buttons.Buttons.map((item, i) => (
          <div>
          <button class="btn-secondary btn-lg" onClick={() => {
            this.setState({display: item.link})
            this.setState({showBack:true})
            this.setState({showIframe:true})
            this.setState({showButtons:false})
            }}>
            {item.name}
          </button>
          </div>
          )
          
        ))}
            {this.state.showBack &&
            (<button class="btn-secondary btn-lg" onClick={() => {
            this.setState({showIframe: false})
            this.setState({showBack:false})
            this.setState({showButtons:true})
            }}>
            {i18n.t("Documents.back")}
          </button>)}
      </div>
      );
  }
}

export default Example2;
 
