  import React from 'react';
  import { subDays } from 'date-fns'
  const Calender = () => {
      let today=new Date();
      let totalDays = 15;
      let init = 1;
      let arr = [...Array(totalDays).keys()].map((el) => subDays(today, el));
      console.log(arr);
/*
      for (var i = 1; i <= 15; i++) {
          console.log('checking i, and date', i, subDays(today, i));
      }
      */
      console.log(today.getDate())
      let todaymonth=today.toLocaleString('default', { month: 'short' })
      let seconday=subDays(today, 1);
      let secondMonth=seconday.toLocaleString('default', { month: 'short' });
      let third=subDays(today, 2);
      let thirdMonth=third.toLocaleString('default', { month: 'short' });
      let fourth=subDays(today, 3);
      let fourthMonth=fourth.toLocaleString('default', { month: 'short' });
      let fifth=subDays(today, 4);
      let fifthMonth=fifth.toLocaleString('default', { month: 'short' });
      let sixth=subDays(today, 5);
      let sixthMonth=sixth.toLocaleString('default', { month: 'short' });
      let seventh=subDays(today, 6);
      let seventhMonth=seventh.toLocaleString('default', { month: 'short' });
      let eighth=subDays(today, 7);
      let eighthMonth=eighth.toLocaleString('default', { month: 'short' });
      let ninth=subDays(today, 8);
      let ninthMonth=ninth.toLocaleString('default', { month: 'short' });
      let tenth=subDays(today, 9);
      let tenthMonth=tenth.toLocaleString('default', { month: 'short' });
      let eleventh=subDays(today, 10);
      let eleventhMonth=eleventh.toLocaleString('default', { month: 'short' });
      let twelve=subDays(today, 11);
      let twelveMonth=twelve.toLocaleString('default', { month: 'short' });
      let thirtenth=subDays(today, 12);
      let thirtenthMonth=thirtenth.toLocaleString('default', { month: 'short' });
      let fourteenth=subDays(today, 13);
      let fourteenthMonth=fourteenth.toLocaleString('default', { month: 'short' });
      let fifteenth=subDays(today, 14);
     let fifteenthMonth= fifteenth.toLocaleString('default', { month: 'short' });

      console.log(secondMonth);
      let firstday=new Date(today)
    
   
      return ( 
          <div className="wrapper">
          <div className="calender">
              
              <button className="date"><span>{today.getDate()}</span><span>{todaymonth}</span></button>
              <button className="date"><span>{seconday.getDate()}</span><span>{secondMonth}</span></button>
              <button className="date"><span>{third.getDate()}</span><span>{thirdMonth}</span></button>
              <button className="date"><span>{fifth.getDate()}</span><span>{fifthMonth}</span></button>
              <button className="date"><span>{fourth.getDate()}</span><span>{fourthMonth}</span></button>
              <button  className="date"><span>{sixth.getDate()}</span><span>{sixthMonth}</span></button>
              <button className="date"><span>{seventh.getDate()}</span><span>{seventhMonth}</span></button>
              <button className="date"><span>{eighth.getDate()}</span><span>{eighthMonth}</span></button>
              <button className="date"><span>{ninth.getDate()}</span><span>{ninthMonth}</span></button>
              <button className="date"><span>{tenth.getDate()}</span><span>{tenthMonth}</span></button>
              <button className="date"><span>{eleventh.getDate()}</span><span>{eleventhMonth}</span></button>
              <button className="date"><span>{twelve.getDate()}</span><span>{twelveMonth}</span></button>
              <button className="date"><span>{thirtenth.getDate()}</span><span>{thirtenthMonth}</span></button>
              <button className="date"><span>{fourteenth.getDate()}</span><span>{fourteenthMonth}</span></button>
              <button className="date"><span>{fifteenth.getDate()}</span><span>{fifteenthMonth}</span></button>
              <input className="date" type="date"/>
           </div>
           </div>
       );
  }
   
  export default Calender;  