import React from 'react';
import { UseStickyState, CacheDocument, UncacheDocument } from './CacheFunctions';

function Link (props) {
  // Props are passed from LinkList component
  const { link } = props;
  /* defines state variables cache and setCached(allows for changing of "cached"). initial value of cached is
  taken from session storage or set to 0 if the information is not found in session storage */
  const [cached, setCached] = UseStickyState(0, link.id);
  // initializes the value of imgSource based on if the link is cached or not
  let imgSource = './heartgrey.png';
  if (cached === 1) {
    imgSource = './heart.png';
  }

  // calls CacheDocument on the document and changes the value of cached if the operation was a success */
  const handleClick = async () => {
    if (cached === 0) {
      const returnValue = await CacheDocument(link.url);
      if (returnValue === true) {
        setCached(1);
      } else {
        setCached(0);
      }
    } else {
      setCached(0);
      UncacheDocument(link.url);
    }
  };

  // props.ChangeView is a function passed from LinkList that changes the documents page to display the current Document
  return (
    <React.Fragment>
      <button className="btn-secondary btn-lg" onClick={() => { props.ChangeView(link.url); }}>
        {link.name}
      </button>
      <img src={imgSource} alt="button images" onClick={() => handleClick()}/>
      <div></div>
    </React.Fragment>
  );
}

export default Link;
