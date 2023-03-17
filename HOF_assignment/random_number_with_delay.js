/*2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.*/


const delay=3;//declared seconds of delay
let countdown=delay;//assign the delay value to the countdown
//here i made variable and gave one setInterval function with arrow function and 1000 sec of duration
const countdownInterval=setInterval(()=>{
    console.log(`wait for ${countdown} seconds..`);
    countdown--;//decrement of countdown from 3-2-1
    if(countdown===0)//its check if 0 then clear the interval and print below the msg
    {
        clearInterval(countdownInterval)
        const random_number=Math.floor(Math.random()*100)+1;
        console.log(`your random generated number is: ${random_number} `);
    }
},1000)