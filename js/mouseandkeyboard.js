//comment
let ellipse_X
let ellipse_Y
let mouthHeight = 100
let furby

function preload(){
  furby = loadImage('images/furby.png')
}
function setup(){
  createCanvas(windowWidth, windowHeight)
  ellipse_X = random(50, windowWidth - 50)
  ellipse_Y = random(50, windowHeight - 50)
  rectMode(CENTER)
}

function draw(){
  //bakcground must come first or everything before will be painted over by background
  background(10, 10, 10)
  rectMode(CENTER)
  imageMode(CENTER)
  image(furby, mouseX, mouseY, 50, 50)


  //fill(300, 150, 100)
  strokeWeight(10)
  fill(255, 255, 255)
  ellipse(350, 150, 50, 50)
  ellipse(700, 150, 50, 50)

  fill(10, 10, 10)
  ellipse(350, 150, 10, 10)
  ellipse(700, 150, 10, 10)
  ///ellipse(ellipse_X, ellipse_Y, 50, 50)
  //if(ellipse_X < windowWidth/2){
    //fill(100, 150, 300)
  //}
  //else{
    //fill(300, 150, 100)
  //}
  if(keyIsPressed == true){
    mouthHeight-=10
    strokeWeight(10)
    stroke(random(255), random(255), random(255))
  }
  else{
    mouthHeight = 100
    strokeWeight(10)
    stroke(255, 100, 100)
  }
  fill(255, 255, 255)
  strokeWeight(50)
  ellipse(windowWidth/2, windowHeight/2, 300, mouthHeight)


  print(mouseX)
}
