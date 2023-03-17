// 2} Calculator
// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two numbersK
let num1 = 20;
let num2 = 12;
let operation = "+";

switch (operation) {
    case "+":  result = num1 + num2;
        console.log(result);
        break;
    case "-":  result = num1 - num2;
        console.log(result);
        break;
    case "*":  result = num1 * num2;
        console.log(result);
        break;
    case "/": result = num1 / num2;
        console.log(result);
        break;

    default: console.log("You can only perform arithmatic operation");
}