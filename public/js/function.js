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
let num_arr = [zero, one, two, three, four, five, six, seven ,eight, nine];
// getting display area
let current_num = document.querySelector("#current_num");
let reserved_num =document.querySelector("#reserved_num");
//
let number_1 = NaN;
let number_2 = NaN;

// init
current_num.textContent = ""
reserved_num.textContent = ""


// actions
// clear action
clear.onclick = () => {
    current_num.textContent = "";
    reserved_num.textContent = "";
}

// delete action
del.onclick = () => {
    // alert(current_num.textContent.split("").pop())

    let orgString = current_num.textContent;
    console.log(orgString)
    let newString = orgString.substring(0, orgString.length - 1)
    console.log(newString)

    current_num.textContent = newString
}

equal.onclick = () => {
    set_number();
    calculate(Equal);
}

add.onclick = () => {
    set_number();
    if(reserved_num.textContent === "") {
        display_reserved_num(Add)
    } else {
        calculate(Add)
    }
    current_num.textContent = "";
}




// number button press actions
zero.onclick = () => { if(current_num.textContent !== "") current_num.appendChild(txt(0)); }
one.onclick = () => current_num.appendChild(txt(1));
two.onclick = () => current_num.appendChild(txt(2));
three.onclick = () => current_num.appendChild(txt(3));
four.onclick = () => current_num.appendChild(txt(4));
five.onclick = () => current_num.appendChild(txt(5));
six.onclick = () => current_num.appendChild(txt(6));
seven.onclick = () => current_num.appendChild(txt(7));
eight.onclick = () => current_num.appendChild(txt(8));
nine.onclick = () => current_num.appendChild(txt(9));
decimal.onclick = () => current_num.appendChild(txt("."));



// functions to make your life easier
// functions to shorten the code


// function to create text node
let txt = (txt) => document.createTextNode(txt);

let set_number = () => {
    if(reserved_num.textContent === "") {
        number_1 = parseInt(current_num.textContent);
    } else {
        number_2 = parseInt(current_num.textContent);
    }
}

let display_reserved_num = (operator) => reserved_num.textContent = number_1 + " " + operator.sign;
let display_current_num = () => current_num.textContent = number_1;

let calculate = (operator) => {
    
    operations(operator.name);
    
    if(operator.name === "equal") {
        display_current_num();
    } else {
        display_reserved_num(operator);
    }

}

let operations = (operation) => {
    switch(operation){
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

let Add = {
    name: "add",
    sign: "+"
}
let Subtrace = {
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