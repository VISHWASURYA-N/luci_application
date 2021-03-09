import React from 'react';
import headerlogo from "../assets/logo.jpg";
import Calender from './calender';
const   Navbar = () => {
    return ( 
        <div>
         <div className="header">
        <div className="headerlogo"><img src={headerlogo} alt="logo" className="logo"/></div>
     <div className="links">
    <div><span><i class="fas fa-music"></i></span></div>
    <div><span><i className="fas fa-fast-backward"></i></span></div>
     <div><span><i className="fas fa-search"></i></span></div>
    <div><span><i className="fas fa-cog"></i></span></div>
    </div>
    </div>
    <Calender/>

    </div>
     );
}
 
export default Navbar;