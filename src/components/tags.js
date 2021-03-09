import React, { useRef } from 'react';
const Tags = () => {
    const targetref = useRef(null);

    return ( 
        <div className="tags">
        <div className="tagleft">
        <div>Tags</div>
        <div>YOUR DREAM SIGNS</div>
        <div>
        <input className="targetref" ref={targetref} type="text"/>
        </div>
        <button onClick={()=>(targetref.current.focus())} className="tagbutton"> + Add tag</button>
        </div>
        <div className="right">
            <span><i class="far fa-exclamation-circle"></i></span>
            </div>
        </div>

       
      );
}
 
export default Tags;