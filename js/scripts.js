var Point = function(x, y) { this.x = x; this.y = y; }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getSteps(n) {
    const NORTH = 0,
          SOUTH = 1,
          EAST  = 2,
          WEST  = 3;

    var x = y = n;
    var steps = [ new Point(x, y) ];

    while (x > 0 && x < 2 * n && y > 0 && y < 2 * n) {
        switch (getRandomInt(0, 4)) {
            case NORTH : y--; break;
            case SOUTH : y++; break;
            case EAST  : x++; break;
            case WEST  : x--; break;
        }
        steps.push(new Point(x, y));
    }
    return steps;
}

function joinTheDots(targetCanvas, gridSize, dots, sideLength) {
    var sideLength = sideLength || 300;
    var ctx = targetCanvas.getContext('2d');
    var p0 = dots.shift();
    var scaleFactor = sideLength / gridSize;

    targetCanvas.height = targetCanvas.width = sideLength;
    ctx.beginPath();
    ctx.moveTo(scaleFactor * p0.x, scaleFactor * p0.y);
    dots.forEach(function(p) {
        ctx.lineTo(scaleFactor * p.x, scaleFactor * p.y);
        ctx.stroke();
    });
    dots.unshift(p0);
}

var canvas = $('#canvas');
var n = 10;
var steps = getSteps(n);
joinTheDots(canvas[0], 2 * n, steps);
canvas.addClass('grid');
$('<p>Number of steps: ' + (steps.length - 1) + '</p>').insertAfter(canvas);
