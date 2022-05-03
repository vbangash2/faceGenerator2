let table;


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header');

}

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
