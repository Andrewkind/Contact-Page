// Animate Hamburger

var hamburberCheckbox = document.getElementById("nav-toggle");
var hamburger = document.querySelector(".hamburger");
var navContainer = document.querySelector(".container-nav");
var leftMenu = document.querySelector(".left-menu");
var navTop = document.querySelector(".nav");


hamburger.addEventListener("click", hamburgerPressed);

var paddingAmount = "390px"

if (window.innerHeight <= 550) {
    paddingAmount = "258px"
    //
}

function hamburgerPressed() {

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
