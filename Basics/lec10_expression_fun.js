(
    function demo()
    {
        console.log("named function expression");
    }
)();

// ex2
(
    function add(a,b)
    {
    console.log("sum=>",a+b);
    console.log("this is anonymous function expression");
    }
)(10,30);

let x=function()
      {
        console.log("hello world");
        console.log("this is anonymous function expression");

      }
x();
