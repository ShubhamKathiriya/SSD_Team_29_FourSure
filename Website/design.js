/*
  =============  COLOUR VARIABLE  =============
*/

var DEFAULT_COLOUR = 0;
var cell_OUTLINE_WEIGHT = 5;
var CELL_INSIDE_COLOUR = 255;       // white colour
var cell_DEFAULT_COLOUR = 222;

var Player_1_COLOUR = '#11ff00';
var Player_2_COLOUR = '#fb00ff';

var flip1 = '#DFFF00';
var flip2 = '#CCCCFF';

/*
  =============  PIECE VARIABLE   ===============
*/
var TOTAL_PIECE = 9;

var player_one_available = 9;
var player_two_available = 9;
var player_one_out = 0;
var player_two_out = 0;


var turn_player = 0;   // 0 for player 1 and 1 for player 2

// ---------------------------------------

// player variable
let Player_1 = new Player(1, '#11ff00');
let Player_2 = new Player(2, '#fb00ff');



let cellsArray = [
  {
    cell_number: 0,
    x_cordinate: 135,
    y_cordinate: 135,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 1,
    x_cordinate: 585,
    y_cordinate: 135,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 2,
    x_cordinate: 1060,
    y_cordinate: 135,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 3,
    x_cordinate: 275,
    y_cordinate: 275,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 4,
    x_cordinate: 585,
    y_cordinate: 275,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 5,
    x_cordinate: 885,
    y_cordinate: 275,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 6,
    x_cordinate: 435,
    y_cordinate: 425,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 7,
    x_cordinate: 585,
    y_cordinate: 425,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 8,
    x_cordinate: 735,
    y_cordinate: 425,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 9,
    x_cordinate: 135,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 10,
    x_cordinate: 275,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 11,
    x_cordinate: 425,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 12,
    x_cordinate: 740,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 13,
    x_cordinate: 900,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 14,
    x_cordinate: 1060,
    y_cordinate: 585,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 15,
    x_cordinate: 435,
    y_cordinate: 735,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 16,
    x_cordinate: 585,
    y_cordinate: 735,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 17,
    x_cordinate: 735,
    y_cordinate: 735,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 18,
    x_cordinate: 275,
    y_cordinate: 885,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 19,
    x_cordinate: 585,
    y_cordinate: 885,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 20,
    x_cordinate: 885,
    y_cordinate: 885,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 21,
    x_cordinate: 135,
    y_cordinate: 1045,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 22,
    x_cordinate: 585,
    y_cordinate: 1045,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  },
  {
    cell_number: 23,
    x_cordinate: 1060,
    y_cordinate: 1045,
    neighbours: [],
    vertical_cell: [],
    horizontal_cell: [],
    isEmpty: true,
    player_number: null,
    player_colour: DEFAULT_COLOUR
  }
]
const all_cells_coll = [];

var CELL_RADIUS = 60;

player_one_avail_piece();
player_one_out_piece();
player_two_avail_piece();
player_two_out_piece();

function create_board() {


  add_neighbours(cellsArray[0], cellsArray[1]);
  add_neighbours(cellsArray[0], cellsArray[9]);
  add_horizontal_cell(cellsArray[0], cellsArray[1]);
  add_horizontal_cell(cellsArray[0], cellsArray[2]);
  add_vertical_cell(cellsArray[0], cellsArray[9]);
  add_vertical_cell(cellsArray[0], cellsArray[21]);

  add_neighbours(cellsArray[1], cellsArray[0]);
  add_neighbours(cellsArray[1], cellsArray[2]);
  add_neighbours(cellsArray[1], cellsArray[4]);
  add_horizontal_cell(cellsArray[1], cellsArray[0]);
  add_horizontal_cell(cellsArray[1], cellsArray[2]);
  add_vertical_cell(cellsArray[1], cellsArray[4]);
  add_vertical_cell(cellsArray[1], cellsArray[7]);

  add_neighbours(cellsArray[2], cellsArray[1]);
  add_neighbours(cellsArray[2], cellsArray[14]);
  add_horizontal_cell(cellsArray[2], cellsArray[0]);
  add_horizontal_cell(cellsArray[2], cellsArray[1]);
  add_vertical_cell(cellsArray[2], cellsArray[14]);
  add_vertical_cell(cellsArray[2], cellsArray[23]);

  add_neighbours(cellsArray[3], cellsArray[4]);
  add_neighbours(cellsArray[3], cellsArray[10]);
  add_horizontal_cell(cellsArray[3], cellsArray[4]);
  add_horizontal_cell(cellsArray[3], cellsArray[5]);
  add_vertical_cell(cellsArray[3], cellsArray[10]);
  add_vertical_cell(cellsArray[3], cellsArray[18]);

  add_neighbours(cellsArray[4], cellsArray[3]);
  add_neighbours(cellsArray[4], cellsArray[5]);
  add_neighbours(cellsArray[4], cellsArray[7]);
  add_neighbours(cellsArray[4], cellsArray[1]);
  add_horizontal_cell(cellsArray[4], cellsArray[3]);
  add_horizontal_cell(cellsArray[4], cellsArray[5]);
  add_vertical_cell(cellsArray[4], cellsArray[1]);
  add_vertical_cell(cellsArray[4], cellsArray[7]);

  add_neighbours(cellsArray[5], cellsArray[4]);
  add_neighbours(cellsArray[5], cellsArray[13]);
  add_horizontal_cell(cellsArray[5], cellsArray[3]);
  add_horizontal_cell(cellsArray[5], cellsArray[4]);
  add_vertical_cell(cellsArray[5], cellsArray[13]);
  add_vertical_cell(cellsArray[5], cellsArray[20]);

  add_neighbours(cellsArray[6], cellsArray[7]);
  add_neighbours(cellsArray[6], cellsArray[11]);
  add_horizontal_cell(cellsArray[6], cellsArray[7]);
  add_horizontal_cell(cellsArray[6], cellsArray[8]);
  add_vertical_cell(cellsArray[6], cellsArray[11]);
  add_vertical_cell(cellsArray[6], cellsArray[15]);

  add_neighbours(cellsArray[7], cellsArray[4]);
  add_neighbours(cellsArray[7], cellsArray[6]);
  add_neighbours(cellsArray[7], cellsArray[8]);
  add_horizontal_cell(cellsArray[7], cellsArray[6]);
  add_horizontal_cell(cellsArray[7], cellsArray[8]);
  add_vertical_cell(cellsArray[7], cellsArray[1]);
  add_vertical_cell(cellsArray[7], cellsArray[4]);

  add_neighbours(cellsArray[8], cellsArray[7]);
  add_neighbours(cellsArray[8], cellsArray[12]);
  add_horizontal_cell(cellsArray[8], cellsArray[6]);
  add_horizontal_cell(cellsArray[8], cellsArray[7]);
  add_vertical_cell(cellsArray[8], cellsArray[12]);
  add_vertical_cell(cellsArray[8], cellsArray[17]);

  add_neighbours(cellsArray[9], cellsArray[0]);
  add_neighbours(cellsArray[9], cellsArray[10]);
  add_neighbours(cellsArray[9], cellsArray[21]);
  add_horizontal_cell(cellsArray[9], cellsArray[10]);
  add_horizontal_cell(cellsArray[9], cellsArray[11]);
  add_vertical_cell(cellsArray[9], cellsArray[0]);
  add_vertical_cell(cellsArray[9], cellsArray[21]);

  add_neighbours(cellsArray[10], cellsArray[9]);
  add_neighbours(cellsArray[10], cellsArray[11]);
  add_neighbours(cellsArray[10], cellsArray[3]);
  add_neighbours(cellsArray[10], cellsArray[18]);
  add_horizontal_cell(cellsArray[10], cellsArray[9]);
  add_horizontal_cell(cellsArray[10], cellsArray[11]);
  add_vertical_cell(cellsArray[10], cellsArray[3]);
  add_vertical_cell(cellsArray[10], cellsArray[18]);

  add_neighbours(cellsArray[11], cellsArray[6]);
  add_neighbours(cellsArray[11], cellsArray[10]);
  add_neighbours(cellsArray[11], cellsArray[15]);
  add_horizontal_cell(cellsArray[11], cellsArray[9]);
  add_horizontal_cell(cellsArray[11], cellsArray[10]);
  add_vertical_cell(cellsArray[11], cellsArray[6]);
  add_vertical_cell(cellsArray[11], cellsArray[15]);

  add_neighbours(cellsArray[12], cellsArray[8]);
  add_neighbours(cellsArray[12], cellsArray[17]);
  add_neighbours(cellsArray[12], cellsArray[13]);
  add_horizontal_cell(cellsArray[12], cellsArray[13]);
  add_horizontal_cell(cellsArray[12], cellsArray[14]);
  add_vertical_cell(cellsArray[12], cellsArray[8]);
  add_vertical_cell(cellsArray[12], cellsArray[17]);

  add_neighbours(cellsArray[13], cellsArray[5]);
  add_neighbours(cellsArray[13], cellsArray[12]);
  add_neighbours(cellsArray[13], cellsArray[14]);
  add_neighbours(cellsArray[13], cellsArray[20]);
  add_horizontal_cell(cellsArray[13], cellsArray[12]);
  add_horizontal_cell(cellsArray[13], cellsArray[14]);
  add_vertical_cell(cellsArray[13], cellsArray[5]);
  add_vertical_cell(cellsArray[13], cellsArray[20]);

  add_neighbours(cellsArray[14], cellsArray[2]);
  add_neighbours(cellsArray[14], cellsArray[13]);
  add_neighbours(cellsArray[14], cellsArray[23]);
  add_horizontal_cell(cellsArray[14], cellsArray[12]);
  add_horizontal_cell(cellsArray[14], cellsArray[13]);
  add_vertical_cell(cellsArray[14], cellsArray[2]);
  add_vertical_cell(cellsArray[14], cellsArray[23]);

  add_neighbours(cellsArray[15], cellsArray[11]);
  add_neighbours(cellsArray[15], cellsArray[16]);
  add_horizontal_cell(cellsArray[15], cellsArray[16]);
  add_horizontal_cell(cellsArray[15], cellsArray[17]);
  add_vertical_cell(cellsArray[15], cellsArray[6]);
  add_vertical_cell(cellsArray[15], cellsArray[11]);

  add_neighbours(cellsArray[16], cellsArray[15]);
  add_neighbours(cellsArray[16], cellsArray[17]);
  add_neighbours(cellsArray[16], cellsArray[19]);
  add_horizontal_cell(cellsArray[16], cellsArray[15]);
  add_horizontal_cell(cellsArray[16], cellsArray[17]);
  add_vertical_cell(cellsArray[16], cellsArray[19]);
  add_vertical_cell(cellsArray[16], cellsArray[22]);

  add_neighbours(cellsArray[17], cellsArray[12]);
  add_neighbours(cellsArray[17], cellsArray[16]);
  add_horizontal_cell(cellsArray[17], cellsArray[15]);
  add_horizontal_cell(cellsArray[17], cellsArray[16]);
  add_vertical_cell(cellsArray[17], cellsArray[8]);
  add_vertical_cell(cellsArray[17], cellsArray[12]);

  add_neighbours(cellsArray[18], cellsArray[10]);
  add_neighbours(cellsArray[18], cellsArray[19]);
  add_horizontal_cell(cellsArray[18], cellsArray[19]);
  add_horizontal_cell(cellsArray[18], cellsArray[20]);
  add_vertical_cell(cellsArray[18], cellsArray[3]);
  add_vertical_cell(cellsArray[18], cellsArray[10]);

  add_neighbours(cellsArray[19], cellsArray[16]);
  add_neighbours(cellsArray[19], cellsArray[18]);
  add_neighbours(cellsArray[19], cellsArray[20]);
  add_neighbours(cellsArray[19], cellsArray[22]);
  add_horizontal_cell(cellsArray[19], cellsArray[18]);
  add_horizontal_cell(cellsArray[19], cellsArray[20]);
  add_vertical_cell(cellsArray[19], cellsArray[16]);
  add_vertical_cell(cellsArray[19], cellsArray[22]);

  add_neighbours(cellsArray[20], cellsArray[13]);
  add_neighbours(cellsArray[20], cellsArray[19]);
  add_horizontal_cell(cellsArray[20], cellsArray[18]);
  add_horizontal_cell(cellsArray[20], cellsArray[19]);
  add_vertical_cell(cellsArray[20], cellsArray[5]);
  add_vertical_cell(cellsArray[20], cellsArray[13]);

  add_neighbours(cellsArray[21], cellsArray[9]);
  add_neighbours(cellsArray[21], cellsArray[22]);
  add_horizontal_cell(cellsArray[21], cellsArray[22]);
  add_horizontal_cell(cellsArray[21], cellsArray[23]);
  add_vertical_cell(cellsArray[21], cellsArray[0]);
  add_vertical_cell(cellsArray[21], cellsArray[9]);

  add_neighbours(cellsArray[22], cellsArray[19]);
  add_neighbours(cellsArray[22], cellsArray[21]);
  add_neighbours(cellsArray[22], cellsArray[23]);
  add_horizontal_cell(cellsArray[22], cellsArray[21]);
  add_horizontal_cell(cellsArray[22], cellsArray[23]);
  add_vertical_cell(cellsArray[22], cellsArray[16]);
  add_vertical_cell(cellsArray[22], cellsArray[19]);

  add_neighbours(cellsArray[23], cellsArray[14]);
  add_neighbours(cellsArray[23], cellsArray[22]);
  add_horizontal_cell(cellsArray[23], cellsArray[21]);
  add_horizontal_cell(cellsArray[23], cellsArray[22]);
  add_vertical_cell(cellsArray[23], cellsArray[2]);
  add_vertical_cell(cellsArray[23], cellsArray[14]);


  all_cells_coll.push(cellsArray[0]);
  all_cells_coll.push(cellsArray[1]);
  all_cells_coll.push(cellsArray[2]);
  all_cells_coll.push(cellsArray[3]);
  all_cells_coll.push(cellsArray[4]);
  all_cells_coll.push(cellsArray[5]);
  all_cells_coll.push(cellsArray[6]);
  all_cells_coll.push(cellsArray[7]);
  all_cells_coll.push(cellsArray[8]);
  all_cells_coll.push(cellsArray[9]);
  all_cells_coll.push(cellsArray[10]);
  all_cells_coll.push(cellsArray[11]);
  all_cells_coll.push(cellsArray[12]);
  all_cells_coll.push(cellsArray[13]);
  all_cells_coll.push(cellsArray[14]);
  all_cells_coll.push(cellsArray[15]);
  all_cells_coll.push(cellsArray[16]);
  all_cells_coll.push(cellsArray[17]);
  all_cells_coll.push(cellsArray[18]);
  all_cells_coll.push(cellsArray[19]);
  all_cells_coll.push(cellsArray[20]);
  all_cells_coll.push(cellsArray[21]);
  all_cells_coll.push(cellsArray[22]);
  all_cells_coll.push(cellsArray[23]);

  return all_cells_coll;
}


// function Cell(cell_no , x_cord , y_cord){

//   this.cell_number = cell_no;
//   this.x_cordinate = x_cord;
//   this.y_cordinate = y_cord;       
//   this.neighbours = [];
//   this.vertical_cell = [];
//   this.horizontal_cell = [];  
//   this.isEmpty = true;
//   this.player_number = null;
//   this.player_colour = DEFAULT_COLOUR;
// }

function add_neighbours(main_cell, neighbour_cell) {
  main_cell.neighbours.push(neighbour_cell.cell_number);
}

function add_vertical_cell(main_cell, cell) {
  main_cell.vertical_cell.push(cell.cell_number);
}

function add_horizontal_cell(main_cell, cell) {
  main_cell.horizontal_cell.push(cell.cell_number);
}

function display(cell) {
  strokeWeight(cell_OUTLINE_WEIGHT);
  stroke(cell_DEFAULT_COLOUR);
  fill(cell.player_colour);
  circle(cell.x_cordinate, cell.y_cordinate, CELL_RADIUS);
}


function Player(number, color) {

  this.player_number = number;
  this.player_colour = color;
  this.on_board = 0;                 // piece on board
  this.on_hand = TOTAL_PIECE;        // piece on hand
  this.out_piece = 0;                // piece on cut down by other player
}




let GAME_BOARD = {

  all_cell: create_board(),
  Player_1: Player_1,
  Player_2: Player_2,
  turn: Player_1,
  waiting: Player_2
}


// Creattion of board

function create_game_board() {
  console.log("create page inoked!!!");

  noFill();
  strokeWeight(10);
  stroke(220);

  square(135, 135, 935, 35);
  square(275, 275, 625, 35);
  square(425, 425, 325, 35);

  line(585, 135, 585, 425);
  line(135, 585, 435, 580);
  line(725, 585, 1025, 580);
  line(585, 725, 585, 1015);
  GAME_BOARD.all_cell.forEach((cell) => {

    display(cell);
  });
}


let backgroundImage;

function preload() {

  backgroundImage = loadImage("board.jpg");
}

function setup() {
  var canvas = createCanvas(1200, 1130); // size of board
  // background(50);

  background(backgroundImage);
  canvas.id("canvas");

  console.log("canvas invoke!!");
  create_game_board();
}


function addAudio(src, duration) {

  let date = new Date();
  let timestamp = date.getTime();

  const audioDiv = document.getElementById("audio-div")

  const newSourceTag = document.createElement("source")
  newSourceTag.setAttribute("src", src)
  newSourceTag.setAttribute("type", "audio/mpeg")
  const newAudioTag = document.createElement("audio")
  newAudioTag.appendChild(newSourceTag)
  newAudioTag.setAttribute("autoplay", true)
  newAudioTag.setAttribute("id", timestamp)
  audioDiv.appendChild(newAudioTag)

  setTimeout(() => {
    const removeEle = document.getElementById(timestamp)
    removeEle.remove()
  }, duration + 1000);

}



var player_1_turn = false;
var player_2_turn = false;
var full_now = false;



function change_turn(turn_player) {
  if (turn_player == 0)
    return 1;

  return 0;

}

function findTargetCell(clickedCell, prevCellNeighbors) {
  // Check if the clicked cell is a neighbor to the previous cell
  const isNeighbor = prevCellNeighbors.some(neighborCell => neighborCell.cell_number === clickedCell.cell_number);

  print(isNeighbor);

  if (isNeighbor && clickedCell.isEmpty) {
    // Return the clicked cell as the target cell if it's empty
    return clickedCell;
  } else {
    // Return null or handle the case where the clicked cell is not a valid target
    return null;
  }
}


let firstClick = null; // Variable to store the information of the first click
let cut_piece = false; // remove the piece after mill formation

document.addEventListener('click', mouse_click_event);
function mouse_click_event() {

  for (let i = 0; i < GAME_BOARD.all_cell.length; i++) {
    let cell = GAME_BOARD.all_cell[i];
    let d = dist(mouseX, mouseY, cell.x_cordinate, cell.y_cordinate);

    if (d < CELL_RADIUS / 2) {
      console.log(`Clicked on cell ${cell.cell_number}`);


      if (cut_piece) {
        console.log("cut the piece");
        addAudio('./sounds/cut_sound.mp3', 2)
        handle_mill(cell);
      }

      else {
        if (full_now) {
          console.log('moving phase');
          moving_phase(cell);
        }


        else {
          console.log("place");
          handleCellClick(cell);
          addAudio('./sounds/place_sound.mp3', 2)
        }
      }

      if (win_condition(GAME_BOARD.turn)) {
        console.log(GAME_BOARD.waiting.player_number, "   win !!");
        addAudio('./sounds/win_sound.mp3', 4);
        document.removeEventListener('click', mouse_click_event);
        pauseTimers();
        break;
      }
      console.log(GAME_BOARD.turn.player_number, "turn arrived!!1");


    }
  }
}


// moving phase 
function moving_phase(clicked_cell) {

  // First click: Check if the clicked cell has the correct player color

  if (firstClick === null) {


    if (clicked_cell.isEmpty == true) {
      console.log("Empty cell is selected!!");
      return;
    }

    // console.log("==================");
    // console.log(clicked_cell.player_colour);
    // console.log("=================");
    // console.log(GAME_BOARD.turn.player_colour);


    if (clicked_cell.player_colour != GAME_BOARD.turn.player_colour) {

      console.log("You selected the other player piece so you cant move the pieces");
      return;
    }


    var is_empty_neighbour = false;

    let len = clicked_cell.neighbours.length;

    for (let i = 0; i < len; i++) {

      let neighbour_number = clicked_cell.neighbours[i];

      if (cellsArray[neighbour_number].isEmpty)
        is_empty_neighbour = true;
    }

    if (!is_empty_neighbour) {
      console.log("Selected cell has no neighbur empty!!");
      return;
    }

    // if ((turn_player == 0 && cell.player_number === 1) || (turn_player == 1 && cell.player_number === 2)) {
    firstClick = clicked_cell;
    console.log('First click registered. Now select a neighbor for sliding.');
    // } 

    // else {
    //   print(turn_player);
    //   console.log(`Invalid first click. Choose a cell with the correct player color for turn ${turn_player + 1}.`);
    // }
  }



  // Second click: Check if the clicked cell is a neighbor to the first click and has the default color

  else {

    // const firstClickNeighbors = getAdjacentCells(firstClick);

    let first_click_cell_number = firstClick.cell_number;

    const firstClickNeighbors = cellsArray[first_click_cell_number].neighbours;

    // const isNeighborWithDefaultColor = firstClickNeighbors.some(
    //   neighborCell => neighborCell.cell_number === cell.cell_number && neighborCell.isEmpty
    // );

    if (clicked_cell.isEmpty == false) {

      console.log("You selected filled cell !! select another!");
      return;
    }

    // if(clicked_cell.cell_number == firstClick.cell_number){

    //   console.log("Self click");
    //   return;
    // }

    let is_neighbour = false;
    // console.log(firstClickNeighbors);
    let len = firstClickNeighbors.length;

    for (let i = 0; i < len; i++) {

      if (firstClickNeighbors[i] == clicked_cell.cell_number) {
        is_neighbour = true;
        break;
      }
    }

    if (is_neighbour == false) {
      console.log("You selected wrong neighbour!! select again!!");
      return;
    }

    // if (isNeighborWithDefaultColor) {
    //   console.log('Second click registered. Applying sliding.');

    slidePiece(firstClick, clicked_cell);

    addAudio('./sounds/slide_sound.mp3', 2)


    // Check for mill formation after sliding
    const millFormed = checkForMill(clicked_cell);

    firstClick = null;

    if (millFormed) {
      print("Mill formed");
      cut_piece = true;
      return;
    }
    else
      print("No mill formed");

    let temp = GAME_BOARD.turn;
    GAME_BOARD.turn = GAME_BOARD.waiting;
    GAME_BOARD.waiting = temp;


    if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
      // Start player 1 timer
      toggleButtons("left");
      pauseTimers();
      startLeftTimer();
    } else {
      // Start player 2 timer
      toggleButtons("right");
      pauseTimers();
      startRightTimer();
    }


    // }

    // else {
    //   console.log('Invalid second click. Choose a neighbor cell with the default color.');
    // }
  }


}





function slidePiece(currentCell, targetCell) {
  // Check if the target cell is empty
  if (targetCell.isEmpty) {
    // Swap the content of the current cell and the target cell
    [targetCell.player_number, currentCell.player_number] = [currentCell.player_number, targetCell.player_number];
    [targetCell.player_colour, currentCell.player_colour] = [currentCell.player_colour, targetCell.player_colour];
    [targetCell.isEmpty, currentCell.isEmpty] = [currentCell.isEmpty, targetCell.isEmpty];


    // Update the board display or perform any necessary updates
    create_game_board();

    // Log the move
    console.log(`Player ${currentCell.player_number} slid a piece from ${currentCell.cell_number} to ${targetCell.cell_number}`);

    // Return true to indicate a successful slide
    return true;
  }

  else {
    // The target cell is not empty, sliding is not possible
    console.log('Cannot slide to an occupied cell.');

    // Return false to indicate an unsuccessful slide
    return false;
  }
}


//---------------------------------------------Mill formation-----------------------------------------------------------------------------------------------------------


function checkForMill(cell) {

  // Check for a horizontal mill(

  // cell is empty
  if (cell.isEmpty) {
    console.log("cell is empty!!!");
    return;
  }

  // console.log(cell)
  let horizontal_neighbour = cell.horizontal_cell;
  let len = horizontal_neighbour.length;

  // console.log("for mill   " , horizontal_neighbour);

  let is_horizontal_mill = true;

  for (let i = 0; i < len; i++) {

    let horizontal_number = horizontal_neighbour[i];

    if (cellsArray[horizontal_number].player_number != cell.player_number)
      is_horizontal_mill = false;
  }

  let vertical_neighbour = cell.vertical_cell;
  len = vertical_neighbour.length;

  let is_vertical_mill = true;

  for (let i = 0; i < len; i++) {

    let vertical_number = vertical_neighbour[i];

    if (cellsArray[vertical_number].player_number != cell.player_number)
      is_vertical_mill = false;

  }
    
  var tt=is_horizontal_mill || is_vertical_mill;

 // print(cell.player_number);

  if(tt){
    print(cell.player_number);
    mill_formation_message(cell.player_number);
  }

  return is_horizontal_mill || is_vertical_mill;
}

function handle_mill(cell) {


  if (cell.isEmpty) {
    console.log("During mill selection piece ,   cell is empty")
    return;
  }

  // console.log(cell.player_colour , "   =>   " ,  GAME_BOARD.turn.player_colour);
  // console.log("================");


  if (cell.player_colour == GAME_BOARD.turn.player_colour) {
    console.log("During mill selection piece ,  same colour piece selcted!");
    return;
  }

  let cut_player = cell.player_number;

  if (cut_player === 1) {
    GAME_BOARD.Player_1.out_piece++;
    GAME_BOARD.Player_1.on_board--;
  }

  else {
    GAME_BOARD.Player_2.out_piece++;
    GAME_BOARD.Player_2.on_board--;
  }

  cell.isEmpty = true;
  cell.player_number = null;
  cell.player_colour = DEFAULT_COLOUR;


  create_game_board();

  // Switch players
  let temp = GAME_BOARD.turn;
  GAME_BOARD.turn = GAME_BOARD.waiting;
  GAME_BOARD.waiting = temp;

  if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
    // Start player 1 timer
    toggleButtons("left");
    pauseTimers();
    startLeftTimer();
  } else {
    // Start player 2 timer
    toggleButtons("right");
    pauseTimers();
    startRightTimer();
  }


  cut_piece = false;
}




function handleCellClick(clickedCell) {

  console.log(`Handling click for cell ${clickedCell.cell_number}`);

  // Check if the cell is already colored with a player's color
  if (!clickedCell.isEmpty || clickedCell.player_number !== null) {
    console.log('Cell is already colored. No further action needed.');

    // full_now=true;

    // blinkNeighbors(clickedCell);

    return;
  }


  // console.log(GAME_BOARD.turn);
  // console.log("-==================-");
  // console.log(GAME_BOARD.turn.on_board);
  // console.log("-==================-");

  if (

    (GAME_BOARD.turn === GAME_BOARD.Player_1 && GAME_BOARD.turn.on_board >= TOTAL_PIECE) ||
    (GAME_BOARD.turn === GAME_BOARD.Player_2 && GAME_BOARD.turn.on_board >= TOTAL_PIECE)
  ) {
    console.log(`Player ${GAME_BOARD.turn.player_number} has already placed 9 pieces. Cannot place more.`);

    full_now = true;   // doubt

    return;
  }


  clickedCell.player_number = GAME_BOARD.turn.player_number;
  clickedCell.player_colour = GAME_BOARD.turn.player_colour;
  clickedCell.isEmpty = false;


  if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
    player_one_available--;
    player_one_avail_piece();

    // change_turn(turn_player);
  }

  else {
    player_two_available--;
    player_two_avail_piece();

    // change_turn(turn_player);
  }

  GAME_BOARD.turn.on_board++;
  GAME_BOARD.turn.on_hand--;

  if (GAME_BOARD.Player_1.on_hand == 0 && GAME_BOARD.Player_2.on_hand == 0) {
    full_now = true;
  }

  create_game_board();


  // Check for mill formation after sliding
  const millFormed = checkForMill(clickedCell);

  if (millFormed) {
    print("Mill formed");
    cut_piece = true;
    return;
  }
  else
    print("No mill formed");


  // Switch players
  let temp = GAME_BOARD.turn;
  GAME_BOARD.turn = GAME_BOARD.waiting;
  GAME_BOARD.waiting = temp;


  if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
    // Start player 1 timer
    toggleButtons("left");
    pauseTimers();
    startLeftTimer();
  } else {
    // Start player 2 timer
    toggleButtons("right");
    pauseTimers();
    startRightTimer();
  }


  // printNeighbors(clickedCell);

  // console.log(`Color of cell ${clickedCell.cell_number} set to ${clickedCell.player_colour}`);
  console.log(`It's now Player ${GAME_BOARD.turn.player_number}'s turn`);

}


function getAdjacentCells(clickedCell) {

  const adjacentCells = [];

  // console.log(`Neighbors array for cell ${clickedCell.cell_number}: ${clickedCell.neighbours}`);

  for (const neighborCell of clickedCell.neighbours) {

    const neighborCellObj = GAME_BOARD.all_cell.find(cell => cell.cell_number === neighborCell.cell_number);

    if (neighborCellObj) {
      adjacentCells.push(neighborCellObj);
    } else {
      console.log(`Neighbor cell ${neighborCell.cell_number} not found.`);
    }
  }

  return adjacentCells;
}


function printNeighbors(clickedCell) {
  // Get the adjacent cells for the clicked cell
  const adjacentCells = getAdjacentCells(clickedCell);

  console.log(`Neighbors of cell ${clickedCell.cell_number}:`);
  for (const neighborCell of adjacentCells) {
    if (neighborCell) {
      console.log(`Cell ${neighborCell.cell_number}`);
    } else {
      console.log('Neighbor cell not found.');
    }
  }
  //  blinkNeighbors(clickedCell);
}





//----------------------------------------Win condition--------------------------------------------------------------------------------


function is_block(player_num) {

  let all_block = true;

  // console.log(GAME_BOARD.all_cell);
  // console.log(player_num);

  for (let i = 0; i < GAME_BOARD.all_cell.length; i++) {

    if (GAME_BOARD.all_cell[i].player_number == player_num) {

      let len = GAME_BOARD.all_cell[i].neighbours.length;

      for (let j = 0; j < len; j++) {

        if (GAME_BOARD.all_cell[i].neighbours[j] == null)
          all_block = false;
        return false;
      }

    }

  }

  return true;

}

function win_condition(player_obj) {

  // first condition - out piece = 7
  // is_block


  if (player_obj.out_piece == TOTAL_PIECE - 2) {

    console.log("case1 pichle wala win!!!");
    var temp = player_obj.player_number;
    //  print(player_obj);
    if (temp == 1) {
      win_message(2);
      // print(2);
    } else {
      win_message(1);
      // print(1);
    }
    return true;
  }


  // second block condition

  if (player_obj.on_board == 0) {
    console.log("Player doesnt have any piece on board!!!");
    return false;
  }

  let block_result = is_block(player_obj.player_number);

  if (block_result) {
    var temp = player_obj.player_number;
    // print(player_obj);
    if (temp == 1) {
      win_message(2);
      // print(2);
    } else {
      win_message(1);
      // print(1);
    }

    console.log("case2 pichle wala win!!!");
    return true;

  }
  return false;


}

function checkGameStatus() {
  if (t1.as('seconds') === 0) {

    console.log("Player 2 wins! Player 1's time is up.");
    document.removeEventListener('click', mouse_click_event);
    addAudio('./sounds/win_sound.mp3', 4);
    pauseTimers();
    win_message(2);

  } else if (t2.as('seconds') === 0) {

    console.log("Player 1 wins! Player 2's time is up.");
    document.removeEventListener('click', mouse_click_event);
    addAudio('./sounds/win_sound.mp3', 4);
    pauseTimers();
    win_message(1);
  }
}






    // player 1 html piece 
  
    function player_one_avail_piece(){
  
      document.getElementById('player_one_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`
  
      for(let i = 0; i<player_one_available; i++)
        document.getElementById('player_one_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
    }
  
    function player_one_out_piece (){
  
      let temp = "" ;
      for(let i = 0; i<player_one_out; i++)
        temp += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`

      document.getElementById('player_out_one_piece').innerHTML = ` ${temp}  <h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500"> : Out Piece </mark></h1>`
    }
  
  
  
  
    function player_two_avail_piece(){
  
      document.getElementById('player_two_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`
  
      for(let i = 0; i<player_two_available; i++)
        document.getElementById('player_two_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
  
    }
  
    function player_two_out_piece (){
      
      let temp = "";
      
      for(let i = 0; i<player_two_out; i++)
        temp += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
      
      
      document.getElementById('player_out_two_piece').innerHTML = `${temp} <h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500"> : Out Piece </mark></h1>`
    }
  





//---------------- timer-----------------------------------------------------------------------------------//
function getTimeString(time) {
  // console.log(time);
  var secs = time.get('seconds');
  // console.log(secs);

  if (secs < 10) {
    secs = "0" + secs;
  }
  return time.get('minutes') + ':' + secs;
}

// Toggle classes and disabled props of buttons
function toggleButtons(elem) {
  if (elem === "right") {
    // Props

    $("#left .toggle").prop("disabled", false);
    $("#right .toggle").prop("disabled", true);


    // Classes
    $("#right .toggle").addClass("btn-default btn-disabled");
    $("#right .toggle").removeClass("btn-primary");
    $("#left .toggle").addClass("btn-primary");
  } else if (elem === "left") {
    // Props
    $("#left .toggle").prop("disabled", true);
    $("#right .toggle").prop("disabled", false);

    // Classes
    $("#left .toggle").addClass("btn-default btn-disabled");
    $("#left .toggle").removeClass("btn-primary");
    $("#right .toggle").addClass("btn-primary");
  }
}

// Restores both toggles to the original state
function resetButtonClasses() {
  $("#left input").addClass("btn-primary");
  $("#left input").removeClass("btn-default btn-disabled");
  $("#right input").addClass("btn-primary");
  $("#right input").removeClass("btn-default btn-disabled");
}

// Change the time shown on the page
function displayTime(elem, time) {
  $(elem).html(getTimeString(time));
}


var t1, t2, leftTimer, rightTimer, activePlayer;

let leftTimerRunning = false;
let rightTimerRunning = false;
let startButtonClicked = false;

function initializeTimers(minutes) {
  t1 = moment.duration(minutes, "minutes");
  t2 = moment.duration(minutes, "minutes");
  console.log(t1)
  console.log(t2)
  displayTime("#left .time", t1);
  displayTime("#right .time", t2);
  activePlayer = "Player 1";
}



//start left timer----------------------------------------------------

function startLeftTimer() {
  turn_message(1);
  leftTimer = setInterval(function () {
    if (t1.as('seconds') > 0) {
      t1.subtract(moment.duration(1, 's'));
      displayTime("#left .time", t1);
      checkGameStatus();

    } else {
      clearInterval(leftTimer);
    }
  }, 1000);
}
// start right timer---------------------------------------
function startRightTimer() {
  turn_message(2);
  rightTimer = setInterval(function () {
    if (t2.as('seconds') > 0) {
      t2.subtract(moment.duration(1, 's'));
      displayTime("#right .time", t2);
      checkGameStatus();
    } else {
      clearInterval(rightTimer);
    }
  }, 1000);
}

function pauseTimers() {
  clearInterval(leftTimer);
  clearInterval(rightTimer);
}



//reset timer----------------------------------------------------------------------------------
function resetTimers(minutes) {
  pauseTimers();
  initializeTimers(minutes);
  resetButtonClasses();
  $("#left input").prop("disabled", false);
  $("#right input").prop("disabled", false);
}

// Init timers
initializeTimers(5);
displayTime("#left .time", t1);
displayTime("#right .time", t2);

// Set right timer
$('#right .toggle').on('click', function () {
  startButtonClicked = true;
  pauseTimers();
  toggleButtons("right");
  activePlayer = "Player 2";
  startRightTimer();
  turn_message(2);
});

// Set left timer
$('#left .toggle').on('click', function () {
  startButtonClicked = true;
  pauseTimers();
  toggleButtons("left");
  activePlayer = "Player 1";
  startLeftTimer();
  turn_message(1);
});

// Start button click handler
$("#start").on('click', function () {
  if (!startButtonClicked) {
    console.log("Clicked");
    startButtonClicked = true;
    if (activePlayer === "Player 2" && rightTimerRunning == false) {
      toggleButtons("right");
      rightTimerRunning = true;
      startRightTimer();
    } else if (activePlayer === "Player 1" && leftTimerRunning == false) {
      toggleButtons("left");
      leftTimerRunning = true;
      startLeftTimer();
    }
  }
});

// Pause timer for the active player
$("#pause").on('click', function () {
  startButtonClicked = false;
  if (activePlayer === "Player 1") {
    toggleButtons("left");
    leftTimerRunning = false;
  } else {
    toggleButtons("right");
    rightTimerRunning = false;
  }

  pauseTimers();
});

// Reset both timers and toggles
$("#reset").on('click', function () {
  resetTimers(5);
  startButtonClicked = false;
  leftTimerRunning = rightTimerRunning = false;
});

$('#time-input').on('change', function () {
  resetTimers(parseInt($('#time-input').val()));
});




//=----------------------------save the state-----------------------------------------------------

function save_game() {

  localStorage.setItem("saved_game", JSON.stringify(GAME_BOARD));
  localStorage.setItem("cells_array", JSON.stringify(cellsArray));

  // localStorage.setItem("prototype")

  let time_object = {

    player1 : t1,
    p1_get : t1.get,
    p1_as :  t1.as,
    p1_sub : t1. subtract,
    
    player_2 : t2,
    p2_get : t2.get,
    p2_as :  t2.as,
    p2_sub : t2. subtract,


  }

  localStorage.setItem("time_obj", JSON.stringify(time_object) );
  // localStorage.setItem("Player_2_time", JSON.stringify(t2) );

  console.log("saved!!");
}

function reset_game() {
  location.reload();
}

function load_game() {

  let board_json = localStorage.getItem("saved_game")
  let saved_board = JSON.parse(board_json)

  let cell_array_json = localStorage.getItem("cells_array")
  let saved_cells_array = JSON.parse(cell_array_json);



  let time_json = localStorage.getItem("time_obj");
  let player_time = JSON.parse(time_json);

  let p1_time = player_time.player1;
  p1_time_get = player_time.p1_get
  p1_time.as = player_time.p1_as
  p1_time.subtract = player_time.p1_sub

  let p2_time = player_time.player_2;
  p2_time.get = player_time.p2_get
  p2_time.as = player_time.p2_as
  p2_time.subtract = player_time.p2_sub;
  // t1 = p1_time
  // t2 = p2_time

  t1 = moment.duration(p1_time._milliseconds, "milliseconds");
  t2 = moment.duration(p2_time._milliseconds, "milliseconds");
  
    console.log(t1);
    console.log(t2);


  GAME_BOARD = saved_board;
  cellsArray = saved_cells_array;

  
displayTime("#left .time", t1);
displayTime("#right .time", t2);

  create_game_board();
}
// -------------- messages ---------------

function win_message(win_player) {
  const element = document.querySelector("#win");
 

  
  if (win_player == 1) {

    element.innerHTML = "Player 1 wins :) ";
  } else if (win_player == 2) {
    element.innerHTML = "Player 2 wins :) ";
  }
  
}



function turn_message(temp_turn) {
  const element = document.querySelector("#win");
  if (temp_turn == 1) {
    element.innerHTML = "Turn : Player 1 ";
  } else if (temp_turn == 2) {
    element.innerHTML = "Turn : Player 2 ";
  }
}

function mill_formation_message(temp_turn) {
  const element = document.querySelector("#win");
  if (temp_turn == 1) {
    element.innerHTML = "Remove a piece from player 2";
  } else if (temp_turn == 2) {
    element.innerHTML = "Remove a piece from player 1";
  }
}

function default_mesage()
{
  const element = document.querySelector("#win");
  element.innerHTML = "Default";
}

