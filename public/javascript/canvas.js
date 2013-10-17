function initialize() {
  var canvas = document.getElementById("myCanvas");
  draw_it = canvas.getContext('2d');
  canvas.addEventListener('touchmove', getPosition, true);
};

function getPosition() {
  event.preventDefault();
  xTouches = event.targetTouches.pageX
  yTouches = event.targetTouches.pageY

  x = xTouches[0]
  y = yTouches[0]
  oldX = xTouches[1]
  oldY = yTouches[1]

  draw_it.fillStyle = "red";
  draw_it.fillRect(x, y, 10, 10);
  // draw_it.strokeStyle = 'red';
  // draw_it.beginPath();
  // draw_it.moveTo(oldX,oldY);
  // draw_it.lineTo(x,y);
  // draw_it.stroke();

};
