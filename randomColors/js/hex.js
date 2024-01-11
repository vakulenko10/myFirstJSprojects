const clickMebtn = document.querySelector("#clickMeBtn");
const body = document.body;
const colorText = document.querySelector(".text_color");
const hexNumbersList = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , "A", "B", "C", "D", "E", "F"];
clickMebtn.addEventListener("click", function(){
    let hex = "#";
    for(let i = 0; i<6; i++){
        hex+=hexNumbersList[getRandomNumber()];
    }
    body.style.backgroundColor = hex;
    colorText.textContent = hex; 
    console.log(hex);
    
})
function getRandomNumber(){
    return Math.floor(Math.random() * hexNumbersList.length);
}