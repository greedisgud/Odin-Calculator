let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById("decimalBtn");
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');




numberButtons.forEach((button) => button.addEventListener("click", () => appendNums(button.textContent)));
clearButton.addEventListener("click", clearScreen);
deleteButton.addEventListener("click", backspace);
decimalButton.addEventListener("click", addDecimal);


function appendNums(number){
    currentOperationScreen.textContent += number;
}

function reset(){
    currentOperationScreen = "";
}

function clearScreen(){
    currentOperationScreen.textContent = "0";
    lastOperationScreen.textContent = " ";
    firstNumber = "";
    secondNumber = "";
    currentOperation = null;
}

function addDecimal(){
    if (currentOperationScreen.textContent.includes(".")) return;
    currentOperationScreen.textContent += ".";
}

function backspace(){
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1);
}





function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch(operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return null
    }
}




//Operation functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}



