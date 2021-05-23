// const toggleButton = document.querySelector('.toggle-button');
// const mobileNav = document.querySelector('.mobile-nav');
// const mainHeader = document.querySelector('.main-header');
// const backdrop = document.querySelector('.backdrop');

// backdrop.addEventListener('click', function () {
//     mobileNav.classList.remove('open');
//     closeModal();
// })

// const closeModal = function () {
//     backdrop.classList.remove('open');
//     mainHeader.style = "display: block"
// }
// toggleButton.addEventListener('click', function () {
//     mobileNav.classList.add('open');
//     backdrop.classList.add('open');
//     mainHeader.style = "display: none";
// })

const nav = document.querySelector('nav');
const container = document.querySelector('.container');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
        container.classList.add('shrink');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
        container.classList.remove('shrink');
    }
})