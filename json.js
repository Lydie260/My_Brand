
const container = document.querySelector('.blog-card')




const renderPosts = async () =>{
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <h2> ${post.title} </h2> <br>
        <p> ${post.body.slice(0, 200)}</p> <br>
        <p><small>${post.datePosted} Date Posted </small> </p> <br>

        <a href="./article.html" class="read">Read More</a>

        
        `
    })
    container.innerHTML = template;
    // console.log(posts);

}

window.addEventListener('DOMContentLoaded', () => renderPosts());