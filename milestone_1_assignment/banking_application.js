/*A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.*/
const customerdetails=[
{
   customer_name:"vandan raval",
   customer_balance:15000 
},
{
    customer_name:"nishtha joshi",
    customer_balance:12000 
 }
];

const customer_account_details=()=>{
console.log("Customer Name:",customerdetails[0]['customer_name']);
console.log("Previous  Balance status:",customerdetails[0]['customer_balance']);
}
customer_account_details();

function withdrawal(amount)
{
   
    customerdetails[0]['customer_balance']=customerdetails[0]['customer_balance']-amount;
    console.log(amount , " RS is subtracted and your balance is now::",customerdetails[0]['customer_balance']); 
}
withdrawal(1000);
function credit(amount)
{
    customerdetails[0]['customer_balance']=customerdetails[0]['customer_balance']+amount;
    console.log(amount , " RS is Added and your balance is now::",customerdetails[0]['customer_balance']);

 
}
 
credit(20000);


