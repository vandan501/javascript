/*Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.*/
class Calculator{
    static add(x,y)
    {
        let sum=x+y;
        console.log(`The sum of two number is: ${sum}`)
    }
}
let ans=new Calculator();
Calculator.add(15,5);