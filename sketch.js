var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color(255);

  wall = createSprite(1300,200,60,200);
  
  wall.shapeColor = color(80,80,80);

  deformation = 0.5 * weight * speed * speed/2250;
  console.log(deformation);

}

function draw() {
  background(0);  

  if(isTouching(car,wall)){
    car.velocityX = 0;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation > 100 && deformation<180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
    car.shapeColor =color(0,255,0);
    }
  }


  drawSprites();
}
function isTouching(ob1,ob2){
  if(ob2.x - ob1.x < ob1.width/2 + ob2.width/2&&
    ob1.x - ob2.x < ob1.width/2 + ob2.width/2&&
    ob2.y - ob1.y < ob1.height/2 + ob2.height/2&&
    ob1.y - ob2.y < ob1.height/2 + ob2.height/2){
     return true
      }
      else {
        return false
      }
    }