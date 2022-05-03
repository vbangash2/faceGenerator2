let LeftEyeArray = []
let RightEyeArray = []
let MouthArray = []
let NoseArray = []
let toggle_bool = true
let table;
let background_bool = true


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255)
  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'date');

    //print dates to the console
    print(date)

    //print dates on the screen
    text(date, 50, (i*40)+40)


  }

}


function preload(){
  for(i=1; i<=26; i++){
    LeftEyeArray[i] = loadImage('js/images/LeftEye/' + i + '.png');
    RightEyeArray[i] = loadImage('js/images/RightEye/' + i + '.png');
    MouthArray[i] = loadImage('js/images/Mouth/' + i + '.png');
    NoseArray[i] = loadImage('js/images/Nose/' + i + '.png');
    table = loadTable('js/PersonalDataImages.csv', 'csv', 'header');
    print("loaded")
  }
}
function setup(){
  createCanvas(windowWidth, windowHeight)
  background(255)
  imageMode(CENTER)
  width=windowWidth
  height=windowHeight
}
function draw(){

  if (toggle_bool == true){
    printFace()
  }

}

//Normal face is unique in that the eyes are guaranteed to be equal reflections over
//the y-axis, ensuring a more typical layout. They are also the same size, shape, color,
//and have matching pupil types. The mouth is also set to be in the middle of the screen
//making the face symmetrical aside from the nose.
function printFace(){
  if(background_bool == true){
    background(0)
  }



  eye_x = (width/2)-100
  eye_y = 200
  eye_w = 200
  eye_h = 200

  eye_x2 = (width/2)+100
  eye_y2 = eye_y
  eye_w2 = eye_w
  eye_h2 = eye_h

  mouth_x = width/2
  mouth_y = 500
  mouth_w = 400
  mouth_h = 200

  nose_x = width/2
  nose_y = 350
  nose_w = 150
  nose_h = 150

  Lrandomizer = int(random(1,LeftEyeArray.length))
  Rrandomizer = int(random(1,RightEyeArray.length))
  Mrandomizer = int(random(1,MouthArray.length))
  Nrandomizer = int(random(1,NoseArray.length))

  image(LeftEyeArray[Lrandomizer], eye_x2, eye_y, eye_w, eye_h)
  image(RightEyeArray[Rrandomizer], eye_x, eye_y2, eye_w2, eye_h2)
  image(MouthArray[Mrandomizer], mouth_x, mouth_y, mouth_w, mouth_h)
  image(NoseArray[Nrandomizer], nose_x, nose_y, nose_w, nose_h)

  numL = table.getString((Lrandomizer-1), 'Image Number');
  whoL = table.getString((Lrandomizer-1), 'Whose Face')
  whatL = table.getString((Lrandomizer-1), 'What Media')
  whereL = table.getString((Lrandomizer-1), 'What Platform')
  emotionL = table.getString((Lrandomizer-1), 'Emotion Expressed')

  numR = table.getString((Rrandomizer-1), 'Image Number');
  whoR = table.getString((Rrandomizer-1), 'Whose Face')
  whatR = table.getString((Rrandomizer-1), 'What Media')
  whereR = table.getString((Rrandomizer-1), 'What Platform')
  emotionR = table.getString((Rrandomizer-1), 'Emotion Expressed')

  numM = table.getString((Mrandomizer-1), 'Image Number');
  whoM = table.getString((Mrandomizer-1), 'Whose Face')
  whatM = table.getString((Mrandomizer-1), 'What Media')
  whereM = table.getString((Mrandomizer-1), 'What Platform')
  emotionM = table.getString((Mrandomizer-1), 'Emotion Expressed')

  numN = table.getString((Nrandomizer-1), 'Image Number');
  whoN = table.getString((Nrandomizer-1), 'Whose Face')
  whatN = table.getString((Nrandomizer-1), 'What Media')
  whereN = table.getString((Nrandomizer-1), 'What Platform')
  emotionN = table.getString((Nrandomizer-1), 'Emotion Expressed')
}



//User chooses which type of Face to make
function keyPressed(){

  //Save
  if(key == 's'){
    save('paint.jpg')
  }
  if(keyCode == 32){

    if(toggle_bool == true){
      toggle_bool = false
      print(Lrandomizer)
      print(Rrandomizer)
      print(Mrandomizer)
      print(Nrandomizer)

      textSize(16)
      fill(255)
      //textAlign(LEFT)
      text(numR, (width/2)-380, 140, 2000, 100)
      text(whoR, (width/2)-380, 160, 2000, 100)
      text(whatR, (width/2)-380, 180, 2000, 100)
      text(whereR, (width/2)-380, 200, 2000, 100)
      text(emotionR, (width/2)-380, 220, 2000, 100)

      text(numL, (220+width/2), 140, 2000, 100)
      text(whoL, (220+width/2), 160, 2000, 100)
      text(whatL, (220+width/2), 180, 2000, 100)
      text(whereL, (220+width/2), 200, 2000, 100)
      text(emotionL, (220+width/2), 220, 2000, 100)

      text(numN, (220+width/2), 300, 2000, 100)
      text(whoN, (220+width/2), 320, 2000, 100)
      text(whatN, (220+width/2), 340, 2000, 100)
      text(whereN, (220+width/2), 360, 2000, 100)
      text(emotionN, (220+width/2), 380, 2000, 100)

      text(numM, (220+width/2), 450, 2000, 100)
      text(whoM, (220+width/2), 470, 2000, 100)
      text(whatM, (220+width/2), 490, 2000, 100)
      text(whereM, (220+width/2), 510, 2000, 100)
      text(emotionM, (220+width/2), 530, 2000, 100)
    }

    else{
      toggle_bool = true
      background_bool = true

      }
    }

}
