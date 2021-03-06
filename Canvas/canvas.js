var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangle
// c.fillStyle = 'rgba(255, 100, 90, 0.5)';
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(5, 200, 90, 0.5)';
// c.fillRect(400, 100, 100, 100)
// c.fillStyle = "black";
// c.fillRect(300, 300, 100, 100)
// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.lineTo(400,200);
// c.lineTo(300,200);
// c.lineTo(50,300);
// c.strokeStyle = "Blue";
// c.stroke();

//Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 3; i++){
//     c.beginPath();
//     c.arc(300, 300 + i * 20, 30, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

// for (var i = 0; i < 100; i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }
var mouse = {
    x: undefined,
    y: undefined

}


window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    })

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //c.strokeStyle = 'blue';
        c.fillStyle = "blue";
        c.fill();
        c.stroke();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y > -50
        ) {
            this.radius += 1;
        } else if (this.radius > 2) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();