/* =========================================
   ICT251 ACTIVITY 3
   PORTFOLIO JAVASCRIPT FEATURES
   ========================================= */


/* =========================================
   FEATURE 1: CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contact-form");
const formPreview = document.getElementById("form-preview");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");


/* Check the form and display a local preview without sending data. */
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formPreview.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) {
        formPreview.textContent =
            "Please correct the errors above and submit again.";
        return;
    }

    // Use textContent so user-entered text is displayed as text.
    const heading = document.createElement("h3");
    heading.textContent = "Message Preview";

    const nameLine = document.createElement("p");
    nameLine.textContent = "Name: " + name;

    const emailLine = document.createElement("p");
    emailLine.textContent = "Email: " + email;

    const topicLine = document.createElement("p");
    topicLine.textContent =
        "Topic: " + (document.getElementById("topic").value.trim() || "Not specified");

    const messageLine = document.createElement("p");
    messageLine.textContent = "Message: " + message;

    const notice = document.createElement("p");
    notice.textContent =
        "Validation successful. This is a local preview only; no message was sent.";

    formPreview.append(
        heading,
        nameLine,
        emailLine,
        topicLine,
        messageLine,
        notice
    );
});


/* =========================================
   FEATURE 2: PHOTO GALLERY VIEWER
   ========================================= */

const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");

const previousPhoto = document.getElementById("previous-photo");
const nextPhoto = document.getElementById("next-photo");

const photos = [
    {
        src: "images/pic1.jpg",
        alt: "Regina preparing for church",
        caption: "Preparing for church."
    },
    {
        src: "images/pic2.jpg",
        alt: "Regina studying",
        caption: "Studying as part of my academic work."
    },
    {
        src: "images/pic3.jpg",
        alt: "Regina processing data",
        caption: "Processing data while developing my technical skills."
    }
];

let currentPhoto = 0;


/* Update the displayed photo and its caption. */
function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;

    galleryImage.src = photos[currentPhoto].src;
    galleryImage.alt = photos[currentPhoto].alt;
    galleryCaption.textContent = photos[currentPhoto].caption;
}


/* Move to the previous photo, looping at the beginning. */
previousPhoto.addEventListener("click", function () {
    showPhoto(currentPhoto - 1);
});


/* Move to the next photo, looping at the end. */
nextPhoto.addEventListener("click", function () {
    showPhoto(currentPhoto + 1);
});


/* =========================================
   FEATURE 3: PROJECT SEARCH AND FILTER
   ========================================= */

const projectSearch = document.getElementById("project-search");
const resetSearch = document.getElementById("reset-search");
const searchMessage = document.getElementById("search-message");

const projectCards = document.querySelectorAll(".project-card");


/* Show only project cards matching the search text. */
function filterProjects() {
    const searchText = projectSearch.value.toLowerCase().trim();
    let visibleProjects = 0;

    projectCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const matches = cardText.includes(searchText);

        card.hidden = !matches;

        if (matches) {
            visibleProjects++;
        }
    });

    if (searchText === "") {
        searchMessage.textContent = "Showing all projects and skills.";
    } else if (visibleProjects === 0) {
        searchMessage.textContent =
            "No matching projects or skills were found.";
    } else {
        searchMessage.textContent =
            "Showing " + visibleProjects +
            " matching project(s) or skill(s).";
    }
}


/* Filter whenever the visitor types. */
projectSearch.addEventListener("input", filterProjects);


/* Clear the search and restore all project cards. */
resetSearch.addEventListener("click", function () {
    projectSearch.value = "";
    filterProjects();
    projectSearch.focus();
});


/* =========================================
   FEATURE 4: LIGHT AND DARK THEME SWITCH
   ========================================= */

const themeToggle = document.getElementById("theme-toggle");


/* Change the page appearance and update the button label. */
themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = isDark
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";

    themeToggle.setAttribute("aria-pressed", String(isDark));
});


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


/* Open or close the navigation menu on narrow screens. */
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close Menu" : "Open Menu";
});


/* Close the mobile menu after a navigation link is selected. */
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Open Menu";
    });
});
console.log("My script.js file is connected!"); 
alert("javascript is working!");