const message = document.querySelector(".Message")


const createMessage =(e)=>{
    e.preventDefault()
    var formdata = new FormData();
    formdata.append("names", message.names.value);
    formdata.append("email", message.email.value);
    formdata.append("subject",message.subject.value);
    formdata.append("text", message.text.value);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("https://my-brand-backend-production-6c58.up.railway.app/api/sendMessage", requestOptions)
      .then((response) => response.json())
      .then((result) => {
            alert("Message sent Successfully")
            window.location.replace("/index.html");


      })
      .catch((error) => console.log("error", error));


    }

    message.addEventListener("submit", createMessage );