/*
7} Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. ;owever, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order.Assignment Questions To solvq this problqm, thq application nqqds to rqmovq duplicatq itqms from thq customqr's cart. Thq program should takq thq customqr's cart with duplicatqs as input, and rqturn a nqw cart without duplicatqs.
Writq a program to solvq thq problqm of duplicatq itqms in thq cart by rqmovin[ duplicatqs.*/

const cart=["bag","phone","phone","macbook","macbook"];
const finalcart=[];
     
for(let i=0;i<cart.length;i++)
{  
    if(finalcart.indexOf(cart[i])===-1)
    {
        finalcart.push(cart[i])
    }
    
}
console.log("Your Final Cart is:",finalcart);