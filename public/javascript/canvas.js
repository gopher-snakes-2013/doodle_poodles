window.onload=function(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

  canvas.addEventListener('mousedown', startTracking, false);
  
  function startTracking(){
    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;
    canvas.addEventListener('mousemove', getPosition, false);
    if (canvas.addEventListener('mouseup', stopTracking, false)){

    }
    
  }

  function stopTracking(){
    canvas.removeEventListener('mousemove', getPosition, false);

  }


};

