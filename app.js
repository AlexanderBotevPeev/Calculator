
// connecting to the DOM

const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operation");
const equals = document.getElementsByClassName("equals");
const output = document.getElementById("OUTPUT");
const allClear = document.getElementsByClassName("all-clear");
const del = document.getElementsByClassName("delete");
// initializing global variables
let stringOne = "";
let stringTwo = "";
let operator = "";
let result = 0;
let firstNumber = true;

function calculate(stringOne, stringTwo){
    console.log(`begin calculate (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);
    stringOne = parseFloat(stringOne);
    stringTwo = parseFloat(stringTwo);
    result = 0;
    firstNumber = true;
    console.log(`after parseint (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);

    switch (operator) {
        case "+":
            console.log(`before result (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);
            result = stringOne + stringTwo;
            break;
        case "-":
            result = stringOne - stringTwo;
            break;
        case "*":
            result = stringOne * stringTwo;
            break;
        case "÷":
            result = stringOne / stringTwo;
            break;

        default:
            console.log(`error (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);
            break;
    }
    
    console.log(`after result (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);
    
    continueCalculation(result)
    output.innerText = result;

    console.log(`before return (${typeof result}  ${result}) = ${typeof stringOne} ${stringOne} + ${typeof stringTwo}  ${stringOne}`);

    return result;

}

del[0].addEventListener("click", function(){deleteNumber()});
allClear[0].addEventListener("click", function (){clearDisplay()});
equals[0].addEventListener("click", function(){calculate(stringOne, stringTwo)});

// setting event listener via for loop
for(let i =0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){setNumbers(numbers[i].value)});
}
for(let i =0; i<operators.length; i++){
    operators[i].addEventListener("click", function(){setOperator(operators[i].value)});
}

function setOperator(handler){
    operator = handler;
    firstNumber = false;
}
function clearDisplay(){
    stringOne = "";
    stringTwo = "";
    operator = "";
    firstNumber = true;
    output.innerText = "";
}

//  functionality to add further equations after the first one
function continueCalculation(result) {
    stringOne = result;
    stringTwo = "";
    operator = "";
    firstNumber = false;
}

function setNumbers(number){
    output.innerText = "";
    if(firstNumber){
        stringOne += number;
        output.innerText=stringOne;
    }
    else{
        stringTwo += number;
        output.innerText = stringTwo;
    }
}

function deleteNumber(){
    if(firstNumber){
        stringOne =  stringOne.slice(0, -1);
        output.innerText = stringOne;
    }
    else {
        stringTwo = stringTwo.split().slice(0, -1).toString();
        output.innerText = stringTwo;
    }
}