let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-solid fa-xmark');
    navbar.classList.toggle('active');
}
