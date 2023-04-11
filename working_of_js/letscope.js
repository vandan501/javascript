/*Declare a variaAle u)in3 let in)ide a Alock )cope and attempt to lo3 it) value to the con)ole Aefore it i)
a))i3ned a value to demon)trate the temporal dead zone.*/
{ 
    console.log(myVar); // Output: ReferenceError: Cannot access 'myVar' before initialization
    // let myVar = 10;   //error
    var myVar = 10;
    console.log(myVar); // Output: 10
  }
  