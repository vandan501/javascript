/*Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.*/

class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
    
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
  }
  
  let car = new Car("Honda", "Jazz", 2021);//This is a 2021 Honda Jazz.
  // Car { company: 'Honda', model: 'Jazz', year: 2021 }
  console.log(car.getDescription()); // Output: This is a 2021 Honda Jazz.
  console.log(car); // Output: Car { company: 'Honda', model: 'Jazz', year: 2021 }
  