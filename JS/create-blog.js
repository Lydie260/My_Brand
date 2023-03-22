const createBlog = (e) => {
    e.preventDefault();
    var myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    var raws = JSON.stringify({
        title: document.createBlog.title.value,
        author: document.createBlog.email.value,
        content: document.createBlog.phone.value,
    });

    var requestOptions = {
      method: "POST",
      header: myHeader,
      body: raws,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/create-blog", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          alert("Blog created Successfuly");
          window.open("allBlogs.html", "_self");
        } else {
          alert(result.error);
          return false;
        }
      })
      .catch((error) => console.log("error", error));
  };