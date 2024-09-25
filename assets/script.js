//let navbar = document.querySelector('.header .navbar');

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

document.onscroll = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}