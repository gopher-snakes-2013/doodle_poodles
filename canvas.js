window.onload=function(){
  var my_canvas = document.getElementById("myCanvas");
  my_canvas.addEventListener("mousemove", getPosition, false);
};



function getPosition(event){
  var canvas = document.getElementById("myCanvas");
  
  var x = new Number();
  var y = new Number();

  x = event.x;
  y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log("x is: " + x + "  y is : " + y);

  my_canvas = canvas.getContext('2d');
  my_canvas.fillStyle = 'red';
  my_canvas.fillRect(x,y,5,5);
}

