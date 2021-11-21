
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
    if (!isNaN(temp) || temp == '.') { // if it's a number
        current += temp;
        if (current[0] == 0 && Math.abs(current) >= 1) {
            current = current.slice(1, );
        } // but if it's a non-zero number, remove any zeroes off the front

    } else { // if it's an operator
        if (previous > 0) {
            temp = "";
            // calculate
            let result = "";
            let n1 = parseFloat(previous);
            let n2 = parseFloat(current);
            if (operator == '+') {
                result = n1 + n2;
            } else if (operator == '-') {
                result = n1 - n2;
            } else if (operator == '*') {
                result = n1 * n2;
            } else if (operator == '/') {
                result = n1 / n2;
            }
            previous = `${current}`;
            current = `${result}`;
            operator = "";
        } else {
            previous = `${current}`;
            current = "";
        }
    }
    document.querySelector("p").innerText = current; // display
}; // and implicitly do nothing if zero, since defaults is zero


// operators: store on press

div.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "/";
    temp = "/";
    calculate();
});
mult.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "*";
    temp = "*";
    calculate();
});
minus.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "-";
    temp = "-";
    calculate();
});
sum.addEventListener("click", (event) => {
    event.preventDefault();
    operator += "+";
    temp = "+";
    calculate();
});

// nothing to operator string
equals.addEventListener("click", (event) => {
    event.preventDefault();
    temp = "=";
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