// Animate Hamburger

var hamburberCheckbox = document.getElementById("nav-toggle");
var hamburger = document.querySelector(".hamburger");
var navContainer = document.querySelector(".container-top");
var leftMenu = document.querySelector(".left-menu");
var navTop = document.querySelector(".nav-top");


hamburger.addEventListener("click", hamburgerPressed);

console.log(hamburberCheckbox.checked);

var paddingAmount = "270px"

function hamburgerPressed() {

    if (!hamburberCheckbox.checked) {
        navContainer.style.transition = "0.3s";
        navContainer.style.paddingBottom = paddingAmount;
        navTop.style.border = "0px";

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


        }, 300)



    }
    else {
        // Remove border and place back after animation
        navTop.style.border = "0px";

        hamburberCheckbox.checked = false;
        navContainer.style.transition = "0s";
        navContainer.style.paddingBottom = paddingAmount;

        // After one second, remove extra padding
        setTimeout(function () {

            navContainer.style.transition = "0.3s";

            navContainer.style.paddingBottom = "0px";

            setTimeout(() => {
                navTop.style.borderBottom = "0px solid #f60";

            }, 300);

        }, 1)

    }




}

//animateTitle();

function animateTitle() {

    var i = 0;

    setInterval(() => {
        if (i % 2 == 0) {
            document.title = "o<";

        }
        else {
            document.title = "O<";

        }
        i++;

    }, 100);




}