$(document).ready(function(){
	'use strict';
	paper.install(window);								
	paper.setup(document.getElementById('mainCanvas'));	
	var shape = new Shape.Circle(new Point(80, 50), 30);
	shape.strokeColor = 'black';
	shape.fillColor = 'black';
	
	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';
	var c2 = Shape.Circle(100,100,20);
	c2.fillColor = 'black';
	var text = new PointText(200,200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	
	var tool = new Tool();
	
	tool.onMouseDown = function(event){
		var c = Shape.Circle(event.point.x, event.point.y, 20);
	};
	
	
});