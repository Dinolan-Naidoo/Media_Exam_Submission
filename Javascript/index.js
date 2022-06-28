
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  header.classList.toggle('active');
}

window.onscroll = () =>{

  menu.classList.remove('bx-x');
  header.classList.remove('active'); 
}


const li = document.querySelectorAll(".links");
const sec= document.querySelectorAll("section")

function activeMenu()
{
    let len = sec.length;
    while(--len && window.scrollY +94 < sec[len].offsetTop){}
    
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    
}

activeMenu();
window.addEventListener("scroll", activeMenu);







