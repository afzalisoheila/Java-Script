document.getElementById("calculator").addEventListener("click", function () {
    const num1=document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const BMI = num1 / num2 * num2
    console.log(BMI);
})