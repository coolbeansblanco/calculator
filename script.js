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
    checkForChainedExp();
    operand1 = Number(displayValue);
    clearDisplay();
    operator = "+";
});

subtractBtn?.addEventListener("click", () =>{
    checkForChainedExp();
    operand1 = Number(displayValue);
    clearDisplay();
    operator = "-";
});

multiplyBtn?.addEventListener("click", () =>{
    checkForChainedExp();
    operand1 = Number(displayValue);
    clearDisplay();
    operator = "*";
});

divideBtn?.addEventListener("click", () =>{
    checkForChainedExp();
    operand1 = Number(displayValue);
    clearDisplay();
    operator = "/";
});

equalBtn?.addEventListener("click", () =>{
    display.textContent = operate();
    clearDisplay();
})

clearBtn?.addEventListener("click", () =>{
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    clearDisplay();
    display.textContent = "--------------";
})

function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return Math.round( (num1 / num2) * 100000) / 100000;}

function clearDisplay(){
    displayValue = ""
}

function checkForChainedExp(){
    if (operand1){
        displayValue = operate();
        operand2 = undefined;
        display.textContent = displayValue;
    }
}

function operate(){
    
    operand2 = Number(displayValue);
    console.log(operand1,operator,operand2,displayValue)
    if (operator === "+")
        return add(operand1, operand2);
    if (operator === "-")
        return subtract(operand1, operand2);
    if (operator === "*")
        return multiply(operand1, operand2);
    if (operator === "/")
        return divide(operand1, operand2);
    
}