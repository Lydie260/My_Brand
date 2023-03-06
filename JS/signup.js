let emailExists = async (email) => {
    let uri = 'http://localhost:3000/users?email='
    uri += `${email}`
    const res = await fetch(uri)
    const user = await res.json();
    if (user[0]) {
        console.log(user[0]);

        return true
    } else {
        return false
    }
}


const form = document.getElementById('create-user');
const createUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (form.email.value.match(validRegex)) {

        if (await emailExists(form.email.value)) {
            alert("Email already exists, Log in ");

        } else {
            const doc = {
                fullName: form.fullName.value,
                email: form.email.value,
                phoneNumber: form.phoneNumber.value,
                password: form.password.value,
                role: "user",
            }
            await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(doc),
                headers: { 'Content-Type': 'application/json' }
            });
            window.location.replace('/signin.html');
        }

    } else {
        alert("Sorry You have already signed up");
    }
}
async function deleteUser(userId){
    await fetch (` http://localhost:3000/users/${userId}`,{
        method: 'DELETE'
    })
}

let renderUsers = async()=>{
    console.log('loaded')
    let uri = ' http://localhost:3000/users'
    let res = await fetch(uri)
    let users = await res.json()

    let template = ''
    let table_body = document.getElementById('.user_table');
    if(users !==0){
        console.log(users, users.length, users[0])
        for (let i =0; i<users.length; i++){
            console.log(users[i])
            template += `
            <tr>
            <td>${i+1}</td>
            <td>${users[i].fullName}</td>
            <td>${users[i].email}</td>
            <td>${users[i].phoneNumber}</td>
            <td>${users[i].role}</td>
            <div class="edit" onclick="window.location = '/blogForm.html?id=${users[i].id}'">
            <i class="fa-solid fa-pencil"></i>
        </div>

        <div class="delete" onclick = deleteBlog(${users[i].id})>
                            <i class="fa-solid fa-trash"></i>
                        </div>


          </tr>
            `
        }
        table_body.innerHTML = template
    }
}
window.addEventListener('DOMContentLoaded', renderUsers)

form.addEventListener('submit', createUser)


