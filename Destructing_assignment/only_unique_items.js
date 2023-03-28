/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.*/
let Number=[1,2,2,3,3,4,5,66,66,5,4,65,65,43,23,56,76,45,4321,34,56,76,34,56,345,23,32,54,56];

const uniqueElements=new Set(Number);

console.log(uniqueElements)