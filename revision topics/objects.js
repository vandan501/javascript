const obj1={
    name:"Yash",
    role:"Student",
    isLogin:true,

    registerUser:function()
    {
        console.log(`${this.name} is a registered`);
    }
}

const obj2={
    10:"number10",
    20:"number20"
}

const key1=Symbol("key1")
const key2=Symbol("key2")

const obj3={
    [key1]:"Vandan",
    [key2]:"Raval",
}
console.log(obj3[key1])
console.log(obj3)

//here obj4 and 5 both are same
const obj4=new Object();
obj4.email="hitesh@123.gmail.com";
console.log(obj4.email)


const obj5={
uname:"Shreya",
uemail:"shreya123@google.com",
isLoggedIn:true

}

// Object.freeze(obj5);


//object 5 manipulation
obj5.uemail="shreya@google.com";
obj5=["isLoggedIn"]=false;
console.log(obj5)
console.log(Object.keys(obj5))
console.log(Object.values(obj5))
console.log(obj5)
