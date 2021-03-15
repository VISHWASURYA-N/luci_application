import React, { useState ,useRef, useContext} from 'react';
import Close from './close';
import {v4 as uuid} from "uuid"
import {DreamContext} from "../contextApi/DreamContext";
import { SearchContext } from '../contextApi/dreamSearchapi';
const DreamJournalByDate= () => {
  const { dispatch }=useContext(DreamContext)
  const {datVal}=useContext(SearchContext);
  console.log(datVal)
  const today=datVal;
    // let month=today.toLocaleString('default', { month: 'long' });
    // let date=today.getDate();
    const targetref = useRef(null);
    const [dream, setDream] = useState("")
    const [photo, setPhoto] = useState("")
    const [tag, setTag] = useState("")
    function handlesubmit(e){
      e.preventDefault();
      dispatch({type:"ADD_DREAM", payload:{date:today, id:uuid(),dream:dream,tag:tag,photo:photo}})
      setDream("");
      setPhoto("");
      setTag("")


    }
    return ( 

     <div className="dreamjournal ">
         <Close/>
         <form onSubmit={handlesubmit}>
         <div class="card m-3">

  <div class="card-body">
    <h6 class="card-title  d-flex justify-content-around"><span><p className="color" >DREAM JOURANAL</p> <h5 className=" m-0 p-0 text-light"><span>{today.toLocaleString('default', { month: 'long' })}</span> <span>{today.getDate()} <sup>th</sup></span></h5></span><span><button className="saveDream">save Dream</button></span></h6>
   </div>
   <div className="textarea">
   <textarea value={dream} placeholder="what happened in your dream ?" onChange={(e)=>(setDream(e.target.value))}></textarea>
    </div>
    </div>
<div class="card m-3" >
<div class="card-body">
  <h6 class="card-title  d-flex justify-content-around"><span><h3 className="text-light">Tags</h3> <h5 className=" m-0 p-0 text-mute text-center"><span className=" text-center">YOUR DREAM SIGNS</span></h5></span><span><span><i class="far fa-exclamation-circle text-light"></i></span></span></h6>
  <div>
        <input  value={tag} className="targetref custom-text-input" placeholder="TAG NAME" ref={targetref} type="text" onChange={(e)=>(setTag(e.target.value))} />
        </div>
        <button onClick={()=>{targetref.current.focus()}} className="tagbutton"> + Add tag</button>
        </div>
 </div>

 <div class="card m-3" >
<div class="card-body">
  <h3 class="card-title text-white">Photos</h3>
  <div class="custom-file">
    <input type="file" value={photo} class="custom-file-input " onChange={(e)=>(setPhoto(e.target.value))} accept="image/x-png,image/gif,image/jpeg" id="customInput "/>
    <label class="custom-file-label" for="customInput">ADD PHOTO</label>
</div>
  </div>
 </div>
 </form>
  </div>

      );
}
 
export default DreamJournalByDate