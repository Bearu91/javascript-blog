'use strict';

function generateLink(id, title) {
return '<li><a href="#" class="post-link" data-postId="' + id + '">' + title + '</a></li> ';
}


function generatePostlinks() {
let html = '';
const posts = document.querySelectorAll('.post');
for (let post of posts) {
let tagsHtml = '';
const id = post.getAttribute('id');
const tags = post.getAttribute('data-tags').split(' ')
const title = post.querySelector('.post-title').innerHTML;
html = html + generateLink(id, title);

for (let tag of tags) {
tagsHtml = tagsHtml + generateLink('#', tag);
}
const tagsContainer = post.querySelector('.list-horizontal');
tagsContainer.innerHTML = tagsHtml;
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
addClickListenersToTags();

function setActivePost(postId) {
const posts = document.querySelectorAll('.post');
for (let post of posts) {
post.classList.remove('active');
}
document.getElementById(postId).classList.add('active');
}

function addClickListenersToTags() {
const tags = document.querySelectorAll('.tags');
for (let tag of tags) {
tag.addEventListener('cilck', function (event) {
displayTags(event.target.getAttribute('data-tagId'));
})
}
}
}

function generateAuthors() {
let html = '';
const authArr = [];
const authors = document.querySelectorAll('.post-author');
for (let author of authors) {
const aut = author.innerHTML.replace('by ', '');
if (authArr.indexOf(aut) === -1) {
authArr.push(aut);
}
}
for (let autor of authArr) {
html = html + generateLink(null, autor);
}
const target = document.querySelector('.authors');
target.innerHTML = html;
}

generateAuthors();
generatePostlinks();