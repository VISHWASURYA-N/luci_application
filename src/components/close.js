import React from 'react';
import {Link} from "react-router-dom"
const Close = () => {
    return ( 
        <div className="close">
            <Link to="/">
            <button className="btnclose">X</button>
            </Link>
             </div>
     );
}
 
export default Close;