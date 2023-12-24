/*

Fix bug for division
    division result is with decimal
    but auto rounded up to integer when it is passed for another operation

*/




// getting buttons
let clear = document.querySelector("#clear");
let del = document.querySelector("#del");
let equal = document.querySelector("#equal");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let decimal = document.querySelector("#decimal");

// getting display area
let main_display = document.querySelector("#main_display");
let second_display =document.querySelector("#second_display");

// Global variables
let number_1 = NaN;
let number_2 = NaN;
let operation_type = null;

// init
main_display.textContent = ""
second_display.textContent = ""



// button actions
// clear button pressed action
clear.onclick = () => {

    main_display.textContent = "";
    second_display.textContent = "";
    number_1 = NaN;
    number_2 = NaN;
    operation_type = null;

}


// delete button pressed action
del.onclick = () => {

    let orgString = main_display.textContent;
    let newString = orgString.substring(0, orgString.length - 1)
    main_display.textContent = newString

}


// equal button pressed action
equal.onclick = () => {

    assignNumberToVariable();
    if( number_1 && number_2) calculate();
    number_2 = NaN;
    showOnMainDisplay();
    clearSecondDisplay();

}


// operator button pressed actions
add.onclick = () => operatorAction(Add);
subtract.onclick = () => operatorAction(Subtract);
multiply.onclick = () => operatorAction(Multiply);
divide.onclick = () => operatorAction(Divide);

// number button pressed actions 
zero.onclick = () => { if(main_display.textContent !== "0") main_display.appendChild(txt(0)); }
one.onclick = () => main_display.appendChild(txt(1));
two.onclick = () => main_display.appendChild(txt(2));
three.onclick = () => main_display.appendChild(txt(3));
four.onclick = () => main_display.appendChild(txt(4));
five.onclick = () => main_display.appendChild(txt(5));
six.onclick = () => main_display.appendChild(txt(6));
seven.onclick = () => main_display.appendChild(txt(7));
eight.onclick = () => main_display.appendChild(txt(8));
nine.onclick = () => main_display.appendChild(txt(9));
decimal.onclick = () => { if(main_display.textContent.indexOf(".") === -1) main_display.appendChild(txt(".")); }


// functions
 
// function to create text node
let txt = (txt) => document.createTextNode(txt);

// operator buttons action (add, subtract, multiply, divide)
let operatorAction = (operator) => {

    if(main_display.textContent) {

        assignNumberToVariable();
        if(number_1 && number_2) calculate();
        number_2 = NaN;
        operation_type = operator.name;
        showOnSecondDisplay(addSign(operator));

    } else if(second_display.textContent) {

        operation_type = operator.name;
        showOnSecondDisplay(addSign(operator));

    }
    
    clearMainDisplay();

}


// function to assign number from the display to respective Global variable
let assignNumberToVariable = () => {

    if(second_display.textContent === "") {
        number_1 = parseFloat(main_display.textContent);
    } else {
        number_2 = parseFloat(main_display.textContent);
    }

}


let addSign = (operator) => number_1 + " " + operator.sign;

let showOnSecondDisplay = (signAddedString) => second_display.textContent = signAddedString;
let showOnMainDisplay = () => main_display.textContent = number_1;

let clearMainDisplay = () => main_display.textContent = "";
let clearSecondDisplay = () => second_display.textContent = "";

let assignToNum1 = () => number_1 = parseInt(main_display.textContent);
let assignToNum2 = () => number_2 = parseInt(main_display.textContent);

let calculate = () => {

    switch(operation_type){
        case "add":
            number_1 += number_2;
            break;
        case "subtract":
            number_1 -= number_2;
            break;
        case "multiply":
            number_1 *= number_2;
            break;
        case "divide":
            number_1 = (number_1 / number_2) + (number_1 % number_2);
            break;
    }

}

// Operator objects
let Add = {
    name: "add",
    sign: "+"
}
let Subtract = {
    name: "subtract",
    sign: "-" 
}
let Multiply = {
    name: "multiply",
    sign: "×"
}
let Divide = {
    name: "divide",
    sign: "÷"
}
let Equal = {
    name: "equal",
    sign: "="
}
