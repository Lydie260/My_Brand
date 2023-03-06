async function deleteUser(postId){
    await fetch (` http://localhost:3000/posts/${postId}`,{
        method: 'DELETE'
    })
}

let renderpost = async()=>{
    console.log('loaded')
    let uri = ' http://localhost:3000/posts'
    let res = await fetch(uri)
    let post = await res.json()

    let template = ''
    let table = document.getElementById('.post_id');
    if(post !==0){
        console.log(post, post.length, post[0])
        for (let i =0; i<post.length; i++){
            console.log(post[i])
            template += `
            <tr>
            <td>${i+1}</td>
            <td>${post[i].title}</td>
            <td>${post[i].author}</td>
            <td>${post[i].description}</td>
            <td>${post[i].datePosted}</td>
            <div class="edit" onclick="window.location = '/blogForm.html?id=${post[i].id}'">
            <i class="fa-solid fa-pencil"></i>
        </div>

        <div class="delete" onclick = deleteBlog(${post[i].id})>
                            <i class="fa-solid fa-trash"></i>
                        </div>


          </tr>
            `
        }
        table.innerHTML = template
    }
}
window.addEventListener('DOMContentLoaded', renderpost)
