// const canvas = document.querySelector("#myCanvas");
// const context = canvas.getContext("2d");
// const startGameBtn = document.getElementById("start-game-btn");

// const width = 300;
// const height = 500;

// canvas.width = width;
// canvas.height = height
// const slite = {
//     w :40,
//     h:5,
//     x: 130,
//     speed: 7,
//     dx: 0,
//     // dy:0,
// }

// const circle = {
//     x: 200,
//     y:200,
//     dx : 3,
//     dy:4,
//     size:9,
// }
// function score(){
//     context.font = "20px Birthstone";
//     context.fillText("10", 10 ,height/2-20 )

//     context.font = "20px Birthstone";
//     context.fillText("30",10,height/2+40)
// }

// function drawRect(){
//     context.fillStyle = "black";
//     context.fillRect(0,0,width,height)

//     context.fillStyle = "white";
//     context.fillRect(slite.x-70,10,slite.w,slite.h)

//     context.fillStyle = "white";
//     context.fillRect(slite.x-70,490,slite.w,slite.h)
// }
// function clear() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   }
// function newPos() {
//     slite.x += slite.dx;
//     // slite.y += slite.dy;

//   detectWalls();
// }
// // function detectWalls(){

// //     // if(slite.x + slite.size > canvas.width || slite.x - slite.size <0){
// //     //     slite.dx *= -1;
// //     // }
// //     //left wall
// //     if(slite.x < 0){
// //         slite.x = 0;
// //     }
// //      // Right Wall
// //   if (slite.x + slite.w > canvas.width) {
// //     slite.x = canvas.width - slite.w;
// //   }
// // }
// let detectWalls = () => {
//     // Left wall
//     if (slite.x < 0) {
//         slite.x = 0;
//     }

//     // Right Wall
//     if (slite.x + slite.w > canvas.width) {
//         slite.x = canvas.width - slite.w;
//     }
// }

// function drawSlits(){
//     context.beginPath();
//     context.moveTo(0,height/2);
//     context.lineTo(width,height/2);
//     context.setLineDash([4]);
//     context.strokeStyle = "white"   
//     context.stroke();
// }
// function drawCircle(){
//     context.beginPath();    
//     context.arc(circle.x,circle.y,circle.size,0,Math.PI*2,false);
//     context.fillStyle="white";
//     context.fill();
// }

// function updateSlite(){
//     clear();

//     newPos(); 
    
//     requestAnimationFrame(updateSlite);
// }


// function update(){
//     clear()
//     drawRect()
//     drawSlits()
//     score();
//     drawCircle();
    

//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     if(circle.x + circle.size > canvas.width ||circle.x - circle.size < 0 ){
//         circle.dx *= -1;
//     }

//     if(circle.y + circle.size > canvas.height ||circle.y - circle.size < 0 ){
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(update);

// }


// function moveRight() {
//     slite.dx = slite.speed;
//   }
  
//   function moveLeft() {
//     slite.dx = -slite.speed;
//   }
  
//   function keyDown(e) {
//     if (e.key === 'ArrowRight' || e.key === 'Right') {
//       moveRight();
//     } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
//       moveLeft();
//     } 
//   }
  
//   function keyUp(e) {
//     if (
//       e.key == 'Right' ||
//       e.key == 'ArrowRight' ||
//       e.key == 'Left' ||
//       e.key == 'ArrowLeft') {
//       slite.dx = 0;
//       slite.dy = 0;
//     }
//   }
// startGameBtn.addEventListener("click", () => {
//     canvas.style.border = "1px solid white";
//     update();
// });
    
//     updateSlite();
//   document.addEventListener('keydown', keyDown);
//   document.addEventListener('keyup', keyUp);


const canvas = document.getElementById("myCanvas");
const startGameBtn = document.getElementById("start-game-btn");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const ball = {
    x: 200,
    y: 200,
    size: 7,
    dx: 3,
    dy: 2,
}

const slite = {
    w: 45,
    h: 5,
    x: 130,
    speed: 7,
    dx: 0,
};

canvas.width = width;
canvas.height = height;

let pingPongUi = () => {

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.setLineDash([4]);
    context.strokeStyle = "white"
    context.stroke();

    context.font = "25px Arial"
    context.fillText(10, 10, height / 2 - 20);

    context.font = "25px Arial"
    context.fillText(15, 10, height / 2 + 40);

}

let clear = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
let score = ()=>{
    context.font = "20px Birthstone";
    context.fillText("10", 10 ,height/2-20 )

    context.font = "20px Birthstone";
    context.fillText("30",10,height/2+40)
}
let drawCircle = () => {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
}

let update = () => {

    clear();
    score();
    pingPongUi();
    twoSlites();
    drawCircle();

    //change position
    ball.x += ball.dx;
    ball.y += ball.dy;

    //detect side walls
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1;
    }

    // // Detect top and bottom walls
    // if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    //     ball.dy *= -1;
    // }

    requestAnimationFrame(update);
}

let twoSlites = () => {

    context.fillStyle = "white";
    context.fillRect(slite.x, 5, slite.w, slite.h);

    context.fillStyle = "white";
    context.fillRect(slite.x, height - 10, slite.w, slite.h);

}

let newPos = () => {
    slite.x += slite.dx;
    detectWalls();
}

let detectWalls = () => {
    // Left wall
    if (slite.x < 0) {
        slite.x = 0;
    }

    // Right Wall
    if (slite.x + slite.w > canvas.width) {
        slite.x = canvas.width - slite.w;
    }
}

let updateSlite = () => {

    clear();

    newPos();

    requestAnimationFrame(updateSlite);

}

let moveRight = () => {
    slite.dx = slite.speed;
}

function moveLeft() {
    slite.dx = -slite.speed;
}

let keyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    }
}

let keyUp = (e) => {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft'
    ) {
        slite.dx = 0;
    }
}

startGameBtn.addEventListener("click", () => {
    canvas.style.border = "1px solid white";
    update();
});

updateSlite();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);