const Tbody = document.querySelector("#blog_table")
async function deleteBlog(el){
    const id = el.getAttribute("blogId")
    console.log(id)

    await fetch (` http://localhost:3000/api/delete-blog/${id}`,{
        method: 'DELETE'
    })
    renderPosts();
}


const renderPosts = async () => {

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    fetch("http://localhost:3000/api/get-all-blogs", requestOptions)

        .then((response) => response.json())
        .then((result) => {
            let blogPosts = "";
            result.data.forEach((post, i) => {
                blogPosts += `
        <tr>
        <td>${++i}</td>

        <td class="Title">${post.title}</td>

        <td>Author:${post.author}</td>
        <td>    <button blogId="${post._id}" class="delete-button" onclick="deleteBlog(this)">Delete</button>
        </td>
    <td>    <button class="update-button">update</button>
    </td>

        </tr>
`;
            });
            Tbody.innerHTML = blogPosts;
        });
};

addEventListener("DOMContentLoaded", () => renderPosts());