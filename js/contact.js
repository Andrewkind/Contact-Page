
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

    // Check Name Validity
    if (isEmpty(name)) {
        // name is empty
        validData = false;
        nameAlert.text = "test";
        nameAlert.style.display = "block";
    }
    if (!isClean(name)) {
        validData = false;
        nameAlert.style.display = "block";
    }


    // Check Email Validity
    if (isEmpty(email)) {
        // name is empty
        validData = false;
        emailAlert.style.display = "block";
    }
    if (isEmailAddress(email)) {
        // email is not a valid email address
        validData = false;
        emailAlert.style.display = "block";
    }
    if (!isClean(email)) {
        validData = false;
        emailAlert.style.display = "block";
    }

    // Check Body Validity
    if (isEmpty(message)) {
        // name is empty
        validData = false;
        messageAlert.style.display = "block";
    }
    if (!isClean(message)) {
        validData = false;
        messageAlert.style.display = "block";
    }

  

    if (!validData) {
        event.preventDefault();
    }


}

function isEmailAddress(text) {

    return true;
}

function isEmpty(text) {

    return (text == "" || text == " " || text == null || text == undefined);


}

function isClean(text) {

    return true;
}
