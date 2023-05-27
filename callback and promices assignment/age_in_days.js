const person={
    firstname:"vandan",
    lastname:"raval",
    age:21
};
 
function ageInDays(personObject,callback)
{
    const fullname=`${personObject.firstname} ${personObject.lastname}`;
    const ageindays=personObject.age*365;
    callback(fullname,ageindays);
}

function logResult(fullname,ageindays)
{
    console.log(`the person's fullname is ${fullname} and their age in days is ${ageindays}.`);
}

ageInDays(person,logResult);