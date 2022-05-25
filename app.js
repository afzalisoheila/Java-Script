alert("hello")
console.log(document.getElementById("welcome"));

// function Sum(x, y){
//     return "totalSum" + (x + y)
// }

// let number1=4
// let number2 = 6

// let result = Sum(number1,number2 )
// console.log(result)
let month = 4
if (month <= 3) {
    console.log("spring");
}
else if (month >3 && month <=6) {
    console.log("summer");
}
else if (month >6 && month <=9) {
    console.log("autumn");
}
else if (month <=12) {
    console.log("winter");
} 
let email ="soheila.afzali@gmail.com"
let pass = "1234"
if (email == "soheila.afzali@gmail.com") {
    console.log("you can login");
    
}
if (email != "soheila.afzali@gmail.com") {
    console.log("you can't login"); 
} 

if (pass == "1234") {
    console.log("you can login");
}
if (pass != "1234") {
    console.log("you can't login");
}