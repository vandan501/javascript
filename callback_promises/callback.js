/*
function h(x,fn)
{
    // h is a hof
    // fn is callback 
    console.log(x*x);
    fn(x*x);
}
h(10,function ()
{
    console.log("done with callback")
})
h(10,exec)

function exec(n)
{
    console.log("squared value is :",n)
}



*/
  /*************************************** */
// setTimeout
console.log("Start") 
setTimeout(function f(){
    console.log("timer done")
},3000);

for(let i=0;i<100000000;i++)
{}
console.log("end");



