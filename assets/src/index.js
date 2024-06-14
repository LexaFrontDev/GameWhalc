let currMoleTile,
 currPlantTile,
 score = 0,
 gameOver = false,
 winAudio = document.getElementById("winAudio"),
 GameOver = document.getElementById("GameOverAudio")




window.onload = function() {
    setGame()
}

function setGame() {
    for(let i = 0; i < 9; i++ ){
        let tile = document.createElement('div')
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
 
function setMole() {
    /* let mole = document.createElement("img").src = "./assets/image/monty-mole.png"; <-- error 404 --> */
    
    if(gameOver) {
        return;
    }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
   
    let mole = document.createElement("img");
    mole.src = "./assets/image/monty-mole.png";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id === num){
        return
    }
    currMoleTile =  document.getElementById(num);
    currMoleTile.appendChild(mole);

}



function setPlant() {

    if(gameOver) {
        return; 
    }

    if(currPlantTile) {
        currPlantTile.innerHTML = "";
    }
 
    let plant = document.createElement('img');
    plant.src = "./assets/image/piranha-plant.png";   
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id === num){
        return
    }

    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant);
    
}


function selectTile() {
    if(gameOver) {
        return;
    }

    if(this == currMoleTile ) {
   
       score += 10;
       if (score % 50 === 0 && score !== 0) {
        document.getElementById("score").style.color = '#00FF00';
        winAudio.play();
        }


    document.getElementById("score").innerText = score.toString();
    }else if(this == currPlantTile){
        GameOver.play()
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameOver = true;
    }
}

