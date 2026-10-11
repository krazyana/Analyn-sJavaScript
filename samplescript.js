
const buttonname = document.getElementById("changeName");
const studentname = document.getElementById("studentName");

const buttonbackground = document.getElementById("changeBackground");
const profile = document.getElementById("profile");

const buttontoggle = document.getElementById("toggleDetails");
const details = document.getElementById("details");

// Change Student Name
buttonname.addEventListener("click", function () {
    studentname.textContent = "Maria Santos";
});

// Change Background Color
buttonbackground.addEventListener("click", function () {
    if (profile.style.backgroundColor === "rgb(204, 251, 241)") {
        profile.style.backgroundColor = "white";
    } else {
        profile.style.backgroundColor = "#ccfbf1";
    }
});

// Show or Hide Student Details
buttontoggle.addEventListener("click", function () {
    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
        buttontoggle.textContent = "Show Details";
    } else {
        buttontoggle.textContent = "Hide Details";
    }
});
