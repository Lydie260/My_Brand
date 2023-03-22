const allBlogs = document.querySelector(".blog-card-group")
        const renderAllBlogs = async () =>{
            
            var requestData = {
                method: "GET",
                redirect: "follow",
            };
            fetch("http://localhost:3000/api/get-all-blogs", requestData)

            .then((response) => response.json())
            .then((result) => {
      let blog = "";
      result.data.forEach((posts) => {
        blog += `
        <div class="blog-card">
        <h2>${posts.title}</h2>
        <p>${posts.content}</p>

        <h4>Author:${posts.author}</h4>
        <i class="fa-solid fa-thumbs-up" id="like"></i>
        <i class="fa-solid fa-message" id="comment"></i>

        </div>`;
      });
      allBlogs.innerHTML = blog;
        });
        };
        
addEventListener("DOMContentLoaded", () => renderAllBlogs());