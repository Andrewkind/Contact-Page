// tabs in html
// source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs

function OpenTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


let workTab = document.querySelector(".work-tab");
let educationTab = document.querySelector(".education-tab");
let otherTab = document.querySelector(".other-tab");

workTab.addEventListener("click", function () {
    OpenTab(event, 'Work')
});

educationTab.addEventListener("click", function () {
    OpenTab(event, 'Education')
});

otherTab.addEventListener("click", function () {
    OpenTab(event, 'Other')
});