import React,{useContext} from 'react';
import { SearchContext } from '../contextApi/dreamSearchapi';
import Close from './close';
import DreamJournalByDate from './dreanjunranlbydate';
const FilterBasedOnDate = () => {
    const {dreams,datVal} = useContext(SearchContext);
    console.log(dreams)
 let newDreams= dreams.filter(item=>(item.date.getDate()===datVal.getDate()))



  
if(newDreams.length){
      return ( 
        <>
        <Close/>
         {newDreams.map(dream=>(
              <div key={dream.id} class="card mt-3  bg-primary">
                 <div class="card-body text-light">
                   <h5 class="card-title"><span>{new Date(dream.date).getDate()}</span> <span>{new Date(dream.date).toLocaleString('default', { month: 'long' })}</span></h5>
                   <p class="card-text">{dream.dream}</p>
                   <p class="card-text"><span></span><i  class=" ml-2 fas fa-tags"></i><span>{dream.tag}</span></p>
                 </div>
                 </div>
                
                
            ))}
            </>
     );
}
else{
    console.log(datVal.getDate)
    return(
        
        <div>
         { datVal.getDate  &&<DreamJournalByDate/>}
        </div>
    )
}
}
 
export default FilterBasedOnDate;