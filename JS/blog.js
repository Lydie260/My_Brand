

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



let popup = document.getElementById("popup")
function editRow(){
  popup.classList.add("open-popup");
  const blogtitle = row.cells[0].textContent;
  const postdate = row.cells[1].textContent;
  document.getElementById("blog-title").value = blogtitle;
  document.getElementById("post-date").value = postdate;



}

function saveChanges(){
  popup.classList.remove("open-popup");

}
