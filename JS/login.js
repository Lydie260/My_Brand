const form = document.getElementById('login-user');
const loginUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(form.email.value.match(validRegex)){
        let uri = 'http://localhost:3000/users?email='
        uri += `${form.email.value}`
        const res = await fetch(uri)
        const user = await res.json();

        if(user[0]){
            if(user[0].password === form.password.value){
                if(user[0].role === 'user'){
                    window.location.replace('/allBlogs.html');
                }else{
                    window.location.replace('/adminPage.html');
                }
            }else{
                alert("Incorect Password")
            }
        }else{
         alert("User not registered")
        }
    }else{
      alert("Invalid Email")
    }
}
form.addEventListener('submit' , loginUser)