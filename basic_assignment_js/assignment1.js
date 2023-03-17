// // // // vandanraval2002@gmail.com
// // // // Let see the direct question and answer.


// // // // // Q.1  datatypes in javascript
// // // // /*
// // // // 1..Number
// // // // 2..String
// // // // 3..Boolean
// // // // 4..Object
// // // // 5..Null
// // // // 6..Symbol
// // // // 7..Undefined
// // // // 8..Bigint  */
// // // // /*
// // // // examples
// // // // age=10;ans=12.20 //int and float
// // // // first_name="vandan";//string
// // // // Boolean=true, false;//boolean
// // // // BigInt=1024n;//bigint
// // // // Undefined: undefined;//undefined
// // // // Null=null;//null
// // // // // objects
// // // // Array:[1,2,"vandan"];
// // // // Object:{name:"vandan",age=21};




// // // // // Q.2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
// // // // ["books","Mouse","bread","Smartwatch","fruits","cloths","pen","mobile cover","leptop screen cover"];


// // // /*Q.3. Create an object of a student registry of 5 students whose key is the registration number and the value is
// // // the student name. Registration number starts from 1 and continues.*/

// // // //  {
// // // //     1="yash",
// // // //     2="rushabh",
// // // //     3="parth",
// // // //     4="dinesh",
// // // //     5="gopal"


// // // //  };

// // // /*Q.1 Variables and typeof

// // // 1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.*/
// // // let name="my name is vandan raval and currently i am learning fullstack web development from pw skills";
// // // console.log(name);


// // // console.log(typeof name);


// // // let age=15;
// // // console.log(typeof age);


// // // let ans=true;
// // // console.log(typeof ans);


// // // let ans2=10.20;
// // // console.log(typeof ans2);


// // // let NaN=null;
// // // console.log(typeof no6);


// // // let var1=undefined;
// // // console.log(typeof var1);


// // // let var2=Symbol("vandan raval")
// // // console.log(typeof var2);


// // // let var3=[1,2,"vandan"];
// // // console.log(typeof var3);


// // // // Q.2


// // // // let fname="vandan";
// // // // console.log(fname);//output:vandan
// // // // let iAmHappy=true;
// // // // console.log(iAmHappy);//TRUE


// // // // let 1name="it is error";
// // // // // SyntaxError: Invalid or unexpected token
// // // // let var=13;
// // // // console.log(var);
// // // // // SyntaxError: Unexpected token 'var'


// // // // OPERATOR  ...
// // // // Q-1 MULTIPLICATION TABLE USING OPERATOR
// // // let num=5;
// // // console.log(num +"*"+1+"=",num*1);
// // // console.log(num +"*"+2+"=",num*2);
// // // console.log(num +"*"+3+"=",num*3);
// // // console.log(num +"*"+4+"=",num*4);
// // // console.log(num +"*"+5+"=",num*5);
// // // console.log(num +"*"+6+"=",num*6);
// // // console.log(num +"*"+7+"=",num*7);
// // // console.log(num +"*"+8+"=",num*8);
// // // console.log(num +"*"+9+"=",num*9);
// // // console.log(num +"*"+10+"=",num*10);


// // // // Output:
// // // // PS D:\pwskills\practicals\JavaScript\Basics> node "d:\pwskills\practicals\JavaScript\Basics\assignment1.js"
// // // // 5*1= 5
// // // // 5*2= 10
// // // // 5*3= 15
// // // // 5*4= 20
// // // // 5*5= 25
// // // // 5*6= 30
// // // // 5*7= 35
// // // // 5*8= 40
// // // // 5*9= 45
// // // // 5*10= 50
// // // // PS D:\pwskills\practicals\JavaScript\Basics>


// // // // Q.2 Write a program to perform the arithmetic operation.
// // // let a=10;
// // // let b=5;
// // // let add=a+b;
// // // console.log("Addition of"+a+" and "+ b+ " is=",add);
// // // let sub=a-b;
// // // console.log("Subtraction of"+a+" and "+ b+ " is=",sub);
// // // let mul=a*b;
// // // console.log("Multiplication of"+a+" and "+ b+ " is=",mul);
// // // let div=a/b;
// // // console.log("Division of"+a+" and "+ b+ " is= ",div);
// // // let mod=a%b;
// // // console.log("Modulo of"+a+" and "+ b+ " is= ",mod);


// // // //Q.3 Write a program to find out the perimeter of a rectangle. Print the results to the console.
// // // // let w=50;
// // // // let h=10;
// // // // let ans=2*(w+h);
// // // // console.log("perimeter of rectangle is",ans);
// // // // perimeter of rectangle is 120
// // // // PS D:\pwskills\practicals\JavaScript\Basics>


// // // 3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false  condition for each operator must be specified

// // n1=11;
// // n2=11;
// // console.log(n1==n2);//true

// // n3=11;
// // n4=12;
// // console.log(n3==n4);//false

// // n5=11;
// // n6=11;
// // console.log(n5!=n6);//false

// // n7=11;
// // n8=12;
// // console.log(n7!=n8);//true

// // n9=11;
// // n10=11;
// // console.log(n9>=n10);//true

// // n9=11;
// // n10=11;
// // console.log(n9>n10);//false

// // n9=13;
// // n10=11;
// // console.log(n9>n10);//true

// // n5=11;
// // n6=11;
// // console.log(n5<n6);//false

// // n5=5;
// // n6=11;
// // console.log(n5>n6);//false

// // n5=11;
// // n6=11;
// // console.log(n5>=n6);//true

// // n15=11;
// // n16=11;
// // console.log(n15==n16);//true

// // n15=11;
// // n16="11";
// // console.log(n15==n16);//true

// // n15=11;
// // n16="10";
// // console.log(n15==n16);//false


// // n15=11;
// // n16="11";
// // console.log(n15===n16,".....");//false

// // n15=11;
// // n16=11;
// // console.log(n15===n16,".....");//true


// // n5=11;
// // n6=11;
// // console.log(n5>=n6);

// // n5=11;
// // n6=11;
// // console.log(n5>=n6);


// // n5=11;
// // n6=11;
// // console.log(n5>=n6);

// // const signal="green";
// // if(signal=="orrange")
// // {
// //     console.log("drive slow");
// // }else if(signal=="red")
// // {
// //     console.log("please stop");

// // }else if(signal=="green")
// // {
// //     console.log("you can go");
// // }else{
// //     console.log("drive carefully");
// // }

// // let num1=26;
// // let num2=2;
// // const ans=(num1<num2?num1+" is less than "+num2:num1 +" is greater than "+num2);
// // console.log(ans);

// /*3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible  by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5*/
// // let num=31;
// // if(num%3==0 && num%5==0)
// // {
// //     console.log("FizzBUzz");
// // }else if(num%5==0){
// //     console.log("Buzz");
// // }
// // else if(num%3==0){
// //     console.log("Fizz");
// // }
// // else{
// //     console.log("Try again");
// // }

// // const day = "Saturday";
// // switch (day) {
// //     case "Monday":
// //         console.log("4 Days to go for weekend");
// //         break;
// //     case "Tuesday":
// //         console.log("3 Days to go for weekend");
// //         break;
// //     case "Wednesday":
// //         console.log("2 Days to go for weekend");
// //         break;
// //     case "Thursday":
// //         console.log("1 Day to go for weekend");
// //         break;
// //     case "Friday":
// //         console.log("0 day to for weekend");
// //         break;
// //     case "Saturday":
// //         case "Sunday":

// //         console.log("Finally  Weekend comes");
// //         break;
// //     default: console.log("Invalid Day");
// // }
// month_num = 11;
// switch (month_num) {
//     case 1: console.log("January");
//         break;
//     case 2: console.log("Febuary");
//         break;
//     case 3: console.log("March");
//         break;
//     case 4: console.log("April");
//         break;
//     case 5: console.log("May");
//         break;
//     case 6: console.log("June");
//         break;
//     case 7: console.log("July");
//         break;
//     case 8: console.log("August");
//         break;
//     case 9: console.log("September");
//         break;
//     case 10: console.log("October");
//         break;
//     case 11: console.log("November");
//         break;
//     case 12: console.log("December");
//         break;

//     default: console.log("please check the number again");
// }
// //ternary conditions
// // number1=0;
// // ans=number1==0?"number is equals to 0":number1<0?"Number is negative":"number is positive";
// // // condition= condition1?true:false in false condition2?true or false;
// // console.log(ans);

//loops

// num=10;
// for(let i=0;i<=num;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
var x = 5;
var y = 5;
console.log(x + y);

