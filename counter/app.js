let time = 10
counterDown = setInterval(() => {
  time--
  if (time <= 0) {
  clearInterval(counterDown);
  
 }
document.querySelector(".number").innerText=time;
},1000);