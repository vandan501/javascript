
// getting the html elements
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const lbl = document.getElementById("lbl");
const reset = document.getElementById("reset");


// decrement button
sub.addEventListener("click", () => {
    const value = Number(lbl.innerText);
    if (value > 0) {
        lbl.innerText = value - 1;
    }
    else {
        alert("Negative value not allowed");
    }
});


// increment button
add.addEventListener("click", () => {
    const value = Number(lbl.innerText);
    if (value >= 10) {
        alert("10+ values are not allowed");
    } else {
        lbl.innerText = value + 1;
    }
});


//reset button 
reset.addEventListener("click", () => {
    lbl.innerText = 0;
});