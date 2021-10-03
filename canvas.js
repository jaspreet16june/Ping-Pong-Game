const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const slideWidth = 40;
const slideHeight = 5;

canvas.width = width;
canvas.height = height


const circle = {
    x: 200,
    y:200,
    dx : 3,
    dy:4,
    size:9,
}
function score(){
    context.font = "20px Birthstone";
    context.fillText("10", 10 ,height/2-20 )

    context.font = "20px Birthstone";
    context.fillText("30",10,height/2+40)
}

function drawRect(){
    context.fillStyle = "black";
    context.fillRect(0,0,width,height)

    context.fillStyle = "white";
    context.fillRect(130,10,slideWidth,slideHeight)

    context.fillStyle = "white";
    context.fillRect(130,490,slideWidth,slideHeight)
}


function drawSlits(){
    context.beginPath();
    context.moveTo(0,height/2);
    context.lineTo(width,height/2);
    context.setLineDash([4]);
    context.strokeStyle = "white"   
    context.stroke();
}
function drawCircle(){
    context.beginPath();    
    context.arc(circle.x,circle.y,circle.size,0,Math.PI*2,false);
    context.fillStyle="white";
    context.fill();
}

function update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    drawRect()
    drawSlits()
    score();
    drawCircle();

    circle.x += circle.dx;
    circle.y += circle.dy;

    if(circle.x + circle.size > canvas.width ||circle.x - circle.size < 0 ){
        circle.dx *= -1;
    }

    if(circle.y + circle.size > canvas.height ||circle.y - circle.size < 0 ){
        circle.dy *= -1;
    }

    requestAnimationFrame(update);

}

update();