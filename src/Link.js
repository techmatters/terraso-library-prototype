import { UseStickyState, CacheDocument, UncacheDocument } from "./CacheFunctions"
import React from 'react';


function Link(props) {
    //Props are passed in by parent component
    const { link } = props;
    /*defines state variables cache and setCached(allows for changing of "cached"). initial value of cached is
    taken from session storage or set to 0 if the information is not found in session storage*/
    const [
        cached,
        setCached
    ] = UseStickyState(0, link.id)
    /*initializes the value of imgSource based on if the link is cached or not*/
    var imgSource = "./heartgrey.png"
    if (cached === 1) {
        imgSource = "./heart.png"
    }

    return (
        <div>
            {/*props.ChangeView calls the handler function in DocumentContainer.js*/}
            <button className="btn-secondary btn-lg" onClick={() => { props.ChangeView(link.url) }}>
                {link.name}
            </button>

            {/*controls manual caching of the document using the "heart" buttons on the side*/}
            <img src={imgSource} alt="button images"
                onClick={async function () {
                    if (cached === 0) {
                        var return_value = await CacheDocument(link.url)
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
                        UncacheDocument(link.url)
                    }
                }} />
        </div>
    );
};


export default Link;

