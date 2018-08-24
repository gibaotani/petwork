var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

initialize();



function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
}

function redraw() {
    var PisoY = canvas.height * 0.8;
    c.fillStyle = 'rgb(251, 183, 0)';
    c.fillRect(0,PisoY,canvas.width,canvas.height);
}
