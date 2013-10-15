window.onload=function(){

	var canvas = document.getElementById('myCanvas');

	canvas.addEventListener('mousemove', getPosition, false);
};

function getPosition(){
	var x = new Number();
	var y = new Number();

	x = event.x;
	y = event.y;
var canvas = document.getElementById('myCanvas');
	draw_it = canvas.getContext('2d');
	draw_it.fillStyle = 'red';
	draw_it.fillRect(x,y,5,5);
}