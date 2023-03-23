//try -catch and finally block
/*
example 1
try{
let num=undefined;
console.log(num[0]);
}
catch(err){
console.log(" exception (error) handling in catch", err);
}finally{
console.log("finally always gets executed");
}

*/

//example 2  if i remove risky code then only try catch and finally catch would be executed
try{
    console.log("hello world");
//    console.log(a);
}catch{
    console.log("handled");
}
console.log("end");
