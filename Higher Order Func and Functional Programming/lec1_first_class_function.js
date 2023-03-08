// higher order function
const powerTwo = (n) => {
    return n ** 2;
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n;

}

// console.log(powerCube(powerTwo,3));
function sayHello() {
    return () => {
        console.log("Hello vandan");
    }
}
let guessValue = sayHello();
// console.log(guessValue);
guessValue();


// ex2
const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p;
        }
        return twoFun
    }
    return oneFun
}
// console.log(higherOrder(2)(3)(5));



//foreach
const myNums=[2,3,4,5];

const sumArray=arr=>
{
    let total=0;
    arr.forEach(function(element)
    {
        total+=element;
    });
    return total;
}

console.log(sumArray(myNums));


//setIntervals and setTimeout

function callme()
{
    console.log("Hii i am vandan!");
}
// setInterval(callme,1000)
setTimeout(callme,3000)