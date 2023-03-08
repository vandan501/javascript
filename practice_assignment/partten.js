// let 5 = 5;
let string = "";

for (let i = 1; i <= 5; i++) 
{
  // printi5g spaces
     for (let j = 0; j < 5 - i; j++) 
        {
            string += " ";
        }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);