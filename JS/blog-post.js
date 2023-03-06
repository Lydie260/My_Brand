const form = document.querySelector('form');

const createPost = async (e) =>{
  e.preventDefault();

  const doc = {
    title: form.title.value,
    author: form.author.value,
    description: form.description.value,
    datePosted: form.datePosted.value,
  }
  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: {'content-Type' : 'application/json'}

  });
  window.location.replace('/allblogs.html')
}
form.addEventListener('submit', createPost);




