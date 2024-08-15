function setup() {
    createCanvas(400, 400);
    background("pink");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
    if(mouseIsPressed)
      rect(mouseX, mouseY, 20, 45)
  }
  