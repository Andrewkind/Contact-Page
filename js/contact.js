let sendsubjectButton = document.querySelector(".send-email-button");
sendsubjectButton.addEventListener("click", ButtonClick);

function ButtonClick(event) {

    // Validate Data

    const form = document.getElementById("form");
    const emailAlert = document.querySelector(".alert-email");
    const subjectAlert = document.querySelector(".alert-subject");
    const bodyAlert = document.querySelector(".alert-body");
    const bodyAlertText = document.querySelector(".alert-body-text");
    const emailAlertText = document.querySelector(".alert-email-text");
    const subjectAlertText = document.querySelector(".alert-subject-text");


    // Variable to hold our form data's validity. Sets to false if we find any errors.
    let validData = true;

    const formData = new FormData(form);

    const email = formData.get("email").trim();

    const subject = formData.get("subject").trim();

    const body = formData.get("body").trim();


    // Clear all errors
    let alerts = document.getElementsByClassName('alert');
    for (var i = 0, l = alerts.length; i < l; i++) {
        alerts[i].classList.add("hide");
    }

    // Check email Validity
    if (IsEmpty(email)) {
        // email is empty
        validData = false;
        emailAlertText.innerHTML = "Please fill in the Name box.";
        emailAlert.classList.remove("hide");
    }

    if (!IsClean(email)) {
        validData = false;
        emailAlertText.innerHTML = "Vulgar language detected.";
        emailAlert.classList.remove("hide");
    }

    // Check subject Validity
    if (IsEmpty(subject)) {
        // email is empty
        validData = false;
        subjectAlertText.innerHTML = "Please fill in the Subject box.";
        subjectAlert.classList.remove("hide");
    }
    if (!IsClean(subject)) {
        validData = false;
        subjectAlertText.innerHTML = "Vulgar language detected.";
        subjectAlert.classList.remove("hide");
    }

    // Check Body Validity
    if (IsEmpty(body)) {
        // email is empty
        validData = false;
        bodyAlertText.innerHTML = "Please fill in the Message box.";

        bodyAlert.classList.remove("hide");
    }
    if (!IsClean(body)) {
        validData = false;
        bodyAlertText.innerHTML = "Vulgar language detected.";
        bodyAlert.classList.remove("hide");
    }

    if (!validData) {
        event.preventDefault();
    }
}

function IsEmpty(text) {
    return (text == "" || text == " " || text == null || text == undefined);
}

function IsClean(text) {
    let word = text.toLowerCase();

    let swearWords = ["feldercarb",
        "frack",
        "skinjob",
        "vulgacarb"];

    for (var i = 0; i < swearWords.length; i++) {

        //contains substring
        //source: https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
        if (word.includes(swearWords[i])) {
            return false;
        }
    }

    return true;
}
