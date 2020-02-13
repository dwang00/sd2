var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var x = -1;
var y = -1;
c.addEventListener('click', function(e) {drawDot(e)})

var clearbut = document.getElementById("clear");
clearbut.addEventListener('click', clearCanvas);

function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height);
  x = -1;
  y = -1;
  return 0;
}

function drawDot(e) {
  console.log(x, y, e.offsetX, e.offsetY)
  ctx.beginPath();
  if (x != -1) {
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
  }
  ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  x = e.offsetX;
  y = e.offsetY;
}
