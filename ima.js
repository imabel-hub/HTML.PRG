let currmoletile;


window.onload = function() {
    setGame();
}

function setGame() {
    // Set up the grid for the game board in HTML
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        // <div id="0-8"></div>

        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);

        
    }

    setInterval(setmole,2000);
    
}

function getrandomtile(){
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

function setmole () {

    if (currmoletile) {
        currmoletile.innerHTML ="";
    }

let mole = document.createElement("img");
mole.src ="./MontyMole.webp";

let num = getrandomtile();

    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);







}
