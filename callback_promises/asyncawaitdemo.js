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

async function Consume()
{
try{
    console.log("inside a function")
    const response=await createPromise();
    console.log("response is:",response)

}
catch(err){
    console.log("handeled",err)
}
}
// console.log(Consume())
console.log("start")
Consume();
console.log("end")
   
