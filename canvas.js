const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const slideWidth = 40;
const slideHeight = 5;

canvas.width = width;
canvas.height = height


context.fillStyle = "black";
context.fillRect(0,0,width,height)

context.fillStyle = "white";
context.fillRect(130,10,slideWidth,slideHeight)

context.fillStyle = "white";
context.fillRect(130,490,slideWidth,slideHeight)

context.beginPath();
context.moveTo(0,height/2);
context.lineTo(width,height/2);
context.setLineDash([4]);
context.strokeStyle = "white"
context.stroke();

context.beginPath();
context.arc(width/2,height/2,8,0,Math.PI*2,false);
context.fillStyle="white";
context.fill();

context.font = "20px Birthstone";
context.fillText("10", 10 ,height/2-20 )

context.font = "20px Birthstone";
context.fillText("30",10,height/2+40)