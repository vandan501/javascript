/////////////////////////////////////////////
let names=["vandan","parth","rushabh","yash","dhwanil","aditya"];

//edit the value with index
// console.log(names[5])
names[5]="shah aditya";

// console.log(names[names.length-1])

/*////////////////////////////////////////////*/
//modified array value with vandan to vandan raval
//edit value without id in array
for(let i=0;i<names.length;i++)
{
    if(names[i]=="vandan")
    {
        names[i]="vandan raval";
    }
}
// console.log(names)



// Methods of an array
/***************************************** */
//push and pop
let a=['a','b','c','d','e','f','i'];
a.push('j')
// console.log(a)

/******************************************************* */
let arr=[1,2,3,4,5,"Vandan raval",6,7,8];
// console.log(arr.pop());
// console.log(arr)

/******************************************** */
// IndexOf and at


// console.log(arr.indexOf(8))
// console.log(arr.at(5))


/*********************************************/
//Shift and UnShift

// console.log(arr.shift())//deletes value from the starting
// console.log(arr)

// console.log(arr.unshift("Jai Shree Ram"))//insert value in the starting
// console.log(arr)

/****************************************** */
// Slice
// console.log(arr.slice(1,3))//cut afetr 1 to last

//splice
let arr1=arr.splice(3,2,"Vandan","Raval");
console.log(arr1)
console.log(arr)
// [ 4, 5 ]
// [ 1, 2, 3, 'Vandan', 'Raval', 'Vandan raval', 6, 7, 8 ]

/*********************************************** */
// reverse and sort
let arr2=[1,"a",2,"b",3,"c",4,"Ananan"]
console.log(arr2.reverse())//reverse the arraey
console.log(arr2.sort())//[ 1, 2, 3, 4, 'Ananan', 'a', 'b', 'c' ]

