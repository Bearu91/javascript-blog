'use strict';

function generateLink(id, title) {
    return '<li><a href="#" class="post-link" data-postId="' + id + '">' + title + '</a></li> ';
}

const optCloudClassCount = 5
const optCloudClassPrefix = tag-size-
calculateTagClass(count, params){

}
function generatePostlinks() {
    let html = '';
    let allTags = {};
    let TagsListSelector = document.querySelectorAll('.list.tags');
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
    if(!allTags.hasOwnProperty(tag)){
        allTags[tag] = 1;
    } else {
        allTags[tag]++;
    }
    //titleclickhandler//
    const target = document.querySelector('.titles');
    target.innerHTML = html;
    const postLinks = document.querySelectorAll('.post-link');
    for (let postLink of postLinks) {
        postLink.addEventListener('click', function (event) {
            event.preventDefault();
            const id = event.target.getAttribute('data-postId');
            setActivePost(id);
        });
        const tagList = document.querySelector('.tags');
        // fragment kodu do poprawy poniewaz nie umiem zrobic tego co wymaga kodilla
        function calculateTagsParams(){
        const tagsParams = calculateTagsParams(allTags);
        console.log('tagsParams:', tagsParams)
        for(let tag in tags){
            console.log(tag + ' is used ' + tags[tag] + ' times');
            if(tags[tag] > params.max){
                params.max = tags[tag];
              }if (tags[tag] < params.min){
                  params.min = tags[tag];
              }
              return params;
          }}
        let allTagsHTML = '';
        for(let tag in allTags){
            allTagsHTML += tag + ' (' + allTags[tag] + ') ';
        }
        tagList.innerHTML = allTagsHTML;
    }
    addClickListenersToTags();
    calculateTagsParams();

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