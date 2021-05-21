import React from 'react'
import LinkList from './LinkList'

/* DocumentContainer is the "main" component on the documents page, responsible for rendering
the document buttons and Iframe */
class DocumentContainer extends React.Component {
  constructor (props) {
    super(props)
    // Bind the this context to the handler function
    this.handler = this.handler.bind(this)
    // Set initial state, controlling which buttons are displayed
    this.state = {
      DocButtonsShown: this.handleSession('DocButtonsShown', true),
      IframeShown: this.handleSession('IframeShown', false),
      BackButtonShown: this.handleSession('BackButtonShown', false),
      IframeValue: this.handleSession('IframeValue', '/.')

    }
  }

  /* Method for changing which components are shown and setting the src of the Iframe
  to the document last clicked on. this method is passed to the child components.
  this function also saves these values to sessionStorage */
  handler (url) {
    window.sessionStorage.setItem('DocButtonsShown', !this.state.DocButtonsShown)
    window.sessionStorage.setItem('IframeShown', !this.state.IframeShown)
    window.sessionStorage.setItem('BackButtonShown', !this.state.BackButtonShown)
    window.sessionStorage.setItem('IframeValue', url)
    this.setState({
      DocButtonsShown: !this.state.DocButtonsShown,
      IframeShown: !this.state.IframeShown,
      BackButtonShown: !this.state.BackButtonShown,
      IframeValue: url
    })
  }

  /* helper function that checks to see if sessionStorage has stored values for a key,value
  pair and returns the value if it exists */
  handleSession (key, value) {
    const StorageValue = window.sessionStorage.getItem(key)
    if (key === 'IframeValue' && StorageValue != null) {
      return StorageValue
    } if (StorageValue != null) {
      const ToReturn = (StorageValue === 'true')
      return ToReturn
    }
    return value
  }

  /* Renders the contents of the "documents" page. This consists of the Iframe, the "back"
  button and the link component */
  render () {
    return (
      <>
        {this.state.DocButtonsShown &&
          (
          <div>
            <LinkList ChangeView={this.handler} />
          </div>
          )}
        {this.state.IframeShown && <iframe src={this.state.IframeValue} height="500" width="100%" title="Iframe Example" />}
        {this.state.BackButtonShown &&

          (
          <button className="btn-secondary btn-lg" onClick={() => { this.handler('./') }}>
            Back
          </button>
          )}
      </>
    )
  }
}
export default DocumentContainer
