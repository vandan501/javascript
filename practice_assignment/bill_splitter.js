
const dishes={
    "khichadi":300,
    "pavbhaji":400,
    "dosa":300
};
let sumofdishes=0;

function billSplitter(dishes,numberOfPersons)
{   
    for(let dish in dishes)
    {
        sumofdishes=sumofdishes+dishes[dish];
    }
    // console.log(sumofdishes);     
    const totalBill=sumofdishes/numberOfPersons;
    console.log("total rs of bill is :"+sumofdishes+" and there are "+numberOfPersons+" number of person so 1 person have to pay : "+totalBill);
}

billSplitter(dishes,3);
