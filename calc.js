
/*
 Jay's simple calculator - MVP edition

 What works:
 > numbers
 > +, -, /, *, =
 > decimals
 > clear

 Incomplete:
 > Provision made to write memory functions
 > Buttons for all functions
 > Off, (sqrt), percentage, uncertainty margin

 Methods used:
 > .jfif (jpeg type) image background, less-than-perfect digital font
 > invisible buttons (opacity)
 > CSS grid and flex (SCSS)
*/

// buttons

const div = document.getElementById("div");

const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const mult = document.getElementById("mult");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const minus = document.getElementById("minus");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const sum = document.getElementById("sum");

const zero = document.getElementById("zero");
const point = document.getElementById("point");
const equals = document.getElementById("equals");

const clear = document.getElementById("clear");

// global vars -- if declared inside function, may be reset on button press

let current = "0";
let previous = "";
let operator = "";
let temp = "";
let equality = false;

// calculate:

const calculate = () => {

    console.log(current);
    console.log(previous);
    console.log(operator);
    console.log(temp);

    if (temp) { // if it's number-ish

        // no double dp's
        if (temp == "." && current.includes(".")) {
            temp = "";
        }

        current += temp; // concatenate
        
        answer = false; // reset
        temp = "";

        // if it's > 1, remove zero off the front
        if (current[0] == 0 && Math.abs(current) >= 1) {
            current = current.slice(1, );
        }

        // display
        document.querySelector("p").innerText = current;

    } else { // else it's an operator

        // if there's no previous number, shift
        if (previous == 0) {
            previous = `${current}`;

        } else { // calculate using active operator

            let result = "";
            let n1 = parseFloat(previous);
            let n2 = parseFloat(current);

            if (operator == '+') {
                result = n1 + n2;
            } else if (operator == '-') {                // silly javascript,
                result = ((n1 - n2 > 0) ? n1 - n2 : "NaN"); // does not like negatives
            } else if (operator == '*') {
                result = n1 * n2;
            } else if (operator == '/') {
                result = n1 / n2;
            }
            // display
            document.querySelector("p").innerText = `${result}`;

            previous = `${result}`; // shift
            if (equality) operator = ""; // reset operator from equals
        }
    // and clear current value for new number
    current = "0";
    }
};


// operators: store on press

div.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "/";
    calculate();
});
mult.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "*";
    calculate();
});
minus.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "-";
    calculate();
});
sum.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "+";
    calculate();
});

// EQUALS: special variable output
equals.addEventListener("click", (event) => {
    event.preventDefault();
    equality = true;
    calculate();
});

// memory functions

clear.addEventListener("click", (event) => {
    event.preventDefault();
    current = "0";
    previous = "";
    temp = "";
    operator = "";
    document.querySelector("p").innerText = current;
});

// numbers: store on press

seven.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "7";
    calculate();
});
eight.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "8";
    calculate();
});
nine.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "9";
    calculate();
});

four.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "4";
    calculate();
});
five.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "5";
    calculate();
});
six.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "6";
    calculate();
});

one.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "1";
    calculate();
});
two.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "2";
    calculate();
});
three.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "3";
    calculate();
});

zero.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "0";
    calculate();
});

point.addEventListener("click", (event) => {
    event.preventDefault();
    temp = ".";
    calculate();
});