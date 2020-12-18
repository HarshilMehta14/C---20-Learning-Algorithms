function setup() {
  createCanvas(800,400);
  MR=createSprite(200, 200, 50, 50);
  Fr=createSprite(400,200,100,100);
  Fr.debug=true;
  MR.debug=true;
  MR.shapeColor="green";
  Fr.shapeColor="green";
  MR.velocityX=2;
  MR.velocityY=0;
  Fr.velocityX=-2;
  Fr.velocityY=0;
}

function draw() {
  background(0,0,255);  

  /*MR.x=mouseX;
  MR.y=mouseY;*/

  text("MR - Fr = "+(MR.x - Fr.x),100,100);
  text("Fr - MR = "+(Fr.x - MR.x ),200,100);

  if(MR.x - Fr.x <= MR.width/2 + Fr.width/2 && Fr.x- MR.x <= MR.width/2 + Fr.width/2
    && MR.y - Fr.y <= MR.height/2 + Fr.height/2 && Fr.y- MR.y <= MR.height/2 + Fr.height/2)
    {
      MR.velocityX=MR.velocityX*-1;
      Fr.velocityX=Fr.velocityX*-1;

      MR.velocityY=MR.velocityY *-1;
      Fr.velocityY=Fr.velocityY *-1;

    }

  /*
  if(MR.x - Fr.x <= MR.width/2 + Fr.width/2 && Fr.x- MR.x <= MR.width/2 + Fr.width/2
    && MR.y - Fr.y <= MR.height/2 + Fr.height/2 && Fr.y- MR.y <= MR.height/2 + Fr.height/2)
  {
    MR.shapeColor="red";
    Fr.shapeColor="red";
  }
  else
  {
    MR.shapeColor="green";
    Fr.shapeColor="green";
  }*/
  drawSprites();
}