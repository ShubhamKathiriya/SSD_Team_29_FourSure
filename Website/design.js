
var DEFAULT_COLOUR = 0;
var cell_OUTLINE_WEIGHT = 5;
var cell_DEFAULT_COLOUR = 222;
var TOTAL_PIECE = 9;
var CELL_RADIUS = 10;


function create_board(){

  var cell_1 = new cell ( 0 , 0 ,300);
  var cell_2 = new cell ( 1 , 150 ,300);
  var cell_3 = new cell ( 2 , 300 ,300);
  var cell_4 = new cell ( 3 , 50 ,250);
  var cell_5 = new cell ( 4 , 150 ,250);
  var cell_6 = new cell ( 5 , 250 ,250);
  var cell_7 = new cell ( 6 , 100 , 200);
  var cell_8 = new cell ( 7 , 150, 200);
  var cell_9 = new cell ( 8 , 200 , 200);
  var cell_10 = new cell ( 9 , 0, 150);
  var cell_11 = new cell (10, 50, 150);
  var cell_12 = new cell (11 , 100, 150);
  var cell_13 = new cell (12, 200 , 150);
  var cell_14 = new cell (13 , 250,150);
  var cell_15 = new cell (14 , 300 , 150);
  var cell_16 = new cell (15 , 100 , 100);
  var cell_17 = new cell (16 , 150 , 100);
  var cell_18 = new cell (17, 200 , 100);
  var cell_19 = new cell (18 , 50, 50);
  var cell_20 = new cell (19 , 150 , 50 );
  var cell_21 = new cell (20 , 250 , 50);
  var cell_22 = new cell (21 , 0 , 0);
  var cell_23 = new cell ( 22, 150, 0 );
  var cell_24 = new cell ( 23 , 300 ,0 );


  cell_1.add_neightbours(cell_2);
  cell_1.add_neightbours(cell_10);
  cell_1.add_horizontal_cell(cell_2);
  cell_1.add_horizontal_cell(cell_3);
  cell_1.add_vertical_cell(cell_10);
  cell_1.add_vertical_cell(cell_22);
  

  cell_2.add_neightbours(cell_1);
  cell_2.add_neightbours(cell_3);
  cell_2.add_neightbours(cell_5);
  cell_2.add_horizontal_cell(cell_1);
  cell_2.add_horizontal_cell(cell_3);
  cell_2.add_vertical_cell(cell_5);
  cell_2.add_vertical_cell(cell_8);
  

  cell_3.add_neightbours(cell_2);
  cell_3.add_neightbours(cell_15);
  cell_3.add_horizontal_cell(cell_1);
  cell_3.add_horizontal_cell(cell_2);
  cell_3.add_vertical_cell(cell_15);
  cell_3.add_vertical_cell(cell_24);


  cell_4.add_neightbours(cell_5);
  cell_4.add_neightbours(cell_11);
  cell_4.add_horizontal_cell(cell_5);
  cell_4.add_horizontal_cell(cell_6);
  cell_4.add_vertical_cell(cell_11);
  cell_4.add_vertical_cell(cell_19);

  cell_5.add_neightbours(cell_4);
  cell_5.add_neightbours(cell_6);
  cell_5.add_neightbours(cell_8);
  cell_5.add_neightbours(cell_2);
  cell_5.add_horizontal_cell(cell_4);
  cell_5.add_horizontal_cell(cell_6);
  cell_5.add_vertical_cell(cell_2);
  cell_5.add_vertical_cell(cell_8);

  cell_6.add_neightbours(cell_5);
  cell_6.add_neightbours(cell_14);
  cell_6.add_horizontal_cell(cell_4);
  cell_6.add_horizontal_cell(cell_5);
  cell_6.add_vertical_cell(cell_14);
  cell_6.add_vertical_cell(cell_21);

  cell_7.add_neightbours(cell_8);
  cell_7.add_neightbours(cell_12);
  cell_7.add_horizontal_cell(cell_8);
  cell_7.add_horizontal_cell(cell_9);
  cell_7.add_vertical_cell(cell_12);
  cell_7.add_vertical_cell(cell_16);

  cell_8.add_neightbours(cell_5);
  cell_8.add_neightbours(cell_7);
  cell_8.add_neightbours(cell_9);
  cell_8.add_horizontal_cell(cell_7);
  cell_8.add_horizontal_cell(cell_9);
  cell_8.add_vertical_cell(cell_2);
  cell_8.add_vertical_cell(cell_5);


  cell_9.add_neightbours(cell_8);
  cell_9.add_neightbours(cell_13);
  cell_9.add_horizontal_cell(cell_7);
  cell_9.add_horizontal_cell(cell_8);
  cell_9.add_vertical_cell(cell_13);
  cell_9.add_vertical_cell(cell_18);

  cell_10.add_neightbours(cell_1);
  cell_10.add_neightbours(cell_11);
  cell_10.add_neightbours(cell_22);
  cell_10.add_horizontal_cell(cell_11);
  cell_10.add_horizontal_cell(cell_12);
  cell_10.add_vertical_cell(cell_1);
  cell_10.add_vertical_cell(cell_22);

  cell_11.add_neightbours(cell_10);
  cell_11.add_neightbours(cell_12);
  cell_11.add_neightbours(cell_4);
  cell_11.add_neightbours(cell_19);
  cell_11.add_horizontal_cell(cell_10);
  cell_11.add_horizontal_cell(cell_12);
  cell_11.add_vertical_cell(cell_4);
  cell_11.add_vertical_cell(cell_19);

  cell_12.add_neightbours(cell_7);
  cell_12.add_neightbours(cell_11);
  cell_12.add_neightbours(cell_16);
  cell_11.add_horizontal_cell(cell_10);
  cell_12.add_horizontal_cell(cell_11);
  cell_12.add_vertical_cell(cell_7);
  cell_12.add_vertical_cell(cell_16);

  cell_13.add_neightbours(cell_9);
  cell_13.add_neightbours(cell_18);
  cell_13.add_neightbours(cell_14);
  cell_13.add_horizontal_cell(cell_14);
  cell_13.add_horizontal_cell(cell_15);
  cell_13.add_vertical_cell(cell_9);
  cell_13.add_vertical_cell(cell_18);

  cell_14.add_neightbours(cell_6);
  cell_14.add_neightbours(cell_13);
  cell_14.add_neightbours(cell_15);
  cell_14.add_neightbours(cell_21);
  cell_14.add_horizontal_cell(cell_13);
  cell_14.add_horizontal_cell(cell_15);
  cell_14.add_vertical_cell(cell_6);
  cell_14.add_vertical_cell(cell_21);

  cell_15.add_neightbours(cell_3);
  cell_15.add_neightbours(cell_14);
  cell_15.add_neightbours(cell_24);
  cell_15.add_horizontal_cell(cell_13);
  cell_15.add_horizontal_cell(cell_14);
  cell_15.add_vertical_cell(cell_3);
  cell_15.add_vertical_cell(cell_24);

  cell_16.add_neightbours(cell_12);
  cell_16.add_neightbours(cell_17);
  cell_16.add_horizontal_cell(cell_17);
  cell_16.add_horizontal_cell(cell_18);
  cell_16.add_vertical_cell(cell_7);
  cell_16.add_vertical_cell(cell_12);

  cell_17.add_neightbours(cell_16);
  cell_17.add_neightbours(cell_18);
  cell_17.add_neightbours(cell_20);
  cell_17.add_horizontal_cell(cell_16);
  cell_16.add_horizontal_cell(cell_18);
  cell_17.add_vertical_cell(cell_20);
  cell_17.add_vertical_cell(cell_23);

  cell_18.add_neightbours(cell_13);
  cell_18.add_neightbours(cell_17);
  cell_18.add_horizontal_cell(cell_16);
  cell_18.add_horizontal_cell(cell_17);
  cell_18.add_vertical_cell(cell_9);
  cell_18.add_vertical_cell(cell_13);

  cell_19.add_neightbours(cell_11);
  cell_19.add_neightbours(cell_20);
  cell_19.add_horizontal_cell(cell_20);
  cell_19.add_horizontal_cell(cell_21);
  cell_19.add_vertical_cell(cell_4);
  cell_19.add_vertical_cell(cell_11);

  cell_20.add_neightbours(cell_17);
  cell_20.add_neightbours(cell_19);
  cell_20.add_neightbours(cell_21);
  cell_20.add_neightbours(cell_23);
  cell_20.add_horizontal_cell(cell_19);
  cell_20.add_horizontal_cell(cell_21);
  cell_20.add_vertical_cell(cell_17);
  cell_20.add_vertical_cell(cell_23);

  cell_21.add_neightbours(cell_14);
  cell_21.add_neightbours(cell_20);
  cell_21.add_horizontal_cell(cell_19);
  cell_21.add_horizontal_cell(cell_20);
  cell_21.add_vertical_cell(cell_6);
  cell_21.add_vertical_cell(cell_14);

  cell_22.add_neightbours(cell_10);
  cell_22.add_neightbours(cell_23);
  cell_22.add_horizontal_cell(cell_23);
  cell_22.add_horizontal_cell(cell_24);
  cell_22.add_vertical_cell(cell_1);
  cell_22.add_vertical_cell(cell_10);

  cell_23.add_neightbours(cell_20);
  cell_23.add_neightbours(cell_22);
  cell_23.add_neightbours(cell_24);
  cell_23.add_horizontal_cell(cell_22);
  cell_23.add_horizontal_cell(cell_24);
  cell_23.add_vertical_cell(cell_17);
  cell_23.add_vertical_cell(cell_20);

  cell_24.add_neightbours(cell_15);
  cell_24.add_neightbours(cell_23);
  cell_24.add_horizontal_cell(cell_22);
  cell_24.add_horizontal_cell(cell_23);
  cell_24.add_vertical_cell(cell_3);
  cell_24.add_vertical_cell(cell_15);


  all_cells_coll = [];

  all_cells_coll.push(cell_1);
  all_cells_coll.push(cell_2);
  all_cells_coll.push(cell_3);
  all_cells_coll.push(cell_4);
  all_cells_coll.push(cell_5);
  all_cells_coll.push(cell_6);
  all_cells_coll.push(cell_7);
  all_cells_coll.push(cell_8);
  all_cells_coll.push(cell_9);
  all_cells_coll.push(cell_10);
  all_cells_coll.push(cell_11);
  all_cells_coll.push(cell_12);
  all_cells_coll.push(cell_13);
  all_cells_coll.push(cell_14);
  all_cells_coll.push(cell_15);
  all_cells_coll.push(cell_16);
  all_cells_coll.push(cell_17);
  all_cells_coll.push(cell_18);
  all_cells_coll.push(cell_19);
  all_cells_coll.push(cell_20);
  all_cells_coll.push(cell_21);
  all_cells_coll.push(cell_22);
  all_cells_coll.push(cell_23);
  all_cells_coll.push(cell_24);
  
  return all_cells_coll;
}

class cell{

  constructor(cell_number , x_cord , y_cord ){

    this.cell_number = cell_number;
    this.x_cordinate =  x_cord;
    this.y_cordinate = y_cord;

    this.neighbours = [];
    this.vertical_cell = [];
    this.horizontal_cell = [];

    this.isEmpty = true;
    this.player_number = null;
    this.player_colour = DEFAULT_COLOUR;    
  }

  add_neightbours = (neighbours_cell_number) =>{

    this.neighbours.push(neighbours_cell_number);
  }

  add_vertical_cell =(vertical_cell_number) =>{
    
    this.vertical_cell.push(vertical_cell_number);
  }

  add_horizontal_cell = (horizontal_cell_number) => {

    this.horizontal_cell.push(horizontal_cell_number);
  }

  drawCircles = () => {
    fill(220);
    strokeWeight(0);
    circle(this.x_cordinate, this.y_cordinate, CELL_RADIUS+10);
}

  display = () =>{
    
    strokeWeight(cell_OUTLINE_WEIGHT);
    stroke(cell_DEFAULT_COLOUR);
    circle(this.x_cordinate, this.y_cordinate, CELL_RADIUS);

  }

}


class Player{
  
  constructor( number ,color){

    this.player_number = number;
    this.player_colour = color;
    this.on_board = 0;   // piece on board
    this.on_hand = TOTAL_PIECE;   // piece on hand
    this.out_piece = 0;   // piece on cut down by other player

  }
}


class Board{

  constructor(){

    this.all_cell = create_board();
    this.Player_1 = new Player(1 , 12);
    this.Player_2 = new Player(2 , 122);
    this.turn = this.Player_1;
    this.waiting = this.Player_2;
    this.millMove = false;
    this.selected = null;


  }

}


///////////////////////////////////

var BOARD;

function createPage(){

  console.log("create page inoked!!!");

  noFill()
  stroke(220);
  strokeWeight(10);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);

 
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  stroke(150);
  strokeWeight(3);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  BOARD.all_cell.forEach( (cell) => {
    cell.display();
  })
}


function updateBoard(){

  BOARD.all_cell.forEach( (spot) => {
    spot.cir;
  })

  strokeWeight(10);
  noFill()
  stroke(220);

  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);

  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  stroke(150);
  strokeWeight(3);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);


}

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.id('canvas');
  BOARD = new Board();
  console.log("canvas invoke!!");
  createPage();


}

function draw() {
  background(50);
  updateBoard();
  BOARD.all_cell.forEach( (cell) => {
    cell.display();
  })
}

function keyPressed(){
  /* Nothing */
}


function mouseClicked(){
  clicked(BOARD);
}
