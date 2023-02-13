const signup = (e) => {
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let pnumber = document.getElementById("pnumber").value;
    let password = document.getElementById("password").value;
   
    let storeForm = JSON.parse(localStorage.getItem("storeForm")) || [];
    let exist =
    storeForm.length &&
      JSON.parse(localStorage.getItem("storeForm")).some(
        (data) =>
          data.fname.toLowerCase() == fname.toLowerCase()
        
      );
    if (!exist) {
        storeForm.push({ fname, email, pnumber, password });
      localStorage.setItem("storeForm", JSON.stringify(storeForm));
      document.querySelector("form").reset();
      document.getElementById("fname").focus();
      alert("Account Created.");
    } else {
      alert("Ooopppssss..\nYou have already have account");
    }
    e.preventDefault();
  };

  const logIn = (e) =>{

    let email = document.getElementById('email').value, password = document.getElementById('password').value;
    let storeForm = JSON.parse(localStorage.getItem('storeForm')) || [];
    let exist = storeForm.length &&
    JSON.parse(localStorage.getItem('storeForm')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();

  }