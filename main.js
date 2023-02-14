//header on scroll color chage
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu
let menu = document.querySelector('#menu__icon');
let navbar = document.querySelector('.navbar');      

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Remove menu on click any menu link
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal Animation 
const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home__text, .buds__text', {origin: 'left'})
sr.reveal('.home__img, .buds__img ', {origin: 'right'})
sr.reveal('.heading', {delay: 200})
sr.reveal('.specs__detalis .box', {origin: 'left', interval: 200})
sr.reveal('.specs__img', {delay: 600})
sr.reveal('.shop__container .box, .footer .logo, .footer .footer__box', { interval: 150})



