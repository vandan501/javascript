function createPromise()
{
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve(10); 
        },3000);

    });
}

console.log("start");
let x=createPromise();
console.log("Got a new promise");

//registration
x.then(function f()  
{
console.log("Promise done")
}).catch(function g(value){
    console.log("handeled",value)
}).finally(function fn(){
    console.log("finally")
});
console.log("end")