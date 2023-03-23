const allBlogs = document.querySelector(".blog-card-group")
        const renderAllBlogs = async () =>{
            
            var requestData = {
                method: "GET",
                redirect: "follow",
            };
            fetch("https://my-brand-backend-production-6c58.up.railway.app/api/get-all-blogs", requestData)

            .then((response) => response.json())
            .then((result) => {
      let blog = "";
      result.data.forEach((posts) => {
        blog += `
        <div class="blog-card">
        <h2>${posts.title}</h2>
        <p>${posts.content}</p>

        <h4>${posts.author}</h4>
        <div class="icons-blog">
        <i class="fa-solid fa-message" id="comment"></i>
        <i class="fa-solid fa-thumbs-up" id="like"></i>
         </div>
        </div>`;
      });
      allBlogs.innerHTML = blog;
        });
        };
        
addEventListener("DOMContentLoaded", () => renderAllBlogs());