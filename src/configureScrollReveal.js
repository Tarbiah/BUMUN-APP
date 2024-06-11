import ScrollReveal from 'scrollreveal';

const configureScrollReveal = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease',
    reset: true,
  });

  sr.reveal('.ceenter-text', {});
  sr.reveal('.heaader-background', {});
  sr.reveal('.imageee-container', {});
  /*sr.reveal('.ffooter-container', {});*/

  sr.reveal('.section-heading', {});
  sr.reveal('.headder-background', {});
  sr.reveal('.section-line', {});
  sr.reveal('.blue-container', {});
  sr.reveal('.directorates-heading', {});
  sr.reveal('.line-container', {});
  sr.reveal('.sub-containers', {});
  sr.reveal('.sub-containers-new', {});
  sr.reveal('.hheader-background', {});
  

  sr.reveal('.center-text', {});
  sr.reveal('.sociallogo-container', {});
  sr.reveal('.socialtext-content', {});
  /*sr.reveal('.footerr-container', {});*/

  sr.reveal('.register-container', {});
  sr.reveal('.sec', {});
  sr.reveal('.category-container', {});
  sr.reveal('.header-background', {});
  
//register-container,sec,category-container,footerr-container   ffooter-container
  //center-text,line-container,sociallogo-container,socialtext-content,footerr-container
  // Add more sr.reveal calls for other elements if needed
};

export default configureScrollReveal;
