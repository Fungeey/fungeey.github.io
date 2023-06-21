
let projects = [
    {
        title: "digital art gallery",
        gitLink: "https://github.com/Fungeey/artgallery",
        imgSRC: "gallery2.gif",
        description: "A digital art gallery showcasing my sister's art. <a href = 'https://fungeey.github.io/artgallery/' target='_blank'>check it out!</a>",
        tags: ["Javascript", "HTML", "CSS", "Three.js"],
        width: 2,
        highlight: true
    },
    {
        title: "neural network xor solver",
        gitLink: "https://github.com/Fungeey/perceptronxor",
        imgSRC: "nn.gif",
        description: "A neural network that learns to implement an XOR gate. <br> <a target='_blank' href = 'https://fungeey.github.io/perceptronxor/'>demo</a>",
        tags: ["Javascript", "HTML", "CSS"],
        highlight: true
    },
    {
        title: "landscapes",
        gitLink: "https://github.com/Fungeey/Landscapes",
        imgSRC: "landscapes.gif",
        description: "Makes a procedurally generated topographic map using Processing 3 and P5.js. It uses 2D perlin noise to generate a heightmap which is visualized with color.",
        tags: ["C#", "Unity"]
    },
    {
        title: "personal website",
        gitLink: "https://github.com/Fungeey/fungeey.github.io",
        imgSRC: "website.gif",
        description: "The website you are viewing right now!",
        tags: ["Javascript", "HTML", "CSS"]
    },
    {
        title: "boids",
        gitLink: "https://github.com/Fungeey/MonoBoids",
        imgSRC: "boids.gif",
        description: "A prototype flocking simulator with the <a href ='https://en.wikipedia.org/wiki/Boids' target='_blank'>boids algorithm</a>. ",
        tags: ["C#", "MonoGame"]
    },
    {
        title: "inventory management website",
        gitLink: "",
        imgSRC: "store2.gif",
        description: "A final project which allows users and admins to log in so they can create, buy, search, and sell products. The users and product information is stored in an Oracle SQL database and Java servlets were used to handle the backend. The project was structured with a microservice architecture.",
        tags: ["Java", "SQL", "Kubernetes", "Docker"],
        width: 2,
        highlight: true
    },
    {
        title: "skateport",
        gitLink: "",
        imgSRC: "skate.gif",
        description: "SkatePort is a 2nd place entry for Metropolitan Engineering Competition 2022. It is a prototype storage locker for a skateboard, which is secured using an RFID access card.",
        tags: ["Arduino"],
        highlight: true
    },
    {
        title: "spherical world",
        gitLink: "",
        imgSRC: "sphericalworld.gif",
        description: "This is a 3D world where the planet is inside-out.",
        tags: ["C#", "Unity"]
    },
    {
        title: "chess",
        gitLink: "https://github.com/Fungeey/Chess",
        imgSRC: "chess.gif",
        description: "An (unfinished) chess engine. Here the computer is playing against itself, by choosing random (but valid) moves. The computer doesn't know how to rank the possible moves and choose the best one yet. ",
        tags: ["C#", "MonoGame"]
    },
    {
        title: "car system",
        gitLink: "https://github.com/Fungeey/IceCreamJam",
        imgSRC: "cars.gif",
        description: "For a game jam, I created an automatic system to allow cars to drive along a network of roads to a random destination. Each intersection acts like a four-way stop.",
        tags: ["C#", "MonoGame"]
    },
    {
        title: "minesweeper",
        gitLink: "https://github.com/Fungeey/Minesweeper",
        imgSRC: "minesweepercropped.gif",
        description: "A final project made in high school.",
        tags: ["Java", "LibGDX"]
    },
    {
        title: "gravekeeper",
        gitLink: "https://github.com/Fungeey/GravekeeperGame",
        imgSRC: "grave.gif",
        description: "An extremely claustrophobic <a href ='https://en.wikipedia.org/wiki/Sokoban' target='_blank'>sokoban</a> style game I made in one week with my friend. You play as a gravekeeper who's goal is to place souls in graves. However, space is very limited because once graves are full, they become solid blocks.",
        tags: ["C#", "Unity"]
    },
    {
        title: "command line roguelike",
        gitLink: "",
        imgSRC: "arrowgame.gif",
        description: "The first project I ever made, using the console output. It features randomly generated levels!",
        tags: ["C#"]
    }
]


function showContent(){
    let projectGrid = document.getElementsByClassName("projectGrid")[0];

    let template = document.getElementsByTagName("template")[0];

    //get the div element from the template:
    let item = template.content.querySelector(".grid-item");

    for(let i = 0; i < projects.length; i++){
        //Create a new node, based on the template:
        let newProjectItem = document.importNode(item, true);

        if(projects[i].width == 2)
            newProjectItem.className = "grid-item--width2";
        

        let gridContainer = newProjectItem.querySelector(".gridContainer");
        gridContainer.querySelector("h3").innerHTML = projects[i].title;
        gridContainer.querySelector("p").innerHTML = projects[i].description;

        if(projects[i].highlight)
            gridContainer.className = "gridContainerHighlight";
        
        let img = gridContainer.querySelector(".projImg");
        img.src = "img/" + projects[i].imgSRC;
        img.addEventListener('load', initPackery)

        if(projects[i].gitLink){
            gridContainer.querySelector("a").href = projects[i].gitLink;
        }else{
            gridContainer.querySelector("a").remove();
        }

        for(let j = 0; j < projects[i].tags.length; j++){
            gridContainer.querySelector(".tags").innerHTML += "<mark>" + projects[i].tags[j] + "</mark>";
        }

        projectGrid.appendChild(newProjectItem);
    }
}

showContent();

// Reload Masonry when images are loaded
let grid = document.querySelector('.projectGrid');

function initPackery(){
    var pckry = new Packery( grid, {
    itemSelector: ['.grid-item', '.grid-item--width2'],
    columnWidth: 300,
    isFitWidth: true,
    gutter: 0
    });
}