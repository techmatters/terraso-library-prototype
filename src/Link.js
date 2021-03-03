import React, {useState} from 'react';
import {useStickyState, CachePDF, UnCachePDF} from "./CacheFunctions"


function Link({link}){
    const[
        cached,
        setCached
      ] = useStickyState(0,0)
       
      var imgSource = "./heartgrey.png"
      if (cached === 1){
        imgSource = "./heart.png"
      }

    return(
        <div>
        <button class="btn-secondary btn-lg">
                {link.name}
        </button> 
        <img src={imgSource} alt="button images"
        onClick={async function()
        {
        if (cached === 0){
          var return_value = await CachePDF(link.url)
          console.log(return_value)
          if (return_value === true){
              setCached(1)    
          }
          else{ 
             setCached(0)
          }
        }
        else{
          setCached(0)
          UnCachePDF(link.url)
        }
      }
    }/> 
        </div>
    )


}
export default Link