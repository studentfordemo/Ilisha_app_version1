var gameState = "homeScreen";
var start, startimage, logo, logoimage;
var help, helpImage;
var ok, okImage;
//var inputBox;
var go, goImage;
var string, string1, string2;
var sound1;
var mumbai, mButton;
var bangalore, bButton;
var hyderabad, hButton;
var delhi, dButton;


function preload(){
   startimage = loadImage("StartButton.png");
   logoimage = loadImage("BookLogo.png");
   helpimage = loadImage("HelpButton.png");
   okImage = loadImage("OkButton.png");
   goImage = loadImage("GoButton.png");
   sound1 = loadSound("piano_D_sharp.mp3");
   mButton = loadImage("MUMBAI.jpg");
   bButton = loadImage("BANGALORE1.jpg");
   hButton = loadImage("HYDERABAD.jpg");
   dButton = loadImage("DELHI.jpg");
}

function setup() {
  createCanvas(800,800);
  logo = createSprite(400, 250, 1, 1);
  start = createSprite(400, 450, 1, 1);
  help = createSprite(750, 50, 1, 1);
  ok = createSprite(400, 600, 1, 1);
  go = createSprite(440, 600, 1, 1);
 
}

function draw() {
  background("#F70000");  
  
  if (gameState === "homeScreen" ){
    textSize(35);
    fill("cyan");
    strokeWeight(3);
    text("Book Donation", 300, 100);
    logo.addImage(logoimage);
    start.addImage(startimage);
    if (mousePressedOver(start)){
      gameState = "screen1";
      sound1.play();
    }
  }
  if (gameState === "screen1"){
    background("#3594C8");
    go.visible = true;
    help.visible = true;
    logo.destroy();
    start.destroy();
    help.addImage(helpimage);
    help.scale = 0.3;
    ok.visible = false;
    mumbai = createSprite(100, 100, 1, 1);
  
    hyderabad = createSprite(110, 250, 1, 1);
    hyderabad.scale=1.1
    bangalore = createSprite(100, 385, 1, 1);
   
    delhi = createSprite(100, 530, 1, 1);
   
    hyderabad.addImage(hButton);
    delhi.addImage(dButton);
    bangalore.addImage(bButton);
    mumbai.addImage(mButton);
    
    if (mousePressedOver(mumbai)){
      gameState = "MumbaiDetails";
    }

    if (mousePressedOver(hyderabad)){
      gameState = "HyderabadDetails";
    }

    if (mousePressedOver(bangalore)){
      gameState = "BangaloreDetails";
    }

    if (mousePressedOver(delhi)){
      gameState = "DelhiDetails";
    }

    //text("Please Enter Your Location:", 340, 300);
    if (mousePressedOver(help)){
      background("#3594C8");
      gameState = "helpScreen";
    }
  }
  if (gameState === "helpScreen"){
    go.visible = false;
    ok.visible = true;
    //inputBox.position(12000, 800);
    textSize(20);
    background("#3594C8");
    help.visible = false;
    fill("white")
    textFont("Brush Script MT")
    text("This is a book donation app, dedicated to educating and boosting", 200, 220)
    text("the creative skills of children in orphanages. Everyone deserves", 200, 240);
    text("a chance to show what they are capable of. This is a simple app", 200, 260); 
    text("where, by just typing your location, you can see local orphanages", 200, 280);
    text("in your area and donate some books to the children there.", 200, 300);
    ok.addImage(okImage);
    ok.scale = 0.3;
    if (mousePressedOver(ok)){
      gameState = "screen1";
    }
  }
  if (gameState === "MumbaiDetails"){
    
    //text("Address: Veera Desai Road, Prathmesh Complex, Andheri(W, Mumbai, Maharashtra 400058", 100, 120) 
    //text("n", 100, 130);
    //text("Phone: 022 2624 1109", 100, 150);
    
    MumbaiDetails();
    if (mousePressedOver(help)){
      background("#F70000");
      gameState = "helpScreen";
    }
    go.visible = false;
    //inputBox.hide();
  }

  if (gameState === "HyderabadDetails"){
    HyderabadDetails();
  }

  if (gameState === "BangaloreDetails"){
    BangaloreDetails();
  }
  if (gameState === "DelhiDetails"){
    DelhiDetails();
  }

  drawSprites();
  
  
}

function hide(){
  inputBox.hide();
}

function MumbaiDetails(){
  var response = window.location.assign("https://ilisha0512.github.io/Mumbai-Orphanages-Details/");
  console.log(response);
}

function HyderabadDetails(){
  var response = window.location.assign("https://studentfordemo.github.io/Hyderabad-Orphanages-Details/");
  console.log(response); 
}

function BangaloreDetails(){
  var response = window.location.assign("https://studentfordemo.github.io/Bangalore_orphanages_details/");
  console.log(response); 
}

function DelhiDetails(){
  var response = window.location.assign("https://studentfordemo.github.io/Delhi_orphanages_details/");
  console.log(response); 
}

