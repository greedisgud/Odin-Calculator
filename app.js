let display = document.getElementById("screen");
let numberButtons = document.querySelectorAll("[data-number]");
let clearButton = document.getElementById("clearBtn")
let deleteButton = document.getElementById("deleteBtn");


numberButtons.forEach((button => 
    button.addEventListener("click", () => appendNum(button.textContent))
))

function appendNum(number){
    display.textContent += number
}




