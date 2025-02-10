let currmoletile;
let currplantile;
let score = 0;
let gameover = false;

// Charger les sons
let hitSound = new Audio("button_06-190439.mp3");
let gameOverSound = new Audio("game-over-arcade-6435.mp3");
let bgMusic = new Audio("retro-game-music-short-245228.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.5;


document.addEventListener("click", function startMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(error => console.log("Problème avec la musique :", error));
    }
    
    document.removeEventListener("click", startMusic);
});

window.onload = function () {
    setGame();
};

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setmole, 1000);
    setInterval(setPlant, 2000);
}

function getrandomtile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole() {
    if (gameover) return;

    if (currmoletile) {
        currmoletile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./MontyMole.webp";

    let num = getrandomtile();
    if (currplantile && currplantile.id == num) return;

    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}

function setPlant() {
    if (gameover) return;

    if (currplantile) {
        currplantile.innerHTML = "";
    }

    const plant = document.createElement("img");
    plant.src = "./Piranha_Plant_3D_Land.webp";

    let num = getrandomtile();
    if (currmoletile && currmoletile.id == num) return;

    currplantile = document.getElementById(num);
    currplantile.appendChild(plant);
}

function selectTile() {
    if (gameover) return;

    if (this == currmoletile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        hitSound.currentTime = 0;
        hitSound.play().catch(error => console.log("Erreur son hit:", error));
    } else if (this == currplantile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOverSound.play().catch(error => console.log("Erreur son game over:", error));

        
        bgMusic.pause();
        bgMusic.currentTime = 0;

        gameover = true;
    }
}
