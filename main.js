
console.log("masheoo");

function newPost() {
  console.log("masheoo");

  let postText = document.getElementById('input');

  let post = document.createElement('div');
  post.innerHTML = postText.value;
  post.className = 'post';
  document.body.appendChild(post);

}
