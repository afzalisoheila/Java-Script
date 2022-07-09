let minute = document.getElementById("minute").innerText;
let seconds = document.getElementById("seconds").innerText;
const timer = setInterval(() => {
  
    seconds--
  if (seconds == 0) {
    if (minute == 0) {
      clearInterval(timer);
    } else {
      minute--;
      seconds = 59;
    }
    }
    document.getElementById("minute").innerText=minute;
    document.getElementById("seconds").innerText=seconds;

  
    
}, 1000);

