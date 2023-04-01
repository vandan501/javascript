/*Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.*/
// let obj={name:"vandan",age:21};
function getPerson(person) 
{
    try{
        if(typeof person !== "object"|| !person.hasOwnProperty("name")|| !person.hasOwnProperty("age"))
        {
            throw new Error("Invalid parameter type")
        }
        return `Name is :${person.name} and Age is ${person.age}`;
    }catch(err){
        return err.message;
    }
}

console.log(getPerson({name:"vandan",age:21})); // Output: Name: vandan, Age: 21
console.log(getPerson({name:"vandan"})); // Output: Invalid parameter type
console.log(getPerson(["name","mithun"])); // Output: Invalid parameter type
