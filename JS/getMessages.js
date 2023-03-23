const mess = document.querySelector("#message_table")
async function deleteMessage(el){
    const id = el.getAttribute("messageId")
    console.log(id)

    await fetch (` http://localhost:3000/api/delete-message/${id}`,{
        method: 'DELETE'
    })
    renderMessages();
}


const renderMessages = async () => {

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    fetch("https://my-brand-backend-production-6c58.up.railway.app/api/get-All-Messages", requestOptions)

        .then((response) => response.json())
        .then((result) => {
            let Messages = "";
            result.data.forEach((message, i) => {
                Messages += `
        <tr>
        <td>${++i}</td>

        <td class="Title">${message.names}</td>

        <td>Author:${message.email}</td>
        <td>Author:${message.text}</td>

        <td>    <button messageId="${message._id}" class="delete-button" onclick="deleteBlog(this)">Delete</button>
        </td>
    <td>    <button class="update-button">update</button>
    </td>

        </tr>
`;
            });
            mess.innerHTML = Messages;
        });
};

addEventListener("DOMContentLoaded", () => renderMessages());