import React, { useContext } from 'react';

import {DreamContext} from "../contextApi/DreamContext";
const DreamList = () => {
let {dreams ,dispatch}=useContext(DreamContext);
console.log(dreams)
    return ( 
        <>
    
            {dreams.map(dream=>(
              <div key={dream.id} class="card mt-3 dreamjournal bg-primary">
                 <div class="card-body text-light">
                   <h5 class="card-title"><span>{new Date(dream.date).getDate()}</span> <span>{new Date(dream.date).toLocaleString('default', { month: 'long' })}</span></h5>
                   <p class="card-text">{dream.dream}</p>
                  {dream.tag.map(item=>(
                     <span class="card-text"><span></span><i  class=" ml-2 fas fa-tags"></i><span>{item.tags}</span></span>
                  ))}
                  <div className="ml-auto">
                   <button onClick={()=>{dispatch({type:"DELETE_DREAM",id:dream.id})}}  className="btn btn-danger m-2">DELETE</button>
                   </div>
                 </div>
                 </div>
                
                
            ))}

    
    

        </>
     );
}
 
export default DreamList;