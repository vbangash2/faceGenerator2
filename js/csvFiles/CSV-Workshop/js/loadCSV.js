let table;
//let img;


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/ExerciseLog.csv', 'csv', 'header');
  //img = loadImage('js/Treadmill.jpg')
  //img2 = loadImage('js/weights.jpg')
  //img3 = loadImage('js/row.jpg')
  //img4 = loadImage('js/bike.jpg')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255)
  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){


    //grab each of the dates
    let date = table.getString(i, 'Date');
    let workout = table.getString(i, 'Work Out Duration');
    let prefeeling = table.getString(i, 'Feeling going Into Gym');
    let aerobic = table.getString(i, 'Aerobic Exercise Time')
      let exercises = table.getString(i, 'Exercises')
    //let postfeeling = table.getString(i, 'Feeling Leaving Gym')

    //print dates to the console
    print(date)

    //print dates on the screen
    text(date, 50, (i*40)+40)
    text(workout, 100, (i*40)+40)
    text(aerobic, 150, (i*40)+40)
        text(exercises, 180, (i*40)+40)
    //text(prefeeling, 200, (i*40)+40)
    //text(postfeeling, 250, (i*40)+40)

    //let exercises = table.getString(i, 'Exercises')
    //for (var a = 0;  a < length(exercises); a++){
      //image_x = aerobic
      //image_y = aerobic
      //if (match(exercises, "Treadmill") != NULL){
        //image(img, 300, 40, image_x, image_y)
      //}
    //}
  }

}
