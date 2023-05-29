const user={
    username:"vandan",
    email:"vandanraval2002@omail.ai"
}
// console.log(user.username);
const {username,email}=user

const myArray=[
    {
        username:"gopal",
        email:"gopal234@gmail.com"
    },    {
        username:"yash",
        email:"yash5014@gmail.com"
    },    {
        username:"nishtha",
        email:"nishtha535@gmail.com"
    }
    
]
myArray.map((ele)=>{
// console.log(ele.username);
})


let pwcourse={
    coursename:"pw1",
    price:1233,
    getCourseDetails:function(){
        console.log(`course name is ${this.coursename} and course price is ${this.price}`);
    }
}

Object.prototype.vandan=function(){
    console.log(`vandan was here`);
}

Array.prototype.VandanRaval=function(){
    console.log(`Hey Raval`);
}




const anewString="ram";
anewString.vandan();

pwcourse.getCourseDetails();
pwcourse.vandan();

// pwcourse.VandanRaval();  //NO
myArray.VandanRaval();  //YES
// anewString.VandanRaval();


const User1={
    coursename:"vd2",
    price:2300,

}
const User2={
email:"xyz@gmail.com"

}
const User3= {
    isLoggedin: true
}
const User4={
support:"JS Course",
__proto__:User1  //method 1 of accesing user1
}
Object.User4;
console.log(User4__protp__=User1); //method2 of accessing property of user1

// console.log( Object.getPrototypeOf(User4,User1));// method3

