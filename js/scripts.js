console.log("script start");


// WHAT IS THE PROBLEM ???

//   A button work.... modify the HELLO WORLD ????

// 1. Create button ......
// 2. NAME THE BUTTON ... referencing
// 3. ADD THE EVENT LISTENER ..> ACTIONNNNNN

//1. EARLIER WE NAMED THEM (ID, CLASS)

//2. WE ASSIGNED OUR VARIABLES
let paragraph = document.getElementById("my-text");
let button = document.getElementById("my-awesome-button");



button.addEventListener("click", buttonPressed);


function buttonPressed() {
    paragraph.innerHTML = "DESTROY THE WORLD!";
}



