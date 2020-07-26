
console.log("astart");

var sendEmailButton = document.querySelector(".send-email-button");
sendEmailButton.addEventListener("click", buttonClick);

function buttonClick(event) {

    /*
    var alerts = document.getElementsByClassName('alert');
    console.log(alerts);
    for (var i = 0, l = alerts.length; i < l; i++) {
        alerts[i].style.display = "block";
    }
*/
    // Validate Data

    var form = document.getElementById("form");
    let nameAlert = document.querySelector(".alert-name");
    let emailAlert = document.querySelector(".alert-email");
    let messageAlert = document.querySelector(".alert-message");
    let messageAlertText = document.querySelector(".alert-message-text");
    let nameAlertText = document.querySelector(".alert-name-text");
    let emailAlertText = document.querySelector(".alert-email-text");


    // Variable to hold our form data's validity. Sets to false if we find any errors.
    let validData = true;

    console.log(form);

    var formData = new FormData(form);
    console.log(form);

    var name = formData.get("name").trim();
    console.log(name);

    var email = formData.get("email").trim();
    console.log(email);

    var message = formData.get("message").trim();
    console.log(message);


    // Clear all errors
    var alerts = document.getElementsByClassName('alert');
    console.log(alerts);
    for (var i = 0, l = alerts.length; i < l; i++) {
        alerts[i].classList.add("hide");
    }



    // Check Name Validity
    if (isEmpty(name)) {
        // name is empty
        validData = false;
        nameAlertText.innerHTML = "Please fill in the box";
        nameAlert.classList.remove("hide");
    }


    if (!isClean(name)) {
        validData = false;
        nameAlertText.innerHTML = "Vulgar!";
        nameAlert.classList.remove("hide");
    }


    // Check Email Validity
    if (isEmpty(email)) {
        // name is empty
        validData = false;
        emailAlertText.innerHTML = "Please fill in the box";
        emailAlert.classList.remove("hide");
    }
    if (!validateEmail(email)) {
        // email is not a valid email address
        validData = false;
        emailAlertText.innerHTML = "Invalid email address!";

        emailAlert.classList.remove("hide");
    }
    if (!isClean(email)) {
        validData = false;
        emailAlertText.innerHTML = "Vulgar!";
        emailAlert.classList.remove("hide");
    }

    // Check Body Validity
    if (isEmpty(message)) {
        // name is empty
        validData = false;
        messageAlertText.innerHTML = "Please fill in the box";

        messageAlert.classList.remove("hide");
    }
    if (!isClean(message)) {
        validData = false;
        messageAlertText.innerHTML = "Vulgar!";
        messageAlert.classList.remove("hide");
    }



    if (!validData) {

        //Notify user of email success

        // do button stuff
        event.preventDefault();

    }


}


// Validate an email 
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// This is out of requirements but nice to have. Regular expression to validate email address
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isEmpty(text) {

    return (text == "" || text == " " || text == null || text == undefined);


}

function isClean(text) {

    let word = text.toLowerCase();

    let swearWords = ["feldercarb",
        "frack",
        "skinjob",
        "vulgacarb"];

    for (var i = 0; i < swearWords.length; i++) {

        //contains substring
        //source: https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
        if (word.includes(swearWords[i])) {
            console.log("not clean");
            return false;
        }
    }
    console.log("clean");

    return true;
}
