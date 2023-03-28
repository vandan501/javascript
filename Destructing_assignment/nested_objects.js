/*Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below. */

const person={
    name:"vandan",
    age:21,
    address:{
        Street:"G/90/1086,Shivam Apt,New Wadaj,Akhbarnagar",
        City:"Ahmedabad",
        State:"Gujarat",
    },

};

console.log(person.name)
console.log(person.address.Street)