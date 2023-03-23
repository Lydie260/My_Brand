let tbody = document.querySelector("#user_table");
async function deleteUser(el){
    const id = el.getAttribute("userId")
    console.log(id)

    await fetch (` http://localhost:3000/user/delete/${id}`,{
        method: 'DELETE'
    })
    renderUser();
}
const renderUser = async () =>{
    var requestUser = {
        method: "GET",
        redirect: "follow",
    };
    fetch("http://localhost:3000/users", requestUser)
    .then((response) => response.json())
    .then((result) =>{
        result.data.forEach((users, i) =>{
            tbody.innerHTML +=`
            <tr>
   <td>${++i}</td>
   <td>${users.fullName}</td>
<td>${users.email}</td>
   <td>${users.phone}</td>
    <td>${users.role}</td>
    <td>    <button userId="${users._id}" class="delete-button" onclick="deleteUser(this)">Delete</button>
    </td>
    <td>    <button class="update-button">update</button>
    </td>
</tr>`
        });

    });
}

addEventListener("DOMContentLoaded", () => renderUser());








