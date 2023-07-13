let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

setInterval(function(){
    let today = new Date();
    let hrot = (today.getHours()*30)+(today.getMinutes()/2);
    let minrot = (min*6);
    let secrot = (today.getSeconds()*6);
    
hr.style.transform = `rotate(${hrot}deg)`;
min.style.transform = `rotate(${minrot}deg)`;
sec.style.transform = `rotate(${secrot}deg)`;
},1000);