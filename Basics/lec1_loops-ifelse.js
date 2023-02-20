//* conditions and loops

// lets start with conditions
// if
let age=18
if(age >=18){
    console.log("you are allowed")
}

//if else 
if(age >=19){
    console.log("you are allowed")
}
else{
    console.log("you are not allowed")
}

// if else leader
let signal="red";
if(signal == "red")
{
    console.log("red => STOP");
}
else if(signal == "red")
{
    console.log("yellow => Go slow  ");
}
else if(signal == "red")
{
    console.log("Green => Go Fast");
}
else{
    console.log("Invalid color");
}

// switch case
let user="student"
switch(user)
{
    case "admin":
        console.log("He is Admin");
        break;
    case "student":
        console.log("he is student"); 
        break;
    case "mentor": 
    console.log("He is mentor"); 
        break;
      default:console.log("I am default");    

}
// loops

// for loop
// while loop
// do while loop

// for loop
for(let i=0;i<=5;i++)
{
    console.log(i);
}

// while loop
let i=0;
while(i<5)
{
    console.log(i)
    i++;
}

// do while loop
let i=0;
do{
console.log("hello world");
i++;
}while(i<5);


// ternary operator
let isLoggedin=false;
isLoggedin ? console.log("Home page"):console.log("Login page")