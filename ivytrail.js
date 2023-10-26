var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext('2d');
var particles = [];
var mousePos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

var multiply = 100;

function getRandomLeafTexPosition() {
  return {
    x: Math.round(Math.random() * 4) * 415,
    y: Math.round(Math.random() * 2) * 450
  }
}

// var myInterval = setInterval(function tick() {
//   if (particles.length < multiply) {
//     let p = new Particle();
//     particles.push(p);
//   }
// }, 150);

let vinePos = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawVine(ctx);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
  }

  requestAnimationFrame(draw);
}

function drawVine(ctx) {
  let mouseCopy = JSON.parse(JSON.stringify(mousePos));
  if (vinePos.length === 0) vinePos.push(mouseCopy);

  if (distance(vinePos[vinePos.length - 1], mousePos) > 30) {
    vinePos.push(mouseCopy);

    if (particles.length < multiply) {
      let p = new Particle();
      particles.push(p);
    }

    if (vinePos.length >= 30)
      vinePos.shift();
  }

  // Start a new Path
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#a86d32';

  ctx.beginPath();
  ctx.moveTo(vinePos[0].x, vinePos[0].y);
  

  for (let i = 0; i < vinePos.length; i++) {
    ctx.globalAlpha = 1-i/(vinePos.length);

    ctx.lineTo(vinePos[i].x, vinePos[i].y);

    ctx.stroke();
  }
}

function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.radius = 1;
    this.x = mousePos.x;
    this.y = mousePos.y;
    this.explosionRadius = 0;
    this.angle = 0;
    this.velocity = {
      x: Math.sin(this.angle) * this.explosionRadius,
      y: Math.cos(this.angle) * this.explosionRadius,
    };
    this.alpha = 1;

    let img = new Image();
    img.src = "img/leaves.png";
    img.crossOrigin = true;
    this.image = img;
    this.start = Date.now();

    this.texPos = getRandomLeafTexPosition();
  }

  draw() {
    ctx.beginPath();
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.image, this.texPos.x, this.texPos.y, 450, 450, this.x - 25, this.y - 25, 50, 50);
    ctx.globalAlpha = 1;
    ctx.fill();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (Date.now() - this.start >= 1000)
      this.alpha = this.alpha * 0.9;

    this.color = Math.abs(this.color - 5);
    if (this.alpha < 0.05) {
      this.reset();
    }
  }
}

function follow(e) {
  mousePos.x = e.pageX;
  mousePos.y = e.pageY;
}

function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
canvas.addEventListener('mousemove', follow);

resize();
draw();