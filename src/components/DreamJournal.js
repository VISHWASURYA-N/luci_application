import React from 'react';
import Close from './close';
import Photos from './photo';
import Tags from './tags';
const DreamJournal= () => {
    let today=new Date();
    let month=today.toLocaleString('default', { month: 'long' });
    let date=today.getDate()
    console.log(month)

    return ( 
        <div>
            <Close/>
        <div className="container">
        <div className="DreamJournalHeader">
            <div className="dreamJournal">
                <div className="DreamJournalLeft">
                    <div className="color">DREAM JOURNAL</div>
                    <div><span className="month">{month} </span><span  className="month">{date}<sup>th</sup></span></div>
                    </div>
                    <div className="DreamJournalLeftRight">
                        <button className="saveDream">save Dream</button>
                 </div>
                   </div>
               <div className="textarea">
                <textarea placeholder="what happened in your dream?" rows="5"  cols="50"></textarea>
                </div>
               </div>
               <Tags/>
               <Photos/>
        </div>
        </div>
     );
}
 
export default DreamJournal;