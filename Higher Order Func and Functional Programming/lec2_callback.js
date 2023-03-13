let arr=[2,3,4];

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})

arr.forEach((element,index,arr)=>{
    console.log("arrow: "+index,element,arr);

})

const heros=["Vandanlaal","Yashlaal","Parth","Rushabhlaal"];
heros.forEach((el)=>{
    console.log(el.toUpperCase());
}
)

heros.map((element,index,heros)=>{
console.log(index,element,heros);
})

heros.map((h)=>{

console.log(h.toUpperCase());})

//filter
console.log(heros);
const herosWithRaj = heros.filter((h)=>{
   return h.includes("laal")
})
console.log(herosWithRaj);

//shopping cart
let sum= 0;
const cartBill=[20,30,50];
// const sumOfCartBill=cartBill.forEach((e)=>{
    
   
//    console.log(sum+=e);
      
// })   
const sumOfCartBill=cartBill.reduce((prev,curr)=>prev+curr,0);
console.log(sumOfCartBill);


const gameScore=[200,300,310,250,150];
console.log(typeof gameScore[2]);
// check if all values are number
const gameScoreCheck=gameScore.every((v)=>typeof v==='number')
console.log("Check:",gameScoreCheck);

// find score above 200
// const above200=gameScore.forEach((e)=>{
//     if(e>200)
//     {
//         console.log(e);
//     }
   
// })
const above200=gameScore.sort((e)=>
console.log(above200.sort)
);
