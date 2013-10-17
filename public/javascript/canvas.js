window.onload=function(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

  canvas.addEventListener('touchstart', getPosition, false);
  
  function startTracking(){
    // alert("startTracking started")
    event.preventDefault()

    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;
    canvas.addEventListener('touchmove', getPosition, false);
    if (canvas.addEventListener('touchend', stopTracking, false)){

    }
    
  }

  function stopTracking(){
    canvas.removeEventListener('touchmove', getPosition, false);

  }

  function getPosition(){
    event.preventDefault()
    // xOld = x;
    // yOld = y;

    x = event.x;
    y = event.y;

    draw_it = canvas.getContext('2d');
    // draw_it.strokeStyle = 'red';
    // draw_it.fillStyle = 'red';
    // draw_it.beginPath();
    draw_it.rect(x, y, 5, 5);
    // draw_it.moveTo(xOld,yOld);
    // draw_it.lineTo(x,y);
    // draw_it.stroke();
  } 
};