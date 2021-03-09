import React from 'react';
import {Link} from "react-router-dom"
const AddDreamBtn = () => {
    return ( 
        <div className="AddDreamBt">
            <Link to="/DreamJournal">
            <div><span><i class="fal fa-plus-circle"></i></span></div>
            </Link>
        </div>
     );
}
 
export default AddDreamBtn;