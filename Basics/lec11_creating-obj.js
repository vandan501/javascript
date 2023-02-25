//creating objects and manipulating values in objects


let obj={fname:"vandan",lname:"raval",age:21};
let emp=new Object();
emp.id=101;
emp.fullname="vandan raval";

console.log(emp);// { id: 101, fullname: 'vandan raval' }
console.log(obj);// { fname: 'vandan', lname: 'raval', age: 21 }

function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;

}
const e=new Emp(101,"ram",32000);
 console.log(e);//Emp { id: 101, name: 'ram', salary: 32000 }   


// for fetch data

console.log(obj["fname"]);
console.log(obj.lname);

// assign new value
obj.salary=13000;
console.log(obj);//{ fname: 'vandan', lname: 'raval', age: 21, salary: 13000 }

emp.fullname="jai shree ram";




console.log(emp);//{ id: 101, fullname: 'jai shree ram' }
delete obj.lname;
console.log(obj);//{ fname: 'vandan', age: 21, salary: 13000 }
