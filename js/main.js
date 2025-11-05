let open = document.querySelector("nav .menu button");
let close = document.querySelector(".sidemenu .close");
let side = document.querySelector(".sidemenu");
let laptop = document.querySelector(".laptop");

if(window.innerWidth < 900){
    laptop.style.display = "none";
    open.style.display = "block";
} else {
    laptop.style.display = "block";
    open.style.display = "none";
}

open.onclick = () => side.classList.add("open");

close.onclick = () => side.classList.remove("open");
