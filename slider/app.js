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
    indicators[index].style.opacity = 40%
    index++
    if (index >= images.length ) {
        index = 0; 
    }

    images[index].style.display = "block"
    indicators[index].style.opacity = "100%" 
    
})

let i = 0
images[i].style.display = "block"
document.querySelector(".prev").addEventListener("click", () => {
    images[i].style.display = "none"
    i--
    if (i <images.length) {
        i = 0; 
    }
    
    images[i].style.display= "block"
    
})
console.log(document.querySelectorAll(".slider img"));
