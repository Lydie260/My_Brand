
const form = document.querySelector("form")
const user = JSON.parse(localStorage.getItem("loginedUser"));
const createBlog =(e)=>{
  e.preventDefault()
  const image = document.getElementById("img");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.token}`);
  var formdata = new FormData();
  formdata.append("title", form.title.value);
  formdata.append("author", form.author.value);
  formdata.append("postedDate",form.postedDate.value)
  formdata.append("content", form.content.value);
  formdata.append("image", image.files[0]);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  fetch("http://localhost:3000/api/create-blog", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      window.location.replace("/allBlogs.html");
    })
    .catch((error) => console.log("error", error));

}




form.addEventListener("submit", createBlog)

















































// const createBlog = (e) => {
//     e.preventDefault();
//     var myHeader = new Headers();
//     myHeader.append("Content-Type", "application/json");

//     var raws = JSON.stringify({
//         title: document.createBlog.title.value,
//         author: document.createBlog.author.value,
//         content: document.createBlog.content.value,
//         image: document.createBlog.image.value
//     });

//     var requestOptions = {
//       method: "POST",
//       header: myHeader,
//       body: raws,
//       redirect: "follow",
//     };

//     fetch("http://localhost:3000/api/create-blog", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         if (result.status == 200) {
//           alert("Blog created Successfuly");
//           window.open("allBlogs.html", "_self");
//         } else {
//           alert(result.error);
//           return false;
//         }
//       })
//       .catch((error) => console.log("error", error));
//   };