let firstNumber = ''
let secondNumber = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const decimalButton = document.getElementById('decimalBtn')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')

numberButtons.forEach((button => button.addEventListener("click", () => appendNum(button.textContent))));
operatorButtons.forEach((button => button.addEventListener("click", () => getOperator(button.textContent))));
equalsButton.addEventListener("click", solve);
clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", backspace)
decimalButton.addEventListener("click", addDecimal)



function appendNum(number){
    if (currentOperationScreen.textContent === "0" || shouldResetScreen)
        reset()
    currentOperationScreen.textContent += number
}

function clear(){
    currentOperationScreen.textContent = "0"
    lastOperationScreen.textContent= ""
    firstNumber = ""
    secondNumber = ""
    currentOperation = null
}

function backspace(){
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1);
}

function addDecimal(){
    if (shouldResetScreen) reset()
    if (currentOperationScreen.textContent.includes(".")) return
    currentOperationScreen.textContent += "."
}

function getOperator(operator){
    if (currentOperation !== null) solve()
    firstNumber = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstNumber} ${currentOperation}`
    shouldResetScreen = true
}

function solve(){
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '/' && currentOperationScreen.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondNumber = currentOperationScreen.textContent
  currentOperationScreen.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  )
  lastOperationScreen.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}


function reset(){
    currentOperationScreen.textContent = ""
    shouldResetScreen = false
}


function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operator, a, b){
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
