let menuBtn = document.querySelector("#menu-btn");
let menuLink = document.querySelector(".nav-menu");
let navbuttons = document.querySelector(".nav-buttons");

//  let section = document.querySelector("section");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active");
});

toggle = () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active");
};