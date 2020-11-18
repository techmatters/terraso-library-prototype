import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Document, Page, pdfjs } from 'react-pdf';
import Buttons from "./Buttons.json";
 
export class Example2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: "./",
      showIframe: ""
    };
  }
  render() {
    return (
      <div>
        
        <iframe src={this.state.display} width="100%" height="500px"/>  
        {Buttons.Buttons.map((item, i) => (
          <p1>
          <button onClick={() => {
            this.setState({display: item.link})
            }}>
            {item.name}
          </button>
          </p1>
        ))}
      </div>
      );
  }
}

export default Example2;
 
