import React, {useContext,useState} from 'react';
import { subDays } from 'date-fns';
import { DreamContext } from '../contextApi/DreamContext';
import {Link} from "react-router-dom"
import { SearchContext } from '../contextApi/dreamSearchapi';
  const Calender = () => {
    let [date,setDate]=useState("")
    const {dispatch}=useContext(DreamContext);
    const {getDate}=useContext(SearchContext);
    getDate(date)
      let today=new Date();
      let totalDays = 15;
      let arr = [...Array(totalDays).keys()].map((index) => subDays(today, index));
      return ( 
          <div className="wrapper">
        
              {arr.map(dates=>(
                <Link to="/Filter">
              <button  onClick={()=>{setDate(dates)}} className="date"><span>{dates.getDate()}</span><span>{dates.toLocaleString('default', { month: 'short' })}</span></button>
              </Link>
              )
                
              )}
              <input className="date" type="date"/>
              
        
           </div>
       );
  } 
   
  export default Calender;  