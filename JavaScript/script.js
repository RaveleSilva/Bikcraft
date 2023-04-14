//Menu hamburger versão mobile;

const menuHamburger = window.document.querySelector('.menu-hamburger')

function toggleMenu(){
    const nav = window.document.querySelector('.nav-container')
    nav.classList.toggle('active')
    menuHamburger.classList.toggle('active')
}

menuHamburger.addEventListener('click', toggleMenu)

//Identificador de página no menu desktop;

const links = document.querySelectorAll('.nav-menu a')

function ativarLink(link){
    const url = location.href
    const href = link.href

    if (url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if (elemento){
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)

console.log(parametros)


