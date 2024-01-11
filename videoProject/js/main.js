const video = document.querySelector(".background_video");
const controlBtn = document.querySelector(".video-control-btn");
controlBtn.addEventListener("click", function(){
    if(!controlBtn.classList.contains("video-active")){
        controlBtn.classList.add("video-active");
        video.pause();
        console.log("added the class, ClassList of button element:" ,controlBtn.classList);
    }
    else if(controlBtn.classList.contains("video-active")){
        controlBtn.classList.remove("video-active");
        video.play();
        console.log("removed the class, ClassList of button element: ", controlBtn.classList);
    }
})
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide_preloader");
})