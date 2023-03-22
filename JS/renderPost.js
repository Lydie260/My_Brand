const container = document.querySelector(".blog-card-group")
        const renderPost = async () =>{
            
            var requestOptions = {
                method: "GET",
                redirect: "follow",
            };
            fetch("https://my-brand-backend-production-6c58.up.railway.app/api/get-all-blogs", requestOptions)

            .then((response) => response.json())
            .then((result) => {
      let blog = "";
      result.data.forEach((posts) => {
        blog += `
        <div class="blog-card">
        <p>${posts.content}</p>
        <h2 class="Title">${posts.title}</h2>


        <h4>Author:${posts.author}</h4>
        <img src="${posts.image}"/>
        <i class="fa-solid fa-thumbs-up" id="like"></i>
        <i class="fa-solid fa-message" id="comment"></i>

        </div>`;
      });
      container.innerHTML = blog;
        });
        };
        
addEventListener("DOMContentLoaded", () => renderPost());