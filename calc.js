
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

// global vars

let current = "0";
let previous = "";
let operator = "";
let temp = "";

// calculate:

const calculate = () => {
    const screenRef = document.getElementById("screen");
    console.log(current);
    console.log(previous);
    console.log(operator);
    console.log(temp);

    if (!temp) { // if it's an operator

        if (operator[0] == "=") { // if equals is the (first) operator, clear operator
            operator = "";
        } else {
            if (operator.length == 1) {
            // if only one operator stored move current to 'previous', clear
                previous = `${current}`;
                current = "0";
            } else { // calculate using most recent operator, not required to be equals
                let result = "";
                let n1 = parseFloat(previous);
                let n2 = parseFloat(current);
                if (operator[0] == '+') {
                    result = n1 + n2;
                } else if (operator[0] == '-') {
                    result = ((n1 - n2 > 0) ? n1 - n2 : -(n2 - n1))
                } else if (operator[0] == '*') {
                    result = n1 * n2;
                } else if (operator[0] == '/') {
                    result = n1 / n2;
                }
                current = `${result}`;
                previous = `${current}`;
                operator = "";
            }
        }
    } else { // but if it's a non-zero number, remove any zeroes off the front
        current += temp;
        if (current[0] == 0 && Math.abs(current) >= 1) {
            current = current.slice(1, );
        } 
    } //   < <   D I S P L A Y   > >
    document.querySelector("p").innerText = current;
    temp = "";
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

// nothing to operator string
equals.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "=";
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