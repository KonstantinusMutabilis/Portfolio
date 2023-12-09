const jsworks = document.querySelector(".jsworks");




function Project(id, name, description, image, page, code, way) {
    //this.id = id,
    this.name = name,
        this.description = description,
        this.image = image,
        this.page = page,
        this.code = code,
        this.way = way
}

const usersManager = new Project(
    //0,
    "Users Manager",
    "This is a project that Manage Users",
    {
        url: "./img/JSProjects/UsersManager.png",
        alt: "Users Manager"
    },
    "https://konstantinusmutabilis.github.io/Users-Manager/",
    "https://github.com/KonstantinusMutabilis/Users-Manager/",
    "./Users Manager/usersmanager.html"

);

const pageBuilder = new Project(
    //1,
    "Page Builder",
    "This Project is tool pallete for creating new html elements.",
    {
        url: "./img/JSProjects/PageBuilder.png",
        alt: "Page Builder"
    },
    "https://konstantinusmutabilis.github.io/Page-Builder/",
    "https://github.com/KonstantinusMutabilis/Page-Builder/",
    "./Page Builder/pagebuilder.html"
);

const memoryGame = new Project(
    //2,
    "Memory Game",
    "This is memory game where you should chuse 2 cards, and they must be the same color",
    {
        url: "./img/JSProjects/MemoryGame.png",
        alt: "Memory Game"
    },
    "https://konstantinusmutabilis.github.io/Memory-Game/",
    "https://github.com/KonstantinusMutabilis/Memory-Game/",
    "./Memory Game/memorygame.html"

)

const creditCard = new Project(
    //3,
    "Credit Card",
    "This is credit card form that sends data to email after filling all fields right way",
    {
        url: "./img/JSProjects/CreditCard.png",
        alt: "Credit Card"
    },
    " https://konstantinusmutabilis.github.io/Credit-Card/",
    "https://github.com/KonstantinusMutabilis/Credit-Card/",
    "./Credit Card/creditcard.html"

)

const shoppingCart = new Project(
    //4,
    "Shopping Cart",
    "This is shopping cart. Here is a lot of object oriented work",
    {
        url: "./img/JSProjects/ShoppingCart.png",
        alt: "Credit Card"
    },
    "https://konstantinusmutabilis.github.io/Shopping-Cart/",
    "https://github.com/KonstantinusMutabilis/ToDo-List",
    "./ToDoList/todolist.html"

)


const ToDoList = new Project(
    //5,
    "ToDo List",
    "Todo List created with Bootstrap and Typescript, there is options to add, edit, delete and find tasks",
    {
        url: "./img/JSProjects/ToDoList.png",
        alt: "ToDo List"
    },
    "https://konstantinusmutabilis.github.io/ToDo-List/",
    "https://github.com/KonstantinusMutabilis/Shopping-Cart/",
    "./Shopping Cart/shoppingcart.html"

)



const projectsArray = new Array();

projectsArray.push(usersManager, pageBuilder, memoryGame, creditCard, shoppingCart);

function cardCreation() {


    projectsArray.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add('card', 'js');
        let img = document.createElement("img");
        img.setAttribute('src', element.image.url);
        img.setAttribute('alt', element.image.alt);
        img.classList.add('lp');
        card.appendChild(img);
        let desc = document.createElement('div');
        desc.classList.add('card-description');
        let h = document.createElement('h3');
        h.textContent = element.name;
        desc.appendChild(h);
        let p = document.createElement('p');
        p.textContent = element.description;
        desc.appendChild(p);
        card.appendChild(desc);
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('card-button');
        let a = document.createElement('a');
        a.setAttribute('href', element.way);
        a.setAttribute('target', "_blank");
        buttonDiv.appendChild(a);
        let button = document.createElement('input');
        button.setAttribute('type', "button");
        button.setAttribute('value', 'לפרויקט');
        button.classList.add('jsbutton');
        a.appendChild(button);
        card.appendChild(buttonDiv);
        jsworks.appendChild(card);
    });

}


function popUp() {
    let cardslist = document.querySelectorAll('.js');
    let cards = [...cardslist];

    let Project = document.querySelector(".Project");
    let Display = document.getElementById("modal");

    cards.forEach(card => {

        let i = cards.indexOf(card)

        document.querySelector('.jsbutton').addEventListener("keyup", function add(event) {
            event.preventDefault();



            console.log("works");
            Display.style.display = "flex";

            let img = document.createElement("img");
            img.setAttribute('src', card.img.url);
            img.setAttribute('alt', card.img.alt);

            Project.appendChild(img);
            let desc = document.createElement('div');
            desc.classList.add('card-description');
            let h = document.createElement('h3');
            h.textContent = card.name;
            desc.appendChild(h);
            let p = document.createElement('p');
            p.textContent = element.description;
            desc.appendChild(p);
            Project.appendChild(desc);
            let buttonDiv = document.createElement('div');
            buttonDiv.classList.add('card-button');

            let a1 = document.createElement('a');
            a1.setAttribute('href', projectsArray[i].code);
            a1.setAttribute('target', "_blank");
            buttonDiv.appendChild(a1);
            let button1 = document.createElement('input');
            button1.setAttribute('type', "button");
            button1.setAttribute('value', "להורדת פרויקט");
            a1.appendChild(button1);
            let a2 = document.createElement('a');
            a2.setAttribute('href', projectsArray[i].page);
            a2.setAttribute('target', "_blank");
            buttonDiv.appendChild(a2);
            let button2 = document.createElement('input');
            button2.setAttribute('type', "button");
            button2.setAttribute('value', "לאתר");
            a2.appendChild(button2);
            Project.appendChild(buttonDiv);


        });



    })


    window.onclick = function (e) {
        if (e.target === Display) {
            Display.style.display = "none";
            Project = "";

        }
    };


}


cardCreation();

popUp();