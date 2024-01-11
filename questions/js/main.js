// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle(".show-text")
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//         // document.body.style.backgroundImage("position", "center")
//     })
// })\
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text")
            }
        })
    question.classList.toggle("show-text");
    })
})
