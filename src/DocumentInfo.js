import {useStickyState, CachePDF, UnCachePDF} from "./CacheFunctions"

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
        onClick={async function()
        {
        if (cached === 0){
          var return_value = await CachePDF(props.docLink)
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
          UnCachePDF(props.docLink)
        }
      }
    }/> 
        </div>)
}

  export default DocumentInfo