var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var r = 1;
var diff = 1;
var a = 0;
var logo = new Image();
logo.src = "logo_dvd.jpg";

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

function dvd() {
  ctx.clearRect(0, 0, c.width, c.height);
  var w = ctx.canvas.clientWidth;
  var h = ctx.canvas.clientHeight;
  ctx.drawImage(logo, Math.floor(Math.random() * (w - 90)), Math.floor(Math.random() * (h - 60)), 90, 60);
}
