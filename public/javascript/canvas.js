function initialize() {
  var canvas = document.getElementById("myCanvas");
  canvas.addEventListener('touchstart', startTracking, false);
  canvas.addEventListener('touchmove', getPosition, false);
};
  
function startTracking(){
  event.preventDefault();


  x = event.targetTouches[0].pageX
  y = event.targetTouches[0].pageY;

  // canvas.addEventListener('touchmove' getPosition, false);

  // canvas.addEventListener('touchmove', getPosition, false);
  // if (canvas.addEventListener('touchend', stopTracking, false)){}
};

function getPosition() {
  oldX = x;
  oldY = y;
  x = event.targetTouches[0].pageX
  y = event.targetTouches[0].pageY;

  draw_it = canvas.getContext('2d');
  draw_it.strokeStyle = 'red';
  draw_it.beginPath();
  draw_it.moveTo(xOld,yOld);
  draw_it.lineTo(x,y);
  draw_it.stroke();

};

//   function stopTracking(){
//     canvas.removeEventListener('touchmove', getPosition, false);

//   }

//   function getPosition(){
//     event.preventDefault();

//     xOld = x;
//     yOld = y;

//     x = event.targetTouches[0].pageX;
//     y = event.targetTouches[0].pageY;

//   draw_it = canvas.getContext('2d');
//   draw_it.strokeStyle = 'red';
//   draw_it.beginPath();
//   draw_it.moveTo(xOld,yOld);
//   draw_it.lineTo(x,y);
//   draw_it.stroke();
//   } 
// };