const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const display = document.getElementById('display');

let operand1; 
let operand2;
let operator;
let displayValue ="";

for (let i=0; i<10; i++){
    document.getElementById(i).addEventListener("click", (textContent) => {
        displayValue += i.toString();
        display.textContent = displayValue;
    });
}

addBtn?.addEventListener("click", () => {
    operand1 = displayValue;
    displayValue = "";
    operator = "+";
});

subtractBtn?.addEventListener("click", () =>{
    operand1 = displayValue;
    displayValue = "";
    operator = "-";
});

multiplyBtn?.addEventListener("click", () =>{
    operand1 = displayValue;
    displayValue = "";
    operator = "*";
});

divideBtn?.addEventListener("click", () =>{
    operand1 = displayValue;
    displayValue = "";
    operator = "/";
});

equalBtn?.addEventListener("click", operate)

clearBtn?.addEventListener("click", () =>{
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    displayValue = "";
})

function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}

function clearDisplay(){
    
}

function operate(){
    operand2 = Number(displayValue);
    if (operator === "+")
        display.textContent = add(operand1, operand2);
    if (operator === "-")
        display.textContent = subtract(operand1, operand2);
    if (operator === "*")
        display.textContent = multiply(operand1, operand2);
    if (operator === "/")
        display.textContent = divide(operand1, operand2);
    displayValue = "";
}