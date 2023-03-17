const listOfProducts = [
    {
      productName: "Product A",
      productPrice: 110,
      productQuantity: 5
    },
    {
      productName: "Product B",
      productPrice: 300,
      productQuantity: 2
    },
    {
      productName: "Product C",
      productPrice: 200,
      productQuantity: 1
    },
    {
      productName: "Product D",
      productPrice: 600,
      productQuantity: 10
    }
  ];
  let finalprice=0;

const finalorderprice=(listOfProducts) =>{
  for(let cost=0;cost<listOfProducts;cost++)
  {
   finalprice=productPrice*productQuantity;
}
console.log("your total amount is:",finalprice);
};

finalorderprice();