const Tbody = document.querySelector("#blog_table")
const renderPosts = async () => {

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    fetch("https://my-brand-backend-production-6c58.up.railway.app/api/get-all-blogs", requestOptions)

        .then((response) => response.json())
        .then((result) => {
            let blogPosts = "";
            result.data.forEach((post, i) => {
                blogPosts += `
        <tr>
        <td>${++i}</td>

        <td class="Title">${post.title}</td>
        <td>${post.content}</td>

        <td>Author:${post.author}</td>
        <td>    <button class="delete-button">Delete</button>
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