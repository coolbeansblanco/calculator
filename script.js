const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equals');

add?.addEventListener("click", () => {
    console.log("Adding");
});

subtract?.addEventListener("click", () =>{
    console.log("Subtracting");
});

multiply?.addEventListener("click", () =>{
    console.log("Multiplying");
});

divide?.addEventListener("click", () =>{
    console.log("Dividing");
});

function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}