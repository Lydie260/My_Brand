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
       

        <div>
        <h3 class="Title">${posts.title}</h3>

        <img class="blog-image" src="${posts.image}"/>
        </div>
        <div> ${posts.content}</div>


        <h4>Author:${posts.author}</h4>
      
        <div class="icons-blog">
        <i class="fa-solid fa-thumbs-up" id="like"></i>
        <i class="fa-solid fa-message" id="comment"></i>


         </div>
        </div>`;
      });
      
    container.innerHTML =blog;
     
        });
        };
        
addEventListener("DOMContentLoaded", () => renderPost());