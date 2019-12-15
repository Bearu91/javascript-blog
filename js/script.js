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
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }