
function setup() {
  createCanvas (700,700, WEBGL);

}
var a=0;
var x,y,speedx,speedy; // declaration
x=700;
y=400;
speedx=5;
speedy=5;

function draw() {
  background(0);
  fill(255);
  rect(20,20,260,260);
  //arc(200, 200, 200, 200, 0, PI + QUARTER_PI, OPEN);

   
  //line(200, 200, 280, 280);
  
  fill(0);
    translate(width/50,height/60); // brings the center to the horizontal and vertical middle
    // sin function for having an oscillation in x axis
    // cos function for having an oscillation in y axis
    ellipse(sin(radians(a))*width/2,cos(radians(a))*height/2,300);
    a++; // accumulation
	
  
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, 0.55);
  ambientMaterial(150);
  noStroke();
  sphere(190);
  
  stroke(255);
  line(60,20,380,380);
  line(380,20,60,380);
      strokeWeight(1);
}

