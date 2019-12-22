'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
const links = document.querySelectorAll('.titles a');
console.log('links:', links);
}); */

const optArticleTagsSelector = 'post-tags .list';

function generatePostlinks() {
  let html = '';
  const posts = document.querySelectorAll('.post')
  for (let post of posts) {
    const title = post.querySelector('.post-title').innerHTML;
    const id = post.getAttribute('id');
    const link = '<li><a href="#" class="post-link" data-postId="' + id + '">' + title + '</a></li>';
    html = html + link;
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
  }
}
function setActivePost(postId) {
  const posts = document.querySelectorAll('.post');
  for (let post of posts) {
    post.classList.remove('active');
  }
  document.getElementById(postId).classList.add('active');
}
generatePostLinks();

function generateTags() {
  /* find all articles */
  articles = querySelectorAll('.post')
  for (let article of articles) {
    console.log(article);
  }
  const findWrapper = article.querySelector(optArticleTagsSelector);
  let html = '';
  const articleTags = article.getAttribute('data-tags');

  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
  /* START LOOP: for each tag */
for(let tag of articleTagsArray)
  /* generate HTML of the link */
  const link = '<li><a href="#tag" class="post-link" data-postId="' + id + '">' + findWrapper + '</a></li>';
  /* add generated code to html variable */
html = html +link;
  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();