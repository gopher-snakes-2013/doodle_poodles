window.onload=function(){
  var canvas = document.getElementById('myCanvas');

  canvas.addEventListener('mousedown', startTracking, false);

  function startTracking(){
    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;
    canvas.addEventListener('mousemove', getPosition, false);
    canvas.addEventListener('mouseup', stopTracking, false)
  }

  function stopTracking(){
    canvas.removeEventListener('mousemove', getPosition, false);
  }

  var xOld, yOld;
  function getPosition(){

    xOld = x;
    yOld = y;

    x = event.x - canvas.offsetLeft - 5;
    y = event.y - canvas.offsetTop - 5;

    draw_it = canvas.getContext('2d');
    draw_it.strokeStyle = 'red';
    draw_it.beginPath();
    draw_it.moveTo(xOld,yOld);
    draw_it.lineTo(x,y);
    draw_it.stroke();
  }
};
