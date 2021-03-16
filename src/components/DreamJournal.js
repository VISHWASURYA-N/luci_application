import React, { useState ,useRef, useContext} from 'react';
import Close from './close';
import {v4 as uuid} from "uuid"
import {DreamContext} from "../contextApi/DreamContext";
import Tags from './tags';
const DreamJournal= () => {
  const { dispatch }=useContext(DreamContext)
 const today=new Date();
    let month=today.toLocaleString('default', { month: 'long' });
    let date=today.getDate();
    const targetref = useRef(null);
    const [dream, setDream] = useState("")
    const [photo, setPhoto] = useState("")
    const [addtag, setAddtag] = useState([])
    function handlesubmit(e){
      e.preventDefault();
      dispatch({type:"ADD_DREAM", payload:{date:(today), id:uuid(),dream:dream,tag:addtag,photo:photo}})
      setDream("");
      setPhoto("");
      setAddtag([])


    }
    function getTags(tags){
      setAddtag([...addtag,{tags:tags,id:uuid()}])
      console.log(tags)
      console.log(addtag)
      

    }
    return ( 

     <div className="dreamjournal ">
         <Close/>
         <form onSubmit={handlesubmit}>
         <div class="card m-3">

  <div class="card-body dream">
    <h6 class="card-title  d-flex justify-content-around"><span><p className="color" >DREAM JOURANAL</p> <h5 className=" m-0 p-0 text-light"><span>{month}</span> <span>{date} <sup>th</sup></span></h5></span><span><button className="saveDream">save Dream</button></span></h6>
   </div>
   <div className="textarea">
   <textarea value={dream} placeholder="what happened in your dream ?" onChange={(e)=>(setDream(e.target.value))}></textarea>
    </div>
    </div>

    <Tags getTags={getTags}/>


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
 
export default DreamJournal