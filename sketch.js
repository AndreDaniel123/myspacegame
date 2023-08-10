var spaceBG
var space
var world,earth
var spaceship
var ufo1
var ufo2
var ufo
var life = 300
var heart
var explode
var ufoG
var laser,laserbeam

function preload() {
  spaceBG = loadImage("assets/spaceBackground.jpg")
  world = loadAnimation("assets/earth.png")
  spaceship = loadImage("assets/spaceship.png")
  ufo1 = loadImage("assets/ufo1.png")
  ufo2 = loadImage("assets/ufo2.png")
  heart = loadImage("assets/heart.png")
  explode = loadAnimation("assets/explode.png")
  laser = loadImage("assets/laser.png")

}

function setup() {
  createCanvas(1900, 900);

  space = createSprite(width / 2, height / 2)
  space.addImage("background", spaceBG)
  space.velocityX = -4

  earth = createSprite(200, height / 2)
  earth.addAnimation("planet", world)
  earth.rotation = 90
  earth.scale = 0.5
  earth.debug=true
  earth.setCollider("rectangle",-100,150,earth.width,height/2)

  spaceCraft = createSprite(width / 5, height / 2, 100, 100)
  spaceCraft.addImage("ship", spaceship)
  spaceCraft.rotation = 90
  spaceCraft.scale = 0.75

ufoG = createGroup()




}


function draw() {
  background(51);
  if (space.x < 640) {
    space.x = width / 2
  }

 console.log(earth.width) 




  spaceCraft.y = mouseY
  multipleUfo()
 
for(var i=0;i<ufoG.length;i++){
  if(earth.isTouching(ufoG[i])){
    ufoG[i].destroy()
   // earth.changeAnimation("planet", explode)
    //earth.scale= 3
      }
}

if (keyDown("space")){
  laserShoot ();
}
  drawSprites()
  showLife()
}

function multipleUfo() {
  if (frameCount % 100 == 0) {
    ufo = createSprite(width - 150, height - 200, 50, 50)
    x = Math.round(random(1, 2))
    ufo.debug=true

   

    if (x == 1) {
      ufo.addImage("disc", ufo1)
      ufo.scale = 0.3
      ufo.velocityX = -3
    } else if (x == 2) {
      ufo.addImage("disc2", ufo2)
      ufo.scale = 0.2
      ufo.velocityX = -5
      ufo.setCollider("rectangle",0,0,ufo.width-50,ufo.height-100)
    }


    ufo.y = random(100, height - 100)
ufoG.add(ufo)

  }
}


function showLife() {
  push();
  image(heart, width / 2 - 733,  45, 35, 35);
  fill("white");
  rect(width /2 -700, 50, 300, 20);
  fill("#f50057");
  rect(width / 2 - 700, 50, life, 20);
  noStroke();
  pop();
}

function laserShoot (){
  laserbeam = createSprite(spaceCraft.x,spaceCraft.y)
  laserbeam.addImage(laser)
  laserbeam.visible=false
  laserbeam.velocity=9



}

