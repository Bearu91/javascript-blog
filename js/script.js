'use strict';

    /* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
    }); */
  
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    const clickedElement = document.getElementById('clickedElement')
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */
    function removeactiveArticles() {
      document.querySelectorAll('.post active').forEach(function (activeArticles) {
      activeArticles.classList.remove('active')
    });
    }

    /* get 'href' attribute from the clicked link */
    clickedElement = document.getElementById('clickedElement');
    const articleSelector = clickedElement.getAttribute('href');
    console.log('href', articleSelector);
    
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector('href')
    console.log('href', targetArticle)
    /* add class 'active' to the correct article */
    const clickedElement = document.getElementById('clickedElement')
    targetArticle.classList.add('active');

  }
  
  
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  
  
  
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages(){
    document.getElementById('messages').innerHTML = 'optTitleListSelector';
  }
  /* for each article */
  const articles = document.querySelectorAll('.post')
  for ( let article of articles){
    console.log(article);
  }
  const articles = document.querySelectorAll('.post-title')
  for (let article of articles){
    console.log(article);
  }
  const articles = document.querySelectorAll('.titles')
  for (let article of articles){
    console.log(article);
  }

  let html = '';
  for (let article of articles){
    /* get the article id */
    const articleId = clickedElement.getAttribute('id');
    console.log('id', articleId);
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    html = html + linkHTML;

  const links = document.querySelectorAll('.titles a');
  console.log(links)
  for(let link of links){
    link.addEventListener('click', titleClickHandler);

  }
titleList.innerHTML = html;
}

generateTitleLinks();
}