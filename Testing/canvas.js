var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Rectangle
c.fillStyle = 'rgba(255, 100, 90, 0.5)';
c.fillRect(300, 100, 100, 100)
c.fillStyle = 'rgba(5, 200, 90, 0.5)';
c.fillRect(400, 100, 100, 100)
c.fillStyle = "black";
c.fillRect(300, 300, 100, 100)
console.log(canvas);

//Arc / Circle
c.beginPath();
c.arc(1342, 385, 30, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

