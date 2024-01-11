const header_burger = document.querySelector(".header_burger");
const header_nav = document.querySelector(".header_nav");
const header_social = document.querySelector(".header_social");
header_burger.addEventListener("click", function(){
    header_nav.classList.toggle("active");
    header_social.classList.toggle("active");
})