import React from 'react';
import headerlogo from "../assets/logo.jpg";
import Calender from './calender';
import DreamList from './DreamList';
const   Navbar = () => {
    return ( 
    //     <div>
    //      <div className="header">
    //     <div className="headerlogo"><img src={headerlogo} alt="logo" className="logo"/></div>
    //  <div className="links">
    // <div><span><i class="fas fa-music"></i></span></div>
    // <div><span><i className="fas fa-fast-backward"></i></span></div>
    //  <div><span><i className="fas fa-search"></i></span></div>
    // <div><span><i className="fas fa-cog"></i></span></div>
    // </div>
    // </div>
   
    // </div>
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
  <a class="navbar-brand" href="#"><img src={headerlogo} alt="logo" className="logo"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><i class="fas fa-music"></i><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i className="fas fa-fast-backward"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i className="fas fa-search"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#"><i className="fas fa-cog"></i></a>
      </li>
    </ul>
  </div>
</nav>
     );
}
 
export default Navbar;