//Increment Number
let number1 = 5;
console.log("Before increment", number1);
const incNumber = ++number1;
console.log("After - increment", incNumber);

//Decrement Number
let number2 = 5;
console.log("Before decrement", number2);
const decNumber = --number2;
console.log("After - decrement", decNumber);

// Number to String
let number3 = 5;
console.log("Before String", number3);
const stringNumber = number3.toString();
console.log("After - toString", stringNumber);

// Number to Exponential Notation
let number4 = 5;
console.log("Before exponential", number4);
const expoNumber = number4.toExponential();
console.log("After - toExponential", expoNumber);

// Number to string with decimals
let number5 = 5;
console.log("Before string with decimals", number5);
const fixedNumber = number5.toFixed(2);
console.log("After - toFixed", fixedNumber);

// Number to check for a number
let number6 = 5;
let number7 = "five";
console.log("Checking to see if each are a Number", number6, number7);
const intNumber6 = isNaN(number6)
const intNumber7 = isNaN(number7);
console.log("After - isNaN", intNumber6, intNumber7);

