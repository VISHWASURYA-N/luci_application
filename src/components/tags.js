import React,{useState,useRef} from 'react'
const Tags = ({getTags}) => {
    const [tag, setTag] = useState("")
    // const [multitag,setMultipltag]=useState([])
    const targetref = useRef(null);
    function addingMultipleTag(){
        getTags(tag)
        setTag("")
    }
    return ( 
        
        <div class="card m-3" >
<div class="card-body">
  <h6 class="card-title  d-flex justify-content-around"><span><h3 className="text-light">Tags</h3> <h5 className=" m-0 p-0 text-mute text-center"><span className=" text-center">YOUR DREAM SIGNS</span></h5></span><span><span><i class="far fa-exclamation-circle text-light"></i></span></span></h6>
  <div>
        <input  value={tag} className="targetref custom-text-input" placeholder="TAG NAME" ref={targetref} type="text" onChange={(e)=>(setTag(e.target.value))} />
        </div>
        <span onClick={()=>{ addingMultipleTag()}} className="tagbutton"> + Add tag</span>
        </div>
 </div>

     );
}
 
export default Tags;