// Hamburgermenu
const menu = document.querySelector('.header__burger');
menu.onclick = () =>{
    menu.classList.toggle('menu-open')
    const open = document.querySelector('.header__menu')
    open.classList.toggle('menu-open')
}