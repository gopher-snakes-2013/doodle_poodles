window.onload=function(){

	var canvas = document.getElementById('myCanvas');

	canvas.addEventListener('mousedown', getPosition, false);
};

function getPosition(){
	var x = new Number();
	var y = new Number();

	x = event.x;
	y = event.y;

	alert("x-position: " + x +", y-position: " + y);
}