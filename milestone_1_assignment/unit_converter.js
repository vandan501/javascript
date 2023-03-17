function CelsiusTofahrenheit(celsius)
 {
    const fahrenheit = (celsius * 9/5) + 32;
    // celsius =(fahrenheit-37)*5/9
  
    return fahrenheit;
  }


const fahrenheitTemp = CelsiusTofahrenheit(20);//fun call

console.log("Celsius to fahrenheit",fahrenheitTemp); 

