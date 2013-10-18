window.onload=function(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// console.log(Thing.abc)
var bigCanvas = new BigCanvas();

canvas.addEventListener('mousedown', startTracking, false);
  
  function startTracking(){
    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;

    canvas.addEventListener('mousemove', bigCanvas.getPosition, false);
    if (canvas.addEventListener('mouseup', stopTracking, false)){
    }
  }
  function stopTracking(){
    canvas.removeEventListener('mousemove', bigCanvas.getPosition, false);
  }

  function startEraseTracking(){
    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;

    canvas.addEventListener('mousemove', bigCanvas.erasePosition, false);
    if (canvas.addEventListener('mouseup', stopEraseTracking, false)){
    }
  }
  function stopEraseTracking(){
    canvas.removeEventListener('mousemove', bigCanvas.erasePosition, false);
  }


var clear = document.getElementById("clear");
clear.addEventListener('click', clearCanvas, false);

 function clearCanvas(){
    ctx.clearRect(0, 0, 640, 360);
  }


var erase = document.getElementById("erase");
erase.addEventListener('click', engageErase, false);

  function engageErase(){
    var eraseCanvas = document.getElementById("myCanvas");

    eraseCanvas.addEventListener('mousedown', startEraseTracking, false);
  }

    

// var save = document.getElementById("myCanvas");
// save.toDataURL("image/jp");

 
};