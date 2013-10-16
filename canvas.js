var random = 5;

window.onload=function(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//JS code goes in here

<<<<<<< Updated upstream
};
=======
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



	
};





>>>>>>> Stashed changes
