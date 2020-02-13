var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = 1;
var diff = 1;
var a = 0;

var startbut = document.getElementById("start");
startbut.addEventListener('click', start);

var stopbut = document.getElementById("stop");
stopbut.addEventListener('click', stop);

function start() {
  if (a == 0) {
    a = window.requestAnimationFrame(draw);
  }
}

function stop() {
  console.log(a);
  window.cancelAnimationFrame(a);
  a = 0;
}

function draw(timestamp) {
  console.log(r);
  if (r <= 0 || r >= c.width/2) {
    diff *= -1;
  }
  r += diff;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, r, 0, 2*Math.PI);
  ctx.fill();
  a = window.requestAnimationFrame(draw);
}
