/*9. Check for divisibilityP
Writq a pro[ram that takqs an array of numbqrs and prints all thq numbqrs that arq divisiblq by 3, but not by 2.
Usq a for loop and continuq statqmqnt.*/
const numbers = [90];
let count = 0;

for (let i = 0; i < numbers; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
    count++;
  }
}

console.log(count); 
