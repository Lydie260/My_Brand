
const container = document.querySelector('.blog')




const renderPosts = async () =>{
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="blog-content">
        <h2> ${post.title} </h2> <br>
        <h3> <i>  ${post.author} </i></h3>
        <p> ${post.description}</p> <br>
        <p><small>${post.datePosted} Date Posted </small> </p> <br>
        </div>


        
        `
    })
    container.innerHTML = template;
    // console.log(posts);

}

window.addEventListener('DOMContentLoaded', () => renderPosts());