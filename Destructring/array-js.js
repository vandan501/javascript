const oneArray=[1,2,3,4];
const twoArray=[5,6,7,8];

// const threeArray=[oneArray.concact(twoarray)]
// const threeArray=[oneArray,twoArray]


/****************************************** */
//SPRADE operator
const threeArray=[...oneArray,...twoArray]
console.log(threeArray);

// function is also object
function demo()
{
    // console.log(arguments);
}
demo(1,2,3,4);


/**************************************** */
//REST operator
function manyArguments()
{
    console.log(typeof arguments);
    let args=Array.from(arguments);
    let finalArr=args.map(e=>e)
    {
        console.log(finalArr);
    }
}
// manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)


function manyArguments2(...args)
{
    console.log(typeof args);
    let finalArr=args.map(e=>e)
    console.log(finalArr);
}
// manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)



//++++++++++++++++++++++++++++++++++++++++
const names=["a","b"]
const newNames=["c",...names,"d"]//spread operator


const sitename="pwskills"
console.log([...sitename]);//sprade operator

function 
