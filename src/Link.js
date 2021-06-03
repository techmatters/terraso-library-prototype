import React from 'react';
import { UseStickyState, CacheDocument, UncacheDocument } from './CacheFunctions';

/**
 * Renders a link component which displays a button for each document and an accompanying favorite button.
 * the Link component also inherits the ChangeView function from DocumentPage that allows the Link component to change
 * the state of the Documents Page.
 */
function Link (props) {
  // Props are passed from LinkList component
  const { link } = props;

  // defines state variables cache and setCached(allows for changing of "cached"). initial value of cached is
  // taken from session storage or set to 0 if the information is not found in session storage
  const [cached, setCached] = UseStickyState(0, link.id);

  // initializes the value of imgSource based on if the link is cached or not
  const imgSource = (cached === 1) ? './heart.png' : './heartgrey.png';
  const imgAlt = (cached === 1) ? 'favorite' : 'not a favorite';

  /**
   * attempts to cache the document URL associated with the link.
   * If successful the value of "cached" will be updated
   */
  const updateCache = async () => {
    if (cached === 0) {
      const returnValue = await CacheDocument(link.url);
      setCached(returnValue === true);
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
      <img src={imgSource} alt={imgAlt} onClick={() => updateCache()} />
      <div />
    </React.Fragment>
  );
}

export default Link;
