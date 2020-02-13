var mode = 0
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
c.addEventListener('click', function(e) {drawShape(e)});

var clearbut = document.getElementById("clear");
clearbut.addEventListener('click', clearCanvas);

var modebut = document.getElementById("mode");
modebut.addEventListener('click', changeMode);


function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height);
  return 0;
}

function changeMode() {
  if (mode == 0) {
    mode = 1;
  }
  else {
    mode = 0
  }
  console.log(mode);
}

function drawShape(e) {
  if (mode == 0) {
    ctx.fillRect(e.offsetX, e.offsetY, 50, 100);
    console.log("rect");
  }
  else {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 3, 0, 2*Math.PI);
    ctx.fill();
    console.log("circle");
  }
}

/*e.preventDefault()
    stops element from doing default action
  ctx.beginPath()
    creates path for the ctx to draw on
  e.offsetX
    x coor of cursor based on padding of target object
  e.offsetY
    x coor of cursor based on padding of target object
*/
