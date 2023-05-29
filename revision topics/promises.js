////////////////////////////***********CREATING A PROMISE*************************************----------------- */
const promiseOne=new Promise(function(resolve,reject)
{
//do an async task
//db call,crypto
setTimeout(function(){
    console.log("Async task is complete");
    resolve()
},1000);
})

///////////////////////////CONSUMING A PROMISE//////////////////////////////////

promiseOne.then(function(){
    console.log("Prmoise consumed");
    
})


new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2")
},1000);
resolve();
}).then(function(){
    console.log("Promise consumed:2");
})

const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
    //db call to get all user from database
    resolve({username:"vandan",email:"vandanraval2002@gmail.com"})
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})
//****************************************************** */
const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true;
    if(!error)
    {
        resolve({username:"vandan",email:"vandanraval2002@omail.ai"})
    }
    else{
        reject('ERROR:something went wrong')
    }
},1000)
})

promiseFour
.then(function(user){console.log(user)})
.catch(function(error){error})
.finally(()=>console.log("the promise is either resolve or reject"))


//************************************************************************* */
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:"gopal",email:"gopalraval2002@omail.ai"})
        }
        else{
            reject('ERROR:something went wrong')
        }
    },1000)
    })

 async function consumedPromisefive(){
        const response=await promiseFive;
        console.log(response)
    }

    consumedPromisefive()



    //******************************************** */

async function getAllUsers(){
const response=   await fetch('https://jsonplaceholder.typicode.com/users')
const data=response.json();
console.log(data);
}

getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users').then(function(resolve){
//     return response.json()
//     .then(()=>console.log(data))
//     .catch((error)=>console.log(error))
// })








