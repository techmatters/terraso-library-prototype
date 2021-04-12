import { UseStickyState, CacheDocument, UncacheDocument } from "./CacheFunctions"
import React from 'react';

function DocumentInfo(props) {
  const [
    cached,
    setCached
  ] = UseStickyState(0, props.docName)

  var imgSource = "./heartgrey.png"
  if (cached === 1) {
    imgSource = "./heart.png"
  }

  return (
    <React.Fragment>
      <button onClick={() => { props.ChangeView(props.docLink) }}>
        {props.docName}
      </button>

      <img src={imgSource} alt="button images"
        onClick={async function () {
          if (cached === 0) {
            var return_value = await CacheDocument(props.docLink)
            console.log(return_value)
            if (return_value === true) {
              setCached(1)
            }
            else {
              setCached(0)
            }
          }
          else {
            setCached(0)
            UncacheDocument(props.docLink)
          }
        }
        } />
    </React.Fragment>
  )
}

export default DocumentInfo