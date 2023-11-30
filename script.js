const jsworks = document.querySelector(".jsworks");




function Project(name, description, image, page, code) {
    this.name = name,
        this.description = description,
        this.image = image,
        this.page = page,
        this.code = code
}

const usersManager = new Project(
    "Users Manager",
    "This is a project that Manage Users",
    {
        url: "./img/JSProjects/UsersManager.png",
        alt: "Users Manager"
    },
    "https://konstantinusmutabilis.github.io/Users-Manager/",
    "https://github.com/KonstantinusMutabilis/Users-Manager/"
);

const pageBuilder = new Project(
    "Page Builder",
    "This Project is tool pallete for creating new html elements",
    {
        url: "./img/JSProjects/PageBuilder.png",
        alt: "Page Builder"
    },
    "https://konstantinusmutabilis.github.io/Page-Builder/",
    "https://github.com/KonstantinusMutabilis/Page-Builder/"
);

const memoryGame = new Project(
    "Memory Game",
    "This is memory game where you should chuse 2 cards, and they must be the same color",
    {
        url: "./img/JSProjects/MemoryGame.png",
        alt: "Memory Game"
    },
    "https://konstantinusmutabilis.github.io/Memory-Game/",
    "https://github.com/KonstantinusMutabilis/Memory-Game/"

)

const projectsArray = new Array();

projectsArray.push(usersManager, pageBuilder, memoryGame);

function cardCreation() {

    projectsArray.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add('card');
        let img = document.createElement("img");
        img.setAttribute('src', element.image.url);
        img.setAttribute('alt', element.image.alt);
        img.classList.add('lp');
        card.appendChild(img);
        let desc = document.createElement('div');
        desc.classList.add('card-description');
        let h = createElement('h3');
        h.textContent = element.name;
        desc.appendChild(h);
        let p = createElement('p');
        p.textContent = element.description;
        desc.appendChild(p);
        card.appendChild(desc);
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('card-button');
        let button = document.createElement('input');
        button.setAttribute('value', 'לפרויקט');
        buttonDiv.appendChild(button);
        card.appendChild(buttonDiv);
        jsworks.appendChild(card);
    });

}
cardCreation();