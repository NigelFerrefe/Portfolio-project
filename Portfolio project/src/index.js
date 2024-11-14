const menuBtnElement = document.querySelector("#menu-btn");
const menuElement = document.querySelector("#menu");
const menuIconElemenet = document.querySelector("#menu-icon");
const homeElement = document.querySelector("#home")

menuBtnElement.addEventListener("click", (event) => {
  menuElement.classList.toggle("not-visible");
  menuElement.classList.toggle("flex");

  if (homeElement.style.paddingTop !== "40rem") {
    homeElement.style.paddingTop = "40rem";
  } else {
    homeElement.style.paddingTop = "0";
  }

  if (menuIconElemenet.getAttribute("src") === "./images/icons8-menú-64.png") {
    menuIconElemenet.setAttribute("src", "./images/icons8-eliminar-64.png");
    menuIconElemenet.setAttribute("alt", "delete icon");
  } else {
    menuIconElemenet.setAttribute("src", "./images/icons8-menú-64.png");
    menuIconElemenet.setAttribute("alt", "hamburber icon");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });


});
