window.onload=function(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var button = document.getElementById('saveImage');

button.addEventListener("click", showImage, false);

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


function showImage(){ 
  var dataURL = canvas.toDataURL();
  document.getElementById('canvasImg').src = dataURL; 
  // console.log(dataURL);
}
};

