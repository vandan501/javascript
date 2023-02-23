// function with parameter

/*
function displayMessage(messageToBeDisplayed)
{
    console.log(messageToBeDisplayed);
}
displayMessage("I am happy to learn fullstack web development from pw skills");
displayMessage("i am enjoying the joureny of javascript");


function displayMessage(messageToBeDisplayed="hello world")
{

    console.log(messageToBeDisplayed);
}
// displayMessage("hey this is function with parameter")
displayMessage("hi my name is vadan raval");

// default value
displayMessage();
*/
/*
function add(a,b)
{
    return a+b;
}
ans=add(20,30); //this is function with parameter
console.log(ans);


function add(a,b=30)
{
    return a+b;
}
ans=add(30); //this is function with parameter
console.log(ans);


function add(a=10,b=30)
{
    return a+b;
}
ans=add(); 
console.log(ans);

*/
function sumOfTwoNumbers([no1,no2])
{
    return no1+no2;
}
let values=[10,40];
let ans=sumOfTwoNumbers(values);
console.log(ans);

let num1=8;
let num2=0;
console.log(num1/num2);

let x=5;
while(x<6)
{
    console.log();
    x++;
}



let one=10;
let two="10";
let three=one==two?"equal":"not equal";
console.log(three);


let t=10>5?"x is greater than 5";
console.log(t);