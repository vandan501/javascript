/**11-04-2023 live lec (hitesh sir) */

function sayHello() {
    console.log("Hello World");
    console.log("vandan")
}
// sayHello()//call function

/****************************************** */

function addTwoNums(num1, num2) {
    let result = num1 + num2;
    console.log("Vandan")
    return result;
}
const result = addTwoNums(4, 4);
// console.log(result)

function subtractTwoNumbers(n1, n2) {

    return n1 - n2;
}

// console.log(subtractTwoNumbers(5,4))

/*********************************************** */
function registerUser(user="gopal") {
    if (!user === undefined) {
        return 'please pass the username'
    }
    return user + 'you have login successfully';
}

// console.log(registerUser("vandan"))

/**************************************** */
//amazon shopping cart
 
function cartBillTotal(...numbers)
{
    //take a variable name total
    let total=0;
    //loop all values  keep adding the total
    for(const num of numbers)
    {
        // total+=num;
        total =total+num;
    }
    //return total
    return total
    
}

const user={
    id:"123",
    name:"vandan",
    email:"vandanraval2002@gmail.com"
}

function addUser(obj)
{
console.log(`A User name ${obj.name} got an email ${obj.email}`);
}

//addUser(user);//A User name vandan got an email vandanraval2002@gmail.com


/***************************************** */

function addTwoNumbers(n1,n2)
{
    return n1+n2;
}


const addTwoNumbmberv2=(num1,num2)=>{
    return num1+num2;
}

const addTwoNumbmberv3=(num1,num2)=>num1+num2;
const addTwoNumbmberv4=num=>5
const addTwoNumbmberv5=num=>({email:"abcd@live"})
const addTwoNumbmberv6=(num1,num2)=>({email:"abcd@live"})
// console.log(addTwoNumbmberv6())



function learning()
{
    console.log(this)
}
const learningTwo=()=>{
    console.log(this)
}

learning()
learningTwo()