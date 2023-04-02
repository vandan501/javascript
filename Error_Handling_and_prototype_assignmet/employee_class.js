/*Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.*/
class Employee{

    constructor(name,salary,position)
    {
        this.name=name;
        this.position=position;
        this.salary=salary;
    
    }
    getSalary()
    {
        console.log(`The Salary of ${this.name} is ${this.salary}.he is a ${this.position} in Company`)
    }
}
let emp=new Employee("Vandan",80000,"FullStack Developer")
emp.getSalary();
