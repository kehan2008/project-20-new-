var cat,catImage;
var mouse,mouseImage;
var bg,bgImage;

function preload() {
    //load the images here
    catImage = loadAnimation("cat1.png");
    mouseImage = loadAnimation("mouse1.png");
    catImage2 = loadAnimation("cat2.png","cat3.png");
    mouseImage2 = loadAnimation("mouse2.png","mouse3.png");
    bgImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,1000,800);
    bg.addImage(bgImage);
   // bg.scale = 1;
    cat = createSprite(580,550,40,20);
    cat.addAnimation("cat_running",catImage);
    cat.scale = 0.3;
    mouse = createSprite(180,540,10,20);
    mouse.addAnimation("mouseTeasing",mouseImage);
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseImage3);  
   mouse.changeAnimation("mouseTeasing",mouseImage2);
   mouse.frameDelay = 25;
   mouse.x=mouse.x - 4
  
    }

    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImage2);  
        mouse.changeAnimation("mouseTeasing",mouseImage3);
        mouse.frameDelay = 25;
        mouse.x=mouse.x + 4
     
         }
    
     

   if(keyCode === LEFT_ARROW){
        cat.addAnimation("cat_running",catImage2);  
        cat.changeAnimation("cat_running");
        cat.frameDelay = 25;
         }

         if(keyCode === RIGHT_ARROW){
            cat.addAnimation("cat_running",catImage2);  
            cat.changeAnimation("cat_running",catImage4);
            cat.frameDelay = 25;
             }

}
