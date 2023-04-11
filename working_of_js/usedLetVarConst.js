/*2@ Declare three variaAle), one u)in3 let, one u)in3 var, and one u)in3 con)t, all in)ide a Alock )cope. A))i3n
them value) and lo3 their value) to the con)ole Aefore and after they are declared to demon)trate variaAle
hoi)tin3@*/
{
    var no1 = 5; // var variable
    console.log(no1); // Output: 5
  
    var no2 = 10; // let variable
    console.log(no2); // Output: 10
  
    const no4 = 15; // const variable
    console.log(no4); // Output: 15
  }
  const no3 = 15; // const variable
  console.log(no3); // Output: 15
  
  console.log(no1); 
  

  console.log(no2); 
  console.log(no3); 
  console.log(no4); 

  /*
  d:\pwskills\lectures\PROJECTS\JS\working_of_js\usedLetVarConst.js:22
  console.log(no4);
              ^

ReferenceError: no4 is not defined
    at Object.<anonymous> (d:\pwskills\lectures\PROJECTS\JS\working_of_js\usedLetVarConst.js:22:15)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.12.1
PS D:\pwskills\lectures\PROJECTS\JS\working_of_js> */