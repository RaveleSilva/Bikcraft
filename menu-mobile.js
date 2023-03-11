const menuHamburger = window.document.querySelector('.menu-hamburger')

function toggleMenu(){
    const nav = window.document.querySelector('.nav-container')
    nav.classList.toggle('active')
    menuHamburger.classList.toggle('active')
}

menuHamburger.addEventListener('click', toggleMenu)
