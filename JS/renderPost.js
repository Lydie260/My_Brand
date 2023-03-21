const container = document.querySelector(".blog-card-group")
        const renderPost = async () =>{
            
            var requestOptions = {
                method: "GET",
                redirect: "follow",
            };
            fetch("http://localhost:3000/api/get-all-blogs", requestOptions)

            .then((response) => response.json())
            .then((result) => {
      let blog = "";
      result.data.forEach((posts) => {
        blog += `
        <div class="blog-card">
        <h2>${posts.title}</h2>
        <h2>${posts.author}</h2>
        <p>${posts.content}</p>
        </div>`;
      });
      container.innerHTML = blog;
        });
        };
        
addEventListener("DOMContentLoaded", () => renderPost());