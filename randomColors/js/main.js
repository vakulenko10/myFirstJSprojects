const clickMebtn = document.querySelector("#clickMeBtn");
const body = document.body;
const colorText = document.querySelector(".text_color");
const colorsList = ["red", "orange", "yellow", "green", "blue", "darkblue", "violet", "#000", "#fff"];
clickMebtn.addEventListener("click", function(){
    let randomColor = getRandomNumber();
    colorText.textContent = colorsList[randomColor];
    document.body.style.backgroundColor = colorsList[randomColor];
    if(randomColor == 7){
        clickMebtn.classList.add("whiteBtn");
        
    }
    else{
        clickMebtn.classList.remove("whiteBtn");
    }
});
function getRandomNumber(){
    return Math.floor(Math.random() * colorsList.length);
}
// const textBlock = document.querySelector(".text_block");
// textBlock.addEventListener("mouseover", function(e){
    
//     let bodyBackgroundColor = body.style.backgroundColor;
//     textBlock.style.backgroundColor = bodyBackgroundColor;
    
// })
