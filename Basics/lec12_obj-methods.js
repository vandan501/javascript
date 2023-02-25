let obj={
    id:101,
    name:"vandan",
    age:21
};
let keys=Object.keys(obj);
console.log(keys);//[ 'id', 'name', 'age' ]

let values=Object.values(obj);
console.log(values);//[ 101, 'vandan', 21 ]

let enteries=Object.entries(obj);
console.log(obj);//[ [ 'id', 101 ], [ 'name', 'vandan' ], [ 'age', 21 ] ] 

Object.freeze(obj);// we can not add and delete and update 
Object.seal(obj);//we can do (only update )
obj.id=200;
obj.name="gopal";

// console.log(obj);

let objcopy=Object.assign({gender:"male"},obj);
console.log(objcopy);
// { id: 101, name: 'vandan', age: 21 }
// { gender: 'male', id: 101, name: 'vandan', age: 21 }