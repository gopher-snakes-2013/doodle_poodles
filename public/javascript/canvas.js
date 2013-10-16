window.onload=function(){

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');


  canvas.addEventListener('mousedown', moveMouseDraw, false); 
};

function getPosition(){
      
  x = event.x;
  y = event.y;

  var canvas = document.getElementById('myCanvas');
    draw_it = canvas.getContext('2d');
    draw_it.fillStyle = 'red';
    draw_it.fillRect(x,y,5,5);

}


function moveMouseDraw(){
  var canvas = document.getElementbyId('myCanvas');
  canvas.addEventListener('mousemove', getPosition, false); 
}
