window.onload=function(){
var canvas = document.getElementById('myCanvas');
var draw_it = canvas.getContext('2d');

mouseDown = canvas.addEventListener('mousedown',getInitialPosition, false);
mouseUp = canvas.removeEventListener('mouseup',drawSmoothLine, false);
mouseOver = canvas.addEventListener('mouseover',saveEvent, false);
mouseOut = canvas.removeEventListener('mouseout',drawSmoothLine, false);
mouseMove = canvas.addEventListener('mousemove', getCurrentPosition);


if (mouseDown){}
if (mouseMove){}
	drawSmoothLine();


	function saveEvent(){
		myEvent = event;
	}

	function getInitialPosition(){
		xInitial = event.x;
		yInitial = event.y;
	}

	function getCurrentPosition(){
		xStart = xInitial;
		yStart = yInitial;
		x = event.x;
		y = event.y;
	}

	function drawSmoothLine(xStart, yStart, x, y){
		draw_it.strokeStyle = 'red';
		draw_it.beginPath();
		draw_it.moveTo(xStart,yStart);
		draw_it.lineTo(x,y);
		draw_it.stroke();
	}

};




// //JS code goes in here

// 	canvas.addEventListener('mouseover', drawOnCanvasOnly, false);

// 	function drawOnCanvasOnly (){
// 		canvas.addEventListener('mousedown', startTracking, false);
// 		if (canvas.addEventListener('mouseout', stopAndReCalc, false)){

// 		}
// 	}
	
// 	function reCalcPosition(){
		
// 		xOld = event.x;
// 		yOld = event.y;
		
// 		console.log(x);
// 	}


// 	function startTracking(){
// 		x = event.x - canvas.offsetLeft;
// 		y = event.y - canvas.offsetTop;
// 		canvas.addEventListener('mousemove', drawSmoothLine, false);
// 		if (document.addEventListener('mouseup', stopDrawSmoothLine, false)){}
// 		if (canvas.addEventListener('mouseout', stopAndReCalc, false)){}
		
// 	}

// 	function stopAndReCalc(){
// 		stopDrawSmoothLine();
// 		canvas.addEventListener('mouseover', reCalcPosition, false);
// 		drawSmoothLine();
// 	}

// 	function stopDrawSmoothLine(){
// 		canvas.removeEventListener('mousemove', drawSmoothLine, false);

// 	}

// 	function getPosition(){

// 		xOld = x;
// 		yOld = y;

// 		x = event.x - canvas.offsetLeft - 5;
// 		y = event.y - canvas.offsetTop - 5;
// 		return [xOld,yOld,x,y];
// 	}

// 	function drawSmoothLine(){
// 		var position = getPosition();
// 		draw_it = canvas.getContext('2d');
// 		draw_it.strokeStyle = 'red';
// 		draw_it.beginPath();
// 		draw_it.moveTo(position[0],position[1]);
// 		draw_it.lineTo(position[2],position[3]);
// 		draw_it.stroke();
// 	}



	
// };
