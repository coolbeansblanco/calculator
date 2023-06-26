const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equals');

let operand1, operand2, operator;

add?.addEventListener("click", () => {
    operator = "+";
});

subtract?.addEventListener("click", () =>{
    operator = "-";
});

multiply?.addEventListener("click", () =>{
    operator = "*";
});

divide?.addEventListener("click", () =>{
    operator = "/";
});

function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}

function operate(){
    if (operator === "+")
        return add(operand1, operand2);
    if (operator === "-")
        return subtract(operand1, operand2);
    if (operator === "*")
        return multiply(operand1, operand2);
    if (operator === "/")
        return divide(operand1, operand2);
}