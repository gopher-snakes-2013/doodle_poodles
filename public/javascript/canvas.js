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

    x = event.x - canvas.offsetLeft - 5;
    y = event.y - canvas.offsetTop - 5;

    draw_it = canvas.getContext('2d');
    draw_it.strokeStyle = 'red';
    draw_it.beginPath();
    draw_it.moveTo(xOld,yOld);
    draw_it.lineTo(x,y);
    draw_it.stroke();
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
    eraseCanvas.addEventListener('click', eraseTheCanvas, false);
    function eraseTheCanvas(){
      x = event.x - canvas.offsetLeft - 5;
      y = event.y - canvas.offsetTop - 5;
      ctx.clearRect(x, y, 10, 10);
    }
  }

var save = document.getElementById("myCanvas")
save.toDataURL("image/jp")

 
};