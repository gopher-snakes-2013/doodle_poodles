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

  function getPosition(){

    xOld = x;
    yOld = y;

    x = event.x - canvas.offsetLeft - 5;
    y = event.y - canvas.offsetTop - 5;

    draw_it = canvas.getContext('2d');
    draw_it.strokeStyle = colorPicker();
    draw_it.beginPath();
    draw_it.moveTo(xOld,yOld);
    draw_it.lineTo(x,y);
    draw_it.stroke();
    draw_it.lineWidth = lineWidth();
  }

  var clear = document.getElementById("clear");
  clear.addEventListener('click', clearCanvas, false);

  function clearCanvas(){
    ctx.clearRect(0, 0, 640, 360);
  }


  function lineWidth(){
    penSize=[1, 3, 5];
    var widthDropdown = document.getElementById("pen_size");
    return penSize[widthDropdown.selectedIndex];
  }

  function colorPicker(){
    var colorDropdown = document.getElementById("color_pallet");
    return colorDropdown.value;
  }
};

