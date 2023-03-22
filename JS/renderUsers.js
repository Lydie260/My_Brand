let tbody = document.querySelector("#user_table");

const renderUser = async () =>{
    var requestUser = {
        method: "GET",
        redirect: "follow",
    };
    fetch("https://my-brand-backend-production-6c58.up.railway.app/users", requestUser)
    .then((response) => response.json())
    .then((result) =>{
        let user = "";
        result.data.forEach((users, i) =>{
            user +=`
            <tr>
   <td>${++i}</td>
   <td>${users.fullName}</td>
<td>${users.email}</td>
   <td>${users.phone}</td>
    <td>${users.role}</td>
    <td>    <button class="delete-button">Delete</button>
    </td>
    <td>    <button class="update-button">update</button>
    </td>
</tr>
            
            
            
            `
        });
        tbody.innerHTML = user;
    });
}
addEventListener("DOMContentLoaded", () => renderUser());








