const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: 'https://static01.nyt.com/images/2016/06/15/dining/15PANCAKEGUIDE3-WEB/15PANCAKEGUIDE3-WEB-videoSixteenByNineJumbo1600.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/86/9d/db/canada-s-diner-double.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 3,
        title: "pizza napoleatana",
        category: "lunch",
        price: 15.99,
        img: 'https://www.giallozafferano.com/images/251-25178/Pizza-napoletana_1200x800.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 4,
        title: "pizza salsiccia",
        category: "lunch",
        price: 15.99,
        img: 'https://salsiccia.pl/wp-content/uploads/2017/09/tn_2019.09.13_pizza_salsiccia_19.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 5,
        title: "caprese salad",
        category: "breakfast",
        price: 10.99,
        img: 'https://www.seriouseats.com/thmb/5kQKbm3V-zgurSr95PTITqaS_vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caprese-salad-recipe-hero-05_1-9ce2f9b0601c45279e07320f9548fa66.JPG',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 6,
        title: "greek salad",
        category: "breakfast",
        price: 10.99,
        img: 'https://www.mygreekdish.com/wp-content/uploads/2013/05/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 7,
        title: "french onion soup",
        category: "lunch",
        price: 12.99,
        img: 'https://static01.nyt.com/images/2023/01/29/multimedia/29souprex-french-wpfh/29souprex-french-wpfh-threeByTwoMediumAt2X.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 8,
        title: "tomato soup",
        category: "lunch",
        price: 11.99,
        img: 'https://sharedappetite.com/wp-content/uploads/2017/04/8530112959_5515654e3c-2.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 9,
        title: "blueberry cheesecake",
        category: "shakes",
        price: 9.99,
        img: 'https://smoothierecipes.com/media/cache/4a/91/4a91851da1b5bac646006212230ff0c6.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 10,
        title: "triple nut caramel",
        category: "shakes",
        price: 9.99,
        img: 'https://i.ytimg.com/vi/-b3r1szVXJI/maxresdefault.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
    {
        id: 11,
        title: "buttermilk pancakes",
        category: "dinner",
        price: 15.99,
        img: 'https://static01.nyt.com/images/2016/06/15/dining/15PANCAKEGUIDE3-WEB/15PANCAKEGUIDE3-WEB-videoSixteenByNineJumbo1600.jpg',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque hic cupiditate ad repudiandae! Quos numquam hic enim illo magnam?',
    },
]
const section_center = document.querySelector(".section-center");
const btnsContainer = document.querySelector(".filter-buttons");

// const filter_buttons = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
                
                
            </header>
            <div class="underline_"></div>

            <p class="item-text">
                ${item.desc}
            </p>

        </div>
        </article>` ;
    });
    displayMenu = displayMenu.join("");
    section_center.innerHTML = displayMenu;
}
function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
       
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["all"])
    let btns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-ctgr=${category}>${category}</button>`;
    })
    
    readyBtns = btns.join("");
    btnsContainer.innerHTML = readyBtns;
    CreateEventListenerForButtons();
}
function CreateEventListenerForButtons(){
    const filter_buttons = document.querySelectorAll(".filter-btn")
    filter_buttons.forEach(function(btn){
        btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.ctgr;
        const menuCategory = menu.filter(function(menu_item){
            if(menu_item.category === category){
                return menu_item;
            }
        })
        if(category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
        })
    })
}

