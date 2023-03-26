//first learn about lexical scopes
let score=4;
function one()
{
    let score=0;
    console.log(score);
}

function two()
{
    let score=3
    console.log(score);
}

function three()
{
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);


//lexical scope example2
function outerFunc()
{
    let outerVar='i am at scope level 1'
            function innerFunc()
            {
                let innerVal="i am at scope level 2"
                console.log(outerVar);
            }
            console.log(innerVal);
            innerFunc()
}

//outerFunc()

const myGlobalValue=0;
function func()
{
    const val1=1;
    console.log(myGlobalValue);
    function innerofFunc()
    {
        const val2=2;
        console.log(val2,val1,myGlobalValue);
        

        function innerofinnerFunc()
        {
            const val3=3;
            console.log(val3,val2,val1,myGlobalValue);
        }
        innerofinnerFunc()
    }
    innerofFunc()
}
//func()


//Closure
function superFunc()
{
    let outerValue="i am outer"
    function minorFunc()
    {
        console.log(outerValue);
    }
    minorFunc()
}
// superFunc()

/************************************** */
// real world example

const errorMessage="FilenotFound"
{
    setTimeout(function callback(){
        console.log(errorMessage);
    },1000)
}


//example2
let pageCount=0;

const items=[2,4,5,6,7,8]

items.map((e)=>{
    pageCount++;
    console.log(e);
})
console.log("pageCount:",pageCount);









