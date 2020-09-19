var speed1,speed2,speed3;
var weight1,weight2,weight3;
var bullet1,bullet2,bullet3;
var wall;
var thickness;

function setup() {
  createCanvas(1200,400);
  
  thickness = random(20,80);
  speed1 = random(9,3);
  weight1 = random(3,5);


  bullet1 = createSprite(40, 200, 80, 20);
  bullet1.shapeColor = "white";


  wall = createSprite(980,200,thickness,400);
  wall.shapeColor = "yellow";

  bullet1.velocityX = speed1;
 

}

function draw() {
  background(80,80,80);
  
bullet1.collide(wall);


// deformation for car1
var deformation=0.5 * weight1 * speed1* speed1/22509;
if(deformation>180)
{
  bullet1.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  bullet1.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  bullet1.shapeColor=color(0,255,0);
}

// damage of wall 
var damage = 0.5*speed1*weight1*speed1/thickness*thickness*thickness

console.log(damage);

if(damage<3000){
  wall.shapeColor = "green";
}

if(damage>3000){
  wall.shapeColor = "red";
}

drawSprites();
}



