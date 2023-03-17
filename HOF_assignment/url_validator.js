/*Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.*/


const Url="htps://learn.pwskills.com";

const regExpOne = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[a-zA-Z]{2,})+$/;

if(regExpOne.test(Url))
{
console.log("Valid URL");
}
else{
console.log("Invalid URL");
}

// const result1=Url.match(regExpOne);
// console.log(result1);


