import React, { createContext, useReducer,useEffect} from 'react';
// tag:action.payload.tag
 export let DreamContext=createContext();
 export const DreamProvider = ({children}) => {
    const reducer=(dreams,action)=>{
      // let tagVal=dreams.map(dream=>(dream.tag));
        switch(action.type){

            case "ADD_DREAM":return(
              [...dreams,{id:action.payload.id, date:action.payload.date,dream:action.payload.dream,
                tag:action.payload.tag,
                photo:action.payload.photo}] )  
                 case "DELETE_DREAM":return(
                      dreams.filter(dream=>(dream.id!=action.id))
                    )
                 
                    
                     default : return(dreams);
    }
    }
    const [dreams,dispatch]=useReducer(reducer,[])

    // const [dreams,dispatch]=useReducer(reducer,[],()=>{
    //   const localdata=localStorage.getItem("dreams");
    //    return localdata? JSON.parse(localdata):[]
    // })
    // useEffect(()=>{
    //   localStorage.setItem("dreams",JSON.stringify(dreams));

    // },[dreams])
     return ( 
           <div>
             <DreamContext.Provider value={{dreams,dispatch}}>
                 {children}
             </DreamContext.Provider>

         </div>
      );
 }
  
