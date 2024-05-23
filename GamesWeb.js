const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let nave = {
    x: canvas.width / 2,
    y: canvas.height - 160,
    width: 100,
    height: 164,
    img: new Image()
};

nave.img.src = 'heroi.png';

let tiros = [];

function drawNave() {
    ctx.drawImage(nave.img, nave.x, nave.y, nave.width, nave.height);
}

function drawTiros() {
    tiros.forEach((tiro, index) => {
        ctx.fillStyle = 'orange';
        ctx.fillRect(tiro.x, tiro.y, tiro.width, tiro.height);
        tiro.y -= tiro.speed;
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas antes de redesenhar
    drawNave();
    drawTiros();
    requestAnimationFrame(draw);
}

function moveNave(e) {
    switch(e.key) {
        case 'q':
            nave.x -= 10;
            break;
        case 'e':
            nave.x += 10;
            break;
        case 'ArrowDown':
            atirar();
            break;
    }
}

function atirar() {
    tiros.push({
        x: nave.x + nave.width / 2 - 2.5,
        y: nave.y,
        width: 5,
        height: 20,
        speed: 5
    });
}

nave.img.onload = function() {
    draw();
};

document.addEventListener('keydown', moveNave);