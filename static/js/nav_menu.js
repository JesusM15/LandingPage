const btn = document.querySelector('#btn-menu');
const screen = document.querySelector('#screen');
const body = document.querySelector('#body');
const icon = document.querySelector('#nav_menu_icon');

btn.addEventListener("click", menu);

function menu(){
    screen.classList.toggle('hidden');
    body.classList.toggle("overflow-hidden");
    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars");
        icon.classList.add('fa-close');
    }else{
        icon.classList.add("fa-bars");
        icon.classList.remove('fa-close');
    };
    
};