let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offSet = sec.offSet - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        
    if(top >= offSet && top < offSet + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

               });
            }
        });

        /* Sticky nav bar */ 
        let header = document.querySelector('header');

        header.classList.toggle('sticky' , window.scrollY > 100);

        menuIcon.classList.remove('bx-x')
        navBar.classList.remove('active')

};

//  scroll reveal

scrollReveal({
    reset :true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-content ,.heading',{origin: 'top'});
scrollReveal().reveal(
 '.home-image ,.services-container ,.portfolio-box ,.contact-form',{origin: 'bottom'});
scrollReveal().reveal('.home-content h1 ,.about-image',{origin: 'left'});
scrollReveal().reveal('.home-content p ,.about-content',{origin: 'right'});

//typed js
const typed = new typed('multiple-text' , {
    strings: ['Frontend Developer' ,'Youtuber' , 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});