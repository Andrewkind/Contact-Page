
console.log("astart");

var sendsubjectButton = document.querySelector(".send-email-button");
sendsubjectButton.addEventListener("click", buttonClick);

function buttonClick(event) {

    /*
    var alerts = document.getElementsByClassemail('alert');
    console.log(alerts);
    for (var i = 0, l = alerts.length; i < l; i++) {
        alerts[i].style.display = "block";
    }
*/
    // Validate Data

    var form = document.getElementById("form");
    let emailAlert = document.querySelector(".alert-email");
    let subjectAlert = document.querySelector(".alert-subject");
    let bodyAlert = document.querySelector(".alert-body");
    let bodyAlertText = document.querySelector(".alert-body-text");
    let emailAlertText = document.querySelector(".alert-email-text");
    let subjectAlertText = document.querySelector(".alert-subject-text");


    // Variable to hold our form data's validity. Sets to false if we find any errors.
    let validData = true;

    console.log(form);

    var formData = new FormData(form);
    console.log(form);

    var email = formData.get("email").trim();
    console.log(email);

    var subject = formData.get("subject").trim();
    console.log(subject);

    var body = formData.get("body").trim();
    console.log(body);


    // Clear all errors
    var alerts = document.getElementsByClassName('alert');
    console.log(alerts);
    for (var i = 0, l = alerts.length; i < l; i++) {
        alerts[i].classList.add("hide");
    }



    // Check email Validity
    if (isEmpty(email)) {
        // email is empty
        validData = false;
        emailAlertText.innerHTML = "Please fill in the Email box.";
        emailAlert.classList.remove("hide");
    }


    if (!isClean(email)) {
        validData = false;
        emailAlertText.innerHTML = "Vulgar language detected.";
        emailAlert.classList.remove("hide");
    }


    // Check subject Validity
    if (isEmpty(subject)) {
        // email is empty
        validData = false;
        subjectAlertText.innerHTML = "Please fill in the Subject box.";
        subjectAlert.classList.remove("hide");
    }
    if (!isClean(subject)) {
        validData = false;
        subjectAlertText.innerHTML = "Vulgar language detected.";
        subjectAlert.classList.remove("hide");
    }

    // Check Body Validity
    if (isEmpty(body)) {
        // email is empty
        validData = false;
        bodyAlertText.innerHTML = "Please fill in the Message box.";

        bodyAlert.classList.remove("hide");
    }
    if (!isClean(body)) {
        validData = false;
        bodyAlertText.innerHTML = "Vulgar language detected.";
        bodyAlert.classList.remove("hide");
    }



    if (!validData) {

        //Notify user of subject success

        // do button stuff
        event.preventDefault();

    }


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
