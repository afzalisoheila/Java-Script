const images = document.querySelectorAll(".slider img")
const indicators = document.querySelectorAll(".indicators span")

 images.forEach(element => {
   element.style.display= "none"
     
 });







let index = 0
images[index].style.display = "block"
indicators[index].style.opacity = 100%
document.querySelector(".next").addEventListener("click", () => {
    images[index].style.display = "none"
    indicators[index].style.opacity = "40%"
    index++
    if (index >= images.length ) {
        index = 0;
    }

    images[index].style.display = "block"
    indicators[index].style.opacity = "100%"
  
})


document.querySelector(".prev").addEventListener("click", () => {
    images[i].style.display = "none"
    indicators[i].style.opacity = "40%"
    i--
    if (i <0) {
        i = images.length-1;
    }
    
    images[i].style.display = "block"
    indicators[i].style.opacity = "100%"
    
})


 

 



   