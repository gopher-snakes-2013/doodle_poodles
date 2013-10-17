function initialize() {


  var canvas = document.getElementById("myCanvas");

  canvas.addEventListener('touchstart', startTracking, false);
}
  
  function startTracking(){
    event.preventDefault();

    x = event.targetTouches[0].pageX
    y = event.targetTouches[0].pageY;

    alert("x = " x + " y = " y);

    canvas.addEventListener('touchmove', getPosition, false);
    if (canvas.addEventListener('touchend', stopTracking, false)){
    }
    
  }

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