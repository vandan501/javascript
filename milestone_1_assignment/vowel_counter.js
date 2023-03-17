// 6} Vowel Counter
/*We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted.*/
let name = "elephent vandam";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < name.length; i++) 
{
  let char = name.charAt(i);
  if (vowels.includes(char)) 
  {
    count++;
  }
}

console.log("number of vowels in "+name+"  is :"+count);