function initialize() {
  var canvas = document.getElementById("myCanvas");
  draw_it = canvas.getContext('2d');
  canvas.addEventListener('touchstart', initializePosition, false);
  canvas.addEventListener('touchmove', getPosition, false);
};

function initializePosition() {
  event.preventDefault();
  x = event.targetTouches[0].pageX;
  y = event.targetTouches[0].pageY; 
}

function getPosition() {
  var xOld = x;
  var yOld = y;
  x = event.targetTouches[0].pageX;
  y = event.targetTouches[0].pageY;


  var touches = event.targetTouches;
  draw_it.strokeStyle = 'red';
  draw_it.beginPath();
  draw_it.moveTo(x,y);
  draw_it.lineTo(xOld,yOld);
  draw_it.stroke();
};
