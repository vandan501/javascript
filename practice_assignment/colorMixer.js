//  3} Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria:
// | If color1 is "red" and color2 is "blue" or vice versa, print "purple"J
// | If color1 is "red" and color2 is "yellow" or vice versa, print "orange"J
// | If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"J
// | If any other combination of colors is input, the program should print "Invalid color combination" -->
let color1 = "red";
let color2 = "yellow";
choice=color1 && color2;
switch (choice) {
    case "red" && "blue":
        console.log("purple");
        break;
    
    
    case "red" && "yellow":
        console.log("orrange");
    
        break;
    case  "blue" && "yellow":
        console.log("Green");
    
        break;

    default: console.log("Invalid color combination");

}
