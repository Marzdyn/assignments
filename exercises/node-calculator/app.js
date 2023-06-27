const readline = require("readline-sync")

const num1 = readline.question("What is your wonderful first number?")
parseInt(num1)

const num2 = readline.question("What is your delightful second number?")
parseInt(num2)

const equation = readline.question("What would you like to do with them? add, subtract, multiply or divide?")

function additionFunc(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtractionFunc(num1, num2) {
    return parseInt(num1) - parseInt(num2)
}

function multiplicationFunc(num1, num2){
    return parseInt(num1) * parseInt(num2)
}

function divisionFunc(num1, num2){
    return parseInt(num1) / parseInt(num2)
}

if (equation === "add") {
    let plus = additionFunc(num1, num2)
    console.log(plus)
} else if (equation === "subtract"){
    let subtract = subtractionFunc(num1, num2)
    console.log(subtract)
} else if (equation === "multiply"){
    let multiply = multiplicationFunc(num1, num2)
    console.log(multiply)
} else if (equation === "divide"){
    let divide = divisionFunc(num1, num2)
    console.log(divide)
}
