const menuBtnElement = document.querySelector("#menu-btn");
const menuElement = document.querySelector("#menu");


menuBtnElement.addEventListener("click", (event) => {


  menuElement.classList.toggle("not-visible");
  menuElement.classList.toggle("flex");
});



