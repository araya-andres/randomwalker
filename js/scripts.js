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

function draw(canvas, points, side) {
    var side = side || 300;
    var ctx = canvas.getContext('2d');
    var p0 = points.shift();
    var k = side / (2 * p0.x);

    canvas.height = canvas.width = side;
    ctx.beginPath();
    ctx.moveTo(k * p0.x, k * p0.y);
    points.forEach(function(p) {
        ctx.lineTo(k * p.x, k * p.y);
        ctx.stroke();
    });
}

var canvas = document.getElementById('canvas');
draw(canvas, getSteps(10), 500);
