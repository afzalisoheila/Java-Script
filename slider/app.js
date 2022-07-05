const images = document.querySelectorAll(".slider img")

 images.forEach(element => {
   element.style.display= "none"
    
 });
let i = 0
images[i].style.display = "block"
document.querySelector(".next").addEventListener("click", () => {
    images[i].style.display = "none"
    i++
    if (i >= images.length) {
        i = 0; 
    }

    images[i].style.display= "block"
    
})

let r = 0
images[r].style.display = "block"
document.querySelector(".prev").addEventListener("click", () => {
    images[r].style.display = "none"
    r--
    if (r <= images.length) {
        r = 0; 
    }
    
    images[r].style.display= "block"
    
})
console.log(document.querySelectorAll(".slider img"));
