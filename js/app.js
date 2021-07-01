const toggle = document.querySelector('.toggle');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('#main-header');
const toTop = document.querySelector('.toTop');

toggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
} );


// Change header bg-color on scroll & hide/show the scroll button 
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    if(scrollY > 200) {
     header.classList.add('animate');
     toTop.classList.add('hide');
    }
    else {
     header.classList.remove('animate');
     toTop.classList.remove('hide');
    }

} ); 