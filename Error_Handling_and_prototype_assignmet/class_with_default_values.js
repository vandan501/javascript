/*
Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.*/
class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
    
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  let person1Details=new Person("vandan",21);
   
   console.log(person1Details.getDetails())
  let person2Details=new Person();
   
   console.log(person2Details.getDetails())
   
   /*PS D:\pwskills\lectures\PROJECTS\JS\Error_Handling_and_prototype_assignmet> node "d:\pwskills\lectures\PROJECTS\JS\Error_Handling_and_prototype_assignmet\class_with_default_values.js"
Name: vandan, Age: 21
Name: Unknown, Age: 0
*/