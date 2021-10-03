const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

canvas.width = width;
canvas.height = height
const slite = {
    w :40,
    h:5,
    x: 80,
    speed: 10,
    dx: 0,
    size :9
}

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
    context.fillRect(slite.x-70,10,slite.w,slite.h)

    context.fillStyle = "white";
    context.fillRect(slite.x-70,490,slite.w,slite.h)
}
function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
function newPos() {
    slite.x += slite.dx;
    slite.y += slite.dy;

  detectWalls();
}
function detectWalls(){

    if(slite.x + slite.size > canvas.width || slite.x - slite.size <0){
        slite.dx *= -1;
    }
    // //left wall
    // if(slite.x == canvas.height){
    //     slite.x = 0;
    // }
     // Right Wall
  if (slite.x + slite.w > canvas.width) {
    slite.x = canvas.width - slite.w;
  }
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
    clear()
    drawRect()
    drawSlits()
    score();
    drawCircle();
    newPos();

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

update()
function moveRight() {
    slite.dx = slite.speed;
  }
  
  function moveLeft() {
    slite.dx = -slite.speed;
  }
  
  function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
      moveLeft();
    } 
  }
  
  function keyUp(e) {
    if (
      e.key == 'Right' ||
      e.key == 'ArrowRight' ||
      e.key == 'Left' ||
      e.key == 'ArrowLeft') {
      slite.dx = 0;
      slite.dy = 0;
    }
  }
    
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);