const btns = document.querySelectorAll(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const banner = document.querySelector(".banner");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         modal.classList.toggle("modal-active");
//         // banner.classList.toggle("banner-not-active")
//     })
// })
btns[0].addEventListener("click", function(){
    if(!modal.classList.contains("modal-active")){
        modal.classList.add("modal-active");
    }
})
btns[1].addEventListener("click", function(){
    if(modal.classList.contains("modal-active")){
        modal.classList.remove("modal-active");
    }
})