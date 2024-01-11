const reviews = [
    {
        id: 1,
        name: "Valera Drogobrat",
        job: "dvornik",
        img: "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",

    },
    {
        id: 2,
        name: "Gosha Skoropadskiy",
        job: "Teacher",
        img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        text: "Lorem Ipsum is simply dummy the industry's standard dummy text ever text of the printing and typesetting industry. Lorem Ipsum has been ",

    },
    {
        id: 3,
        name: "Soso Pavliashvili",
        job: "Debil",
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg",
        text: "Lorem Ipsum has been the industry's standard dummy ext evert. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    },
    {
        id: 4,
        name: "Vitalik Vakulenko",
        job: "Full-stack dev",
        img: "C:/Users/123456789/Pictures/Saved Pictures/VitalikVISA.jpg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",

    }
]
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prev_button = document.querySelector(".prev-btn");
const next_button = document.querySelector(".next-btn");
const random_button = document.querySelector(".random-btn");


let current_item = 3;

window.addEventListener('DOMContentLoaded', function(){
    
    GetPerson();
})
prev_button.addEventListener("click", function(){
    current_item--;
    if(current_item < 0)
    {
    current_item = 3;
    }
    console.log(current_item);
    GetPerson();
})
next_button.addEventListener("click", function(){
    current_item++;
    if(current_item > reviews.length-1)
    {
    current_item = 0;
    }
    console.log(current_item);
    GetPerson();
})
random_button.addEventListener("click", function(){
    current_item = getRandomItem();
    console.log(current_item);
    GetPerson();
})
function getRandomItem(){
    return Math.floor(Math.random() * reviews.length);
}
function GetPerson(){
    const person = reviews[current_item];
    img.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;
}