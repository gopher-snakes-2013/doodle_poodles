function initialize() {
  var canvas = document.getElementById("myCanvas");
  draw_it = canvas.getContext('2d');
  canvas.addEventListener('touchmove', getPosition, true);
};

function getPosition() {
  event.preventDefault();
  x = event.targetTouches[1].pageX;
  y = event.targetTouches[1].pageY;

  draw_it.fillStyle = "red";
  draw_it.fillRect(x, y, 10, 10);
  // draw_it.strokeStyle = 'red';
  // draw_it.beginPath();
  // draw_it.moveTo(oldX,oldY);
  // draw_it.lineTo(x,y);
  // draw_it.stroke();

};
