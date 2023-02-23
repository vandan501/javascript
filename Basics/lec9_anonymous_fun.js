//ex1
let x=function()
      {
        console.log("hello world");
      }
x();

// immediately invoked function
(
    function demo()
    {
        console.log("hiii");
    }
)();

// ex2
(
    function add(a,b)
    {
    console.log("sum=>",a+b);
    }
)(10,30);