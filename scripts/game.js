let character = document.getElementById("character");
let positionX = 100;
let positionY = 25;
let step = 50;

function moveLeft () {
    positionX -= step;
    if (positionX < 0) {
        positionX = 0;
    }
    character.style.left = `${positionX}px`;
}

function moveRight () {
    positionX += step;
    if (positionX > 350) {
        positionX = 350;
    }
    character.style.left = `${positionX}px`;
}
function moveUp () {
    positionY -= step;
    if (positionY < 0) {
        positionY = 0;
    }
    character.style.top = `${positionY}px`;
}

function moveDown () {
    positionY += step;
    if (positionY > 220) {
        positionY = 220;
    }
    character.style.top = `${positionY}px`;
}