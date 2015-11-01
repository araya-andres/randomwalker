function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const NORTH = 0,
      SOUTH = 1,
      EAST  = 2,
      WEST  = 3;

var canvas = document.getElementById('canvas');
canvas.height = canvas.width = 300;
var ctx = canvas.getContext('2d');

var n = 10;
var k = canvas.height / (2 * n);
var x = y = n;
ctx.beginPath();
ctx.moveTo(k * x, k * y);
while (x > 0 && x < 2 * n && y > 0 && y < 2 * n) {
    switch (getRandomInt(0, 4)) {
        case NORTH : y--; break;
        case SOUTH : y++; break;
        case EAST  : x++; break;
        case WEST  : x--; break;
    }
    ctx.lineTo(k * x, k * y);
}
ctx.stroke();
