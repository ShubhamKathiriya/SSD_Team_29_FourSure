
var DEFAULT_COLOUR = 0;
var cell_OUTLINE_WEIGHT = 5;
var cell_DEFAULT_COLOUR = 222;
var CELL_INSIDE_COLOUR = 255; /// white colour
var TOTAL_PIECE = 9;
var CELL_RADIUS = 40;
var GAME_BOARD;

var morrish_man = 9

var player_one_available = 5;
var player_two_available = 2;
var player_one_out = 4;
var player_two_out = 7;

player_one_avail_piece();
player_one_out_piece();
player_two_avail_piece();
player_two_out_piece();


function create_board(){

  var cell_1 = new cell ( 0 , 100 ,100);
  var cell_2 = new cell ( 1 , 550 ,100);
  var cell_3 = new cell ( 2 , 1000 ,100);
  var cell_4 = new cell ( 3 , 250 ,250);
  var cell_5 = new cell ( 4 , 550 ,250);
  var cell_6 = new cell ( 5 , 850 ,250);
  var cell_7 = new cell ( 6 , 400 , 400);
  var cell_8 = new cell ( 7 , 550, 400);
  var cell_9 = new cell ( 8 , 700 , 400);
  var cell_10 = new cell ( 9 , 100, 550);
  var cell_11 = new cell (10, 250, 550);
  var cell_12 = new cell (11 , 400, 550);
  var cell_13 = new cell (12, 700 , 550);
  var cell_14 = new cell (13 , 850,550);
  var cell_15 = new cell (14 , 1000 , 550);
  var cell_16 = new cell (15 , 400 , 700);
  var cell_17 = new cell (16 , 550 , 700);
  var cell_18 = new cell (17, 700 , 700);
  var cell_19 = new cell (18 , 250, 850);
  var cell_20 = new cell (19 , 550 , 850 );
  var cell_21 = new cell (20 , 850 , 850);
  var cell_22 = new cell (21 , 100 , 1000);
  var cell_23 = new cell ( 22, 550 , 1000 );
  var cell_24 = new cell ( 23 , 1000 ,1000 );


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

  display = () =>{
    
    strokeWeight(cell_OUTLINE_WEIGHT);
    stroke(cell_DEFAULT_COLOUR);
    fill(CELL_INSIDE_COLOUR);
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


// Creattion of board


function create_game_board(){

  console.log("create page inoked!!!");

  noFill()
  strokeWeight(10);
  stroke(220);

  square(100 ,100, 900,10);
  square(250,250,600,10);
  square(400,400,300,10);

  line(550 , 100, 550, 400);
  line(100 , 550, 400, 550);
  line(700 , 550, 1000, 550);
  line(550 , 700, 550, 1000);

  GAME_BOARD.all_cell.forEach( (cell) => {
    cell.display();
  })
}


function setup() {

  var canvas = createCanvas(1200, 1200); // size of board
  background(50);

  canvas.id('canvas');
  GAME_BOARD = new Board();
  console.log("canvas invoke!!");
  create_game_board();


}




// player 1 html piece 

function player_one_avail_piece(){

  document.getElementById('player_one_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`

  for(let i = 0; i<player_one_available; i++)
    document.getElementById('player_one_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`

}

function player_one_out_piece (){
  // console.log("kokoko");
  document.getElementById('player_out_one_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500">Out Piece: </mark></h1>`

  for(let i = 0; i<player_one_out; i++)
    document.getElementById('player_out_one_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
}




function player_two_avail_piece(){

  document.getElementById('player_two_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`

  for(let i = 0; i<player_two_available; i++)
    document.getElementById('player_two_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`

}

function player_two_out_piece (){
  // console.log("kokoko");
  document.getElementById('player_out_two_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500">Out Piece: </mark></h1>`

  for(let i = 0; i<player_two_out; i++)
    document.getElementById('player_out_two_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
}

//
function mouseClicked() {
  // Loop through all cells and check if the mouse click is inside any of them
  for (let i = 0; i < GAME_BOARD.all_cell.length; i++) {
    let cell = GAME_BOARD.all_cell[i];
    let d = dist(mouseX, mouseY, cell.x_cordinate, cell.y_cordinate);
    if (d < CELL_RADIUS / 2) {
      console.log(`Clicked on cell ${cell.cell_number}`);
      // handle piece logicc
      handleCellClick(cell);
    }
  }
}

function handleCellClick(clickedCell) {
  // Add your logic here to handle the click event

  console.log(`Handling click for cell ${clickedCell.cell_number}`);
  
  clickedCell.player_colour = color(255, 0, 0); 
  redraw(); // Redraw the canvas to reflect the changes
}



