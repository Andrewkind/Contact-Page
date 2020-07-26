// Animate Hamburger

const hamburberCheckbox = document.getElementById("nav-toggle");
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".container-nav");
const leftMenu = document.querySelector(".left-menu");
const navTop = document.querySelector(".nav");


hamburger.addEventListener("click", HamburgerPressed);


// Manually adjust padding to animate menu 
let paddingAmount = "390px"

// If we have little height to play with, shrink the padding amount
if (window.innerHeight <= 550) {
    paddingAmount = "258px"

}

function HamburgerPressed() {

    if (!hamburberCheckbox.checked) {
        navContainer.style.transition = "0.5s";
        navContainer.style.paddingBottom = paddingAmount;
        navTop.style.border = "0px";

        //rotate hamburger icon
        hamburger.style.transform = "rotate(90deg)";

        // After one second, remove extra padding
        setTimeout(function () {
            hamburberCheckbox.checked = true;
            navContainer.style.transition = "0s";
            navContainer.style.paddingBottom = "0px";
            leftMenu.style.opacity = "0%";
            navTop.style.borderBottom = "0px solid #f60"

            // try here
            setTimeout(function () {
                leftMenu.style.transition = "0.175s";

                leftMenu.style.opacity = "100%";
            }, 100)
        }, 500)
    }
    else {
        // Remove border and place back after animation
        navTop.style.border = "0px";

        hamburberCheckbox.checked = false;
        navContainer.style.transition = "0s";
        navContainer.style.paddingBottom = paddingAmount;

        //rotate icon back
        hamburger.style.transform = "rotate(0deg)";


        // After one second, remove extra padding
        setTimeout(function () {

            navContainer.style.transition = "0.5s";

            navContainer.style.paddingBottom = "0px";

            setTimeout(() => {
                navTop.style.borderBottom = "0px solid #f60";

            }, 500);

        }, 1)
    }
}
