// 1. one para and a single retuen statement
const square=(x)=>x*x;
console.log( square(8));

// 2.multiple para and single statemernt
const sumOfTwoNumbers=(x,y)=>x+y;
console.log( sumOfTwoNumbers(8,8));

// 3.Multiple statements in function expression
const sum=(x,y)=>{
console.log(`adding ${x} and ${y}`);
return x+y;
};
sum(10,20);

// 4. returning an object
const sumAndDiffrence=(x,y)=>({sum:x+y,diffrence:x-y});
let ans=sumAndDiffrence(20,5);
console.log(ans);