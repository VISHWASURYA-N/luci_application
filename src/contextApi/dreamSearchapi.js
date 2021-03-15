import React, { createContext, useContext, useState } from 'react';
import { DreamContext } from './DreamContext';
export const SearchContext=createContext();
export const SearchProvider  = ({children}) => {
let [datVal,setDatVal]=useState()
    const{dreams}=useContext(DreamContext);
    console.log(dreams)
  const getDate=(getval)=>{
      console.log(getval)
      setDatVal(getval)
  }
    return ( 
        <div>
            <SearchContext.Provider value={{datVal,dreams,getDate}}>
                {children}

            </SearchContext.Provider>
        </div>
     );
}
 

