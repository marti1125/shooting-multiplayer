window.onload = function() {	

	var canvas = document.getElementById('container');  
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext('2d');

	var imgPath = 'img/'

	function addImage(nameObject,img,x,y,width,height)
	{
		nameObject = new Image();
		nameObject.src = img;
		nameObject.onload = function(){
			context.drawImage(nameObject, x, y, width, height);
		}
	}

	var blue, yellow;
	var spaceshipBlue = addImage(blue,imgPath+'spaceshipBlue.png',0,0,100,88);
	var spaceshipYellow = addImage(yellow,imgPath+'spaceshipYellow.png',100,100,100,88);

};