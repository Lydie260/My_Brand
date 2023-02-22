

// let menu = document.querySelector('#menu-btn');
// let header = document.querySelector('.dashbord');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }






// toggle = () => {
//   menuBtn.classList.toggle("fa-times");
//   menuLink.classList.toggle("active");
// };


let menuBtn = document.querySelector("#menu-btn");
let menuLink = document.querySelector(".dashbord");
//  let section = document.querySelector("section");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active");
});

toggle = () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active");
};