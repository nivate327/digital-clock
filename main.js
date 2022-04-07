let clock=document.getElementById("digital-clock");
let date=new Date();


const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

  setInterval(()=>{
    let date=new Date();
    let day = weekday[date.getDay()];
    let time = date.toLocaleTimeString();
    
    clock.innerHTML = `${day} | ${time}`;
    // console.log(day);
  },1000);
   
   
  
 
 
 
 
 