var torre, torreImg;
var puerta, puertaImg, puertaGroup;
var base, baseImg, baseGroup;
var fantasma, fantasmaImg;
var bloqueInv, bloqueInvGroup;
var gameState = "play";
var sonTerror

function preload(){
  torreImg = loadImage ("tower.png");
  baseImg = loadImage ("climber.png");
  puertaImg = loadImage ("door.png");
  fantasmaImg = loadImage ("ghost-standing.png");
  sonTerror = loadSound ("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  sonTerror.loop ();
  torre = createSprite(300,300);
  torre.addImage("torre",torreImg);
  torre.velocityY = 1;
 
  bloqueInvGroup = new Group();
  puertaGroup = new Group();
  baseGroup = new Group();
  
  fantasma = createSprite(200,200,50,50);
  fantasma.scale = 0.3;
  fantasma.addImage("fantasma",fantasmaImg);
  
  

}
function draw(){
  background(0);
  
  if(gameState === "play"){
    
    
  
  
  if (torre.y >400){
    torre.y = 300;
    
  }
   if (keyDown ("space")){
      fantasma.velocityY = -5;
    }
    if (keyDown ("left_arrow")){
      fantasma.x = fantasma.x -3;
    }
    if (keyDown ("right_arrow")){
      fantasma.x = fantasma.x +3;
    }
  fantasma.velocityY = fantasma.velocityY + 0.8;
  if (fantasma.isTouching (baseGroup)){
    fantasma.velocityY = 0;
    
  }
  if (fantasma.isTouching (bloqueInvGroup) || fantasma.Y >600 || fantasma.Y === 600 ){
    fantasma.destroy();
    gameState = "end";
    
  }
  
  spawnPuerta();
  drawSprites();
  }
  if (gameState === "end"){
    stroke ("purple");
    fill ("purple");
    textSize (30);
    text("GAME OVER", 230, 50);
  }
   
}
function spawnPuerta(){
  if (frameCount %240 === 0){
   puerta = createSprite (200,-50);
    puerta.addImage (puertaImg);
    
    base = createSprite(200,10);
    base.addImage("base",baseImg);
    
    bloqueInv = createSprite (200,10);
    bloqueInv.width = base.width;
    bloqueInv.height = 2;
    
    puerta.x = Math.round (random(120,400));
    puerta.velocityY = 1;
    
    
    base.x = puerta.x;
    base.velocityY = 1;
    
    
    
  
    
    
     bloqueInv.x = base.x;
     bloqueInv.velocityY = 1;
    
    
    
   
    puerta.lifetime = 800;
    base.lifetime = 800;
    bloqueInv.lifetime = 800;
    
    baseGroup.add (base);      
    puertaGroup.add(puerta); 
    
   
    bloqueInv.debug = true;
    
    bloqueInvGroup.add (bloqueInv);
    
    fantasma.depth = puerta.depth;
    fantasma.depth = + 7;
  }
   
}

