var canvas;
var music;
var box1,box2, box3, box4, box;

function bounceOff(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2) 
    { object1.velocityX = object1.velocityX * (-1); 
      object2.velocityX = object2.velocityX * (-1); 
    } 
    if (object1.y - object2.y < object2.height/2 + object1.height/2 
      && object2.y - object2.y < object2.height/2 + object1.height/2) 
    { object1.velocityY = object1.velocityY * (-1); 
      object2.velocityY = object2.velocityY * (-1); 
    }
    }

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(100,600,190,50);
box2 = createSprite(300,600,190,50);
box3 = createSprite(500,600,190,50);
box4 = createSprite(700,600,190,50);

box1.shapeColor="orange"
box2.shapeColor="purple"
box3.shapeColor="blue"
box4.shapeColor="green"

    //create box sprite and give velocity

  box = createSprite(random(20,750),0,50,50);
  box.shapeColor=255,255,255;
  box.velocityY=+5;
  box.velocityX=+2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box
  if(box1.isTouching(box) && box.bounceOff(box1)){
    box.shapeColor="orange"
  }
  if(box2.isTouching(box) && box.bounceOff(box2)){
    box.shapeColor="purple"
  }
  if(box3.isTouching(box) && box.bounceOff(box3)){
    box.shapeColor="blue"
  }
  if(box4.isTouching(box) && box.bounceOff(box4)){
    box.shapeColor="green"
  }
box.bounceOff(edges[3]);
box.bounceOff(edges[2]);
box.bounceOff(edges[1]);
box.bounceOff(edges[0]);

drawSprites();
  }




