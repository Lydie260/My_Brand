const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.blog-card')
const deleteBtn = document.querySelector('.delete')

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
<div class="">
<h2 > ${post.title} </h2> <br>
<h3> <i>  ${post.author} </i></h3> <br><br>
<p> ${post.description}</p> <br>
<p><small>${post.datePosted}</small> </p> <br>

</div>



        
        `
    })
    container.innerHTML = template;
    // console.log(posts);

}
deleteBtn.addEventListener('click', async (e) =>{
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
Window.location.replace('/allBlogs.html');
})
window.addEventListener('DOMContentLoaded', () => renderPosts());