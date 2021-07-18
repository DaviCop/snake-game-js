const BG_COR2 = '#231f20';
const COR_COBRA = '#c2c2c2';
const COR_COMIDA = '#e66916';
const gameScreen = document.getElementById('gameScreen');

let canvas, ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 600;

    ctx.fillStyle = "#231f20";

    
    ctx.fillRect = (0, 0, canvas.width, canvas.height);

    document.addEventListener('keydown', keydown);
}

function keydown(e){
    console.log(e.keyCode);
}

init();