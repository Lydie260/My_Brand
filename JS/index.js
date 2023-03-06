// let tbody = document.querySelector("tbody");
// function displayData() {

//   tbody.innerHTML = "";
//   const users = JSON.parse(localStorage.getItem("formData"));
//   users.forEach((user, i) => {
//     //console.log(user);
//     tbody.innerHTML += `<tr>
//    <td>${++i}</td>
//    <td>${user.fname}</td>
//    <td>${user.email}</td>
//    <td>${user.PhoneNumber}</td>

//    <td>${user.password}</td>
//    <td>${user.role}</td>
//    <td>
//    <button   style=" color:white;  " type="button"  onclick="deleteUser('${
//      user.email
//    }');"><i class="fa-solid fa-trash delete-icon" style="color:red;"></i> </button>
//    <i class="fas fa-edit" style="color:blue;"></i></button>
//    </td>
//    </tr>
//    `;
//   });
// }