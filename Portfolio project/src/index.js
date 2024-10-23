const menuElement = document.querySelector(".toggle-button");
const navDisplay = document.querySelector(".navbar-links");

menuElement.addEventListener("click", () => {
    menuElement.classList.toggle("change");
    navDisplay.classList.toggle("visible");
});


