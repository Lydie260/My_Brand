
// const form = document.querySelector("form")
// const user = JSON.parse(localStorage.getItem("loginedUser"));
// const createBlog =(e)=>{
//   e.preventDefault()
//   const image = document.getElementById("img");
//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", `Bearer ${user.token}`);
//   var formdata = new FormData();
//   formdata.append("title", form.title.value);
//   formdata.append("author", form.author.value);
//   formdata.append("postedDate",form.postedDate.value)
//   formdata.append("content", form.content.value);
//   formdata.append("image", image.files[0]);
//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow",
//   };
//   fetch("http://localhost:3000/api/create-blog", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result)
//       window.location.replace("/allBlogs.html");
//     })
//     .catch((error) => console.log("error", error));

// }




// form.addEventListener("submit", createBlog)


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
    formdata.append("postedDate",form.postedDate.value);
    formdata.append("content",form.content.value);
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
            alert("Blog Created Successfully")

        window.location.replace("/allBlogs.html");
      })
      .catch((error) => console.log("error", error));


    }

form.addEventListener("submit", createBlog);







































