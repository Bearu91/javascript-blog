'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
const links = document.querySelectorAll('.titles a');
console.log('links:', links);
}); */



function generatePostlinks(tag) {
  let html = '';
  const posts = document.querySelectorAll('.post')
  for (let post of posts) {
    if (tag) {
      if (post.getAttribute('data-tags').indexOf(tag) > -1) {
        const title = post.querySelector('.post-title').innerHTML;
        const id = post.getAttribute('id');
        const link = '<li><a href="#" class="post-link" data-postId="' + id + '">' + title + '</a></li>';
        html = html + link;
    } else {
      const title = post.querySelector('.post-title').innerHTML;
      const id = post.getAttribute('id');
      const link = '<li><a href="#" class="post-link data-postId="' + id + '">' + title + '</a></li>';
      html = html + link;
  
    }
  }

  const target = document.querySelector('.titles');
  target.innerHTML = html;
  const postLinks = document.querySelectorAll('.post-link');
  for (let postLink of postLinks) {
    postLink.addEventListener('click', function (event) {
      event.preventDefault();
      const id = event.target.getAttribute('data-postId');
      setActivePost(id);
    });
    tagsWrapper.innerHTML = html;
  }
  addClickListenersToTags();
}
function setActivePost(postId) {
  const posts = document.querySelectorAll('.post');
  for (let post of posts) {
    post.classList.remove('active');
  }
  document.getElementById(postId).classList.add('active');
}
generatePostLinks();

function addClickListenersToTags() {
  const tags = document.querySelectorAll('.tags');
  for (let tag of tags) {
    tag.addEventListener('cilck', function (event){
      displayTags(event.target.getAttribute('data-tagId'));
    })
  }
}
function generateAuthors () {
  let html = '';
  const authors = document.querySelectorAll('.post-author');
  for (let author of authors){
    const author = post-author.getAttribute(??)
    const link = '<li><a href="#" class="post-author" data-postId="' + author + '">' + ?? + '</a></li>';
    html = html + link;
  }
}
