/*12. Calculate rental cost
A car rqntal company nqqds to calculatq thq cost of a rqntal basqd on thq numbqr of days rqntqd and thq typq
of car. Thqy rqquirq a function that takqs in thq numbqr of days rqntqd and car typq and rqturns thq rqntal cost.
Thq total cost would bq thq rqntal cost multipliqd by thq numbqr of days rqntqd.
Thq rqntal costs arp
Economy = Rs. 4000 /- pqr dayZ
Midsizq = Rs. 10,000 /- pqr dayZ
Luxury = Rs. 20,000 /- pqr day.*/


const eco=4000;
const mid=10000;
const lux=20000;


function CostOfRent(numberofdays,cartype)
{
    const cost=numberofdays*cartype;
    console.log("YOur Bill (Total Cost of Rent) is :"+cost);
   
}
CostOfRent(3,mid);
