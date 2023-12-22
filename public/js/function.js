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
let view = document.querySelector("#view");

// init
view.textContent = ""

// clear action
clear.onclick = () => view.textContent = ""

// delete action
del.onclick = () => {
    // alert(view.textContent.split("").pop())

    let orgString = view.textContent;
    console.log(orgString)
    let newString = orgString.substring(0, orgString.length - 1)
    console.log(newString)

    view.textContent = newString
}

// number button press actions
zero.onclick = () => { if(view.textContent !== "") view.appendChild(txt(0)); }
one.onclick = () => view.appendChild(txt(1));
two.onclick = () => view.appendChild(txt(2));
three.onclick = () => view.appendChild(txt(3));
four.onclick = () => view.appendChild(txt(4));
five.onclick = () => view.appendChild(txt(5));
six.onclick = () => view.appendChild(txt(6));
seven.onclick = () => view.appendChild(txt(7));
eight.onclick = () => view.appendChild(txt(8));
nine.onclick = () => view.appendChild(txt(9));
decimal.onclick = () => view.appendChild(txt("."));





// functions to make your life easier
// functions to shorten the code


// function to create text node
let txt = (txt) => document.createTextNode(txt);
