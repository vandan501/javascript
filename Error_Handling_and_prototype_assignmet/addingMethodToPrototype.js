/*Adding a Method to a Prototype.
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method.*/
// create a Student prototype
const Student = function(name) {
    this.name = name;
  }
  
  // add a printDetails method to the prototype
  Student.prototype.printDetails = function()
   {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  // create a Student object and call printDetails method
  const Vandan = new Student('Vandan raval');
  Vandan.printDetails(); // logs "Hello, my name is Mithun" to the console
  