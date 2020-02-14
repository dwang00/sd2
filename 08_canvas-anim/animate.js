var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = 1;
var diff = 1;
var a = 0;

var startbut = document.getElementById("start");
startbut.addEventListener('click', draw);

var stopbut = document.getElementById("stop");
stopbut.addEventListener('click', stop);

var dvdbut = document.getElementById("dvd");
dvdbut.addEventListener('click', dvd);

function stop() {
  console.log(a);
  window.cancelAnimationFrame(a);
  a = 0;
}

function draw(timestamp) {
  window.cancelAnimationFrame(a);
  a = window.requestAnimationFrame(draw);
  console.log(r);
  if (r <= 0 || r >= c.width/2) {
    diff *= -1;
  }
  r += diff;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, r, 0, 2*Math.PI);
  ctx.fill();
}

var logo = new Image();
logo.src = "logo_dvd.jpg";
var w = ctx.canvas.clientWidth;
var h = ctx.canvas.clientHeight;
var x = Math.floor(Math.random() * (w - 90));
var y = Math.floor(Math.random() * (h - 60));
var dx = 1;
var dy = 1;

function dvd() {
  window.cancelAnimationFrame(a);
  ctx.clearRect(0, 0, c.width, c.height);
  if (x + 5 == 0 || x + 85 == w) {
    dx *= -1;
  }
  if (y + 10 == 0 || y + 50 == h) {
    dy *= -1;
  }
  x += dx;
  y += dy;
  ctx.drawImage(logo, x, y, 90, 60);
  a = window.requestAnimationFrame(dvd);
}
