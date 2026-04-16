const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let shapeA = [];
let shapeB = [];
let drawingA = true;
// Mouse click to draw points
canvas.addEventListener("click", (e) => {
  let x=e.offsetX;
  let y=e.offsetY;
  if (drawingA) {
    shapeA.push({x, y});
  } else{
    shapeB.push({x, y});
  }

   drawPoints();
});
// Right click to switch shape
canvas.addEventListener("contextmenu",(e) => {
  e.preventDefault();
  drawingA=false;
});

// Draw points
function drawPoints() {
  ctx.clearRect(0,0,500,500);

  ctx.fillStyle= "blue";
  shapeA.forEach(p => ctx.fillRect(p.x, p.y,5,5));

  ctx.fillStyle="red";
  shapeB.forEach(p => ctx.fillRect(p.x, p.y,5,5));
}


function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Animation
let t =0;
function animate() {
  ctx.clearRect(0,0,500,500);

  for (let i = 0; i < shapeA.length; i++) {
    if (shapeB[i]) {
      let x =lerp(shapeA[i].x, shapeB[i].x, t);
      let y =lerp(shapeA[i].y, shapeB[i].y, t);

      ctx.fillRect(x, y, 5, 5);
    }
  }

  t+=0.01;
  if(t<=1) {
    requestAnimationFrame(animate);
  }
}

document.addEventListener("keydown", () => {
  animate();
});