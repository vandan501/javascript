// vandanraval2002@gmail.com
// Let see the direct question and answer.


// Q.1  datatypes in javascript
/*
// 1..Number
// 2..String
// 3..Boolean
// 4..Object
// 5..Null
// 6..Symbol
// 7..Undefined
// 8..Bigint  */
// /*
// examples
age=10;ans=12.20 //int and float
first_name="vandan";//string
Boolean=true, false;//boolean
BigInt=1024n;//bigint
Undefined: undefined;//undefined
Null=null;//null
// objects
Array:[1,2,"vandan"];
Object:{name:"vandan",age=21};

// Q.2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
["books","Mouse","bread","Smartwatch","fruits","cloths","pen","mobile cover","leptop screen cover"];

/*Q.3. Create an object of a student registry of 5 students whose key is the registration number and the value is
the student name. Registration number starts from 1 and continues.*/

 {
    1="yash",
    2="rushabh",
    3="parth",
    4="dinesh",
    5="gopal"


 };

/*Q.1 Variables and typeof

1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.*/
let name="my name is vandan raval and currently i am learning fullstack web development from pw skills";
console.log(name);


console.log(typeof name);


let age=15;
console.log(typeof age);


let ans=true;
console.log(typeof ans);


let ans2=10.20;
console.log(typeof ans2);


let NaN=null;
console.log(typeof no6);


let var1=undefined;
console.log(typeof var1);


let var2=Symbol("vandan raval")
console.log(typeof var2);


let var3=[1,2,"vandan"];
console.log(typeof var3);
//output:my name is vandan raval and currently i am learning fullstack web development from pw skills
string
number
boolean
number
undefined
undefined
symbol
object

// Q.2


let fname="vandan";
console.log(fname);//output:vandan
let iAmHappy=true;
console.log(iAmHappy);//TRUE


let 1name="it is error";
// // SyntaxError: Invalid or unexpected token
 let var=13;
console.log(var);
// SyntaxError: Unexpected token 'var'

// OPERATOR  ...
// Q-1 MULTIPLICATION TABLE USING OPERATOR
let num=5;
console.log(num +"*"+1+"=",num*1);
console.log(num +"*"+2+"=",num*2);
console.log(num +"*"+3+"=",num*3);
console.log(num +"*"+4+"=",num*4);
console.log(num +"*"+5+"=",num*5);
console.log(num +"*"+6+"=",num*6);
console.log(num +"*"+7+"=",num*7);
console.log(num +"*"+8+"=",num*8);
console.log(num +"*"+9+"=",num*9);
console.log(num +"*"+10+"=",num*10);


// Output:

5*1= 5
5*2= 10
5*3= 15
5*4= 20
5*5= 25
5*6= 30
5*7= 35
5*8= 40
5*9= 45
5*10= 50

//Q.3 Write a program to find out the perimeter of a rectangle. Print the results to the console.
let w=50;
let h=10;
let ans=2*(w+h);
// console.log("perimeter of rectangle is",ans);
// perimeter of rectangle is 120


// 3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false  condition for each operator must be specified

n1=11;
n2=11;
console.log(n1==n2);//true

n3=11;
n4=12;
console.log(n3==n4);//false

n5=11;
n6=11;
console.log(n5!=n6);//false