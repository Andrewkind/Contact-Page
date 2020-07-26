// Animate Hamburger

var hamburberCheckbox = document.getElementById("nav-toggle");
var hamburger = document.querySelector(".hamburger");
var navContainer = document.querySelector(".container-nav");
var leftMenu = document.querySelector(".left-menu");
var navTop = document.querySelector(".nav");


hamburger.addEventListener("click", hamburgerPressed);

console.log(hamburberCheckbox.checked);

var paddingAmount = "410px"

function hamburgerPressed() {

    if (!hamburberCheckbox.checked) {
        navContainer.style.transition = "0.5s";
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


        }, 500)



    }
    else {
        // Remove border and place back after animation
        navTop.style.border = "0px";

        hamburberCheckbox.checked = false;
        navContainer.style.transition = "0s";
        navContainer.style.paddingBottom = paddingAmount;

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


var sendEmailButton = document.querySelector(".send-email-button");
sendEmailButton.addEventListener("click", buttonClick);

function buttonClick(event) {
    
    var alerts = document.getElementsByClassName('alert');
    console.log(alerts);
    for(var i=0, l=alerts.length; i<l; i++){
        alerts[i].style.display = "block";
       }

       // Validate Data

       var form = document.getElementById("form")
       console.log(form);

       var formData = new FormData(form);
       console.log(form);

       var name = formData.get("name");
       console.log(name);
       
       var email = formData.get("email");
       console.log(email);

       var message = formData.get("message");
       console.log(message);

       if (isValid(message) && isValid(email) && isValid(name)) {
           console.log("good to go");

           form.submit();
           // Run form action via js

       }
       else {
        event.preventDefault();

       }
}



function isValid(text) {

    return false;
}