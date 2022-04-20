
let grid;
let cols;
let rows;
let resolution = 10;
var gameSpeed = 10

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(800, 800);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  intitiateArraystatus();


  /*
  *
  *
  *   Uncomment lines to show the stuctures
  * 
  *   (coordX, coordY) if possible (x, y, inverted[vertical], inverted[horizontal])
  *
  * 
  */


  // With movement

  plannersCannon(50, false, false);
  // bigSpaceShip(10, 20);
  // middleSpaceShip(20, 10);
  // lilSpaceShip(10, 30);
  // canadaGoose(20, 50);
  // bigFuckingShip(100, 20);  //// warning not working


  // Without movement
  
  // helice(10);
  // pentadecathlon(30);
  // ossilateur(10, 15);
  // ossilateurArrounded(10, 30);
  // cross(35, 10);
  // diagonale(10, 40);
  // clock(30, 25);
  // clockBis(30, 40);
  // octogone(30, 55);
  // fountain(10, 50);
  // galaxy(10, 65);

}
setInterval(Draw, gameSpeed);

function Draw() {
  
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function intitiateArraystatus(){
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0
    }
  }
}

function randomPlacement(){
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2)); 
    }
  }
}

function helice(center){

  grid[center][center] = 1
  grid[center - 1][center] = 1
  grid[center + 1][center] = 1
  grid[center + 2][center] = 1
  grid[center - 2][center] = 1

}

function plannersCannon(center, invert, returned){

  if (invert == false && returned == false)
  {
    grid[center][center] = 1
    grid[center - 1][center] = 1
    grid[center - 1][center + 1] = 1
    grid[center - 1][center - 1] = 1
    grid[center - 2][center + 2] = 1
    grid[center - 2][center - 2] = 1
    grid[center - 3][center] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 5][center - 3] = 1
    grid[center - 5][center + 3] = 1
    grid[center - 6][center - 2] = 1
    grid[center - 6][center + 2] = 1
    grid[center - 7][center - 1] = 1
    grid[center - 7][center + 1] = 1
    grid[center - 7][center] = 1

    grid[center - 16][center - 1] = 1
    grid[center - 17][center] = 1
    grid[center - 17][center - 1] = 1
    grid[center - 16][center] = 1

    grid[center + 3][center - 1] = 1
    grid[center + 3][center - 2] = 1
    grid[center + 3][center - 3] = 1
    grid[center + 4][center - 1] = 1
    grid[center + 4][center - 2] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 5][center - 4] = 1
    grid[center + 5][center] = 1
    grid[center + 7][center - 4] = 1
    grid[center + 7][center] = 1
    grid[center + 7][center - 5] = 1
    grid[center + 7][center + 1] = 1

    grid[center + 17][center - 2] = 1
    grid[center + 18][center - 2] = 1
    grid[center + 17][center - 3] = 1
    grid[center + 18][center - 3] = 1
  }
  else if(invert == true && returned == false)
  {
    grid[center][center] = 1
    grid[center + 1][center] = 1
    grid[center + 1][center - 1] = 1
    grid[center + 1][center + 1] = 1
    grid[center + 2][center - 2] = 1
    grid[center + 2][center + 2] = 1
    grid[center + 3][center] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 5][center + 3] = 1
    grid[center + 5][center - 3] = 1
    grid[center + 6][center + 2] = 1
    grid[center + 6][center - 2] = 1
    grid[center + 7][center + 1] = 1
    grid[center + 7][center - 1] = 1
    grid[center + 7][center] = 1

    grid[center + 16][center + 1] = 1
    grid[center + 17][center] = 1
    grid[center + 17][center + 1] = 1
    grid[center + 16][center] = 1

    grid[center - 3][center + 1] = 1
    grid[center - 3][center + 2] = 1
    grid[center - 3][center + 3] = 1
    grid[center - 4][center + 1] = 1
    grid[center - 4][center + 2] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 5][center + 4] = 1
    grid[center - 5][center] = 1
    grid[center - 7][center + 4] = 1
    grid[center - 7][center] = 1
    grid[center - 7][center + 5] = 1
    grid[center - 7][center - 1] = 1

    grid[center - 17][center + 2] = 1
    grid[center - 18][center + 2] = 1
    grid[center - 17][center + 3] = 1
    grid[center - 18][center + 3] = 1
  }
  else  if(invert == false && returned == true)
  {
    grid[center][center] = 1
    grid[center - 1][center] = 1
    grid[center - 1][center - 1] = 1
    grid[center - 1][center + 1] = 1
    grid[center - 2][center - 2] = 1
    grid[center - 2][center + 2] = 1
    grid[center - 3][center] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 5][center + 3] = 1
    grid[center - 5][center - 3] = 1
    grid[center - 6][center + 2] = 1
    grid[center - 6][center - 2] = 1
    grid[center - 7][center + 1] = 1
    grid[center - 7][center - 1] = 1
    grid[center - 7][center] = 1

    grid[center - 16][center + 1] = 1
    grid[center - 17][center] = 1
    grid[center - 17][center + 1] = 1
    grid[center - 16][center] = 1

    grid[center + 3][center + 1] = 1
    grid[center + 3][center + 2] = 1
    grid[center + 3][center + 3] = 1
    grid[center + 4][center + 1] = 1
    grid[center + 4][center + 2] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 5][center + 4] = 1
    grid[center + 5][center] = 1
    grid[center + 7][center + 4] = 1
    grid[center + 7][center] = 1
    grid[center + 7][center + 5] = 1
    grid[center + 7][center - 1] = 1

    grid[center + 17][center + 2] = 1
    grid[center + 18][center + 2] = 1
    grid[center + 17][center + 3] = 1
    grid[center + 18][center + 3] = 1
  }
  else if(invert == true && returned == true)
  {
    grid[center][center] = 1
    grid[center + 1][center] = 1
    grid[center + 1][center + 1] = 1
    grid[center + 1][center - 1] = 1
    grid[center + 2][center + 2] = 1
    grid[center + 2][center - 2] = 1
    grid[center + 3][center] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 5][center - 3] = 1
    grid[center + 5][center + 3] = 1
    grid[center + 6][center - 2] = 1
    grid[center + 6][center + 2] = 1
    grid[center + 7][center - 1] = 1
    grid[center + 7][center + 1] = 1
    grid[center + 7][center] = 1

    grid[center + 16][center - 1] = 1
    grid[center + 17][center] = 1
    grid[center + 17][center - 1] = 1
    grid[center + 16][center] = 1

    grid[center - 3][center - 1] = 1
    grid[center - 3][center - 2] = 1
    grid[center - 3][center - 3] = 1
    grid[center - 4][center - 1] = 1
    grid[center - 4][center - 2] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 5][center - 4] = 1
    grid[center - 5][center] = 1
    grid[center - 7][center - 4] = 1
    grid[center - 7][center] = 1
    grid[center - 7][center - 5] = 1
    grid[center - 7][center + 1] = 1

    grid[center - 17][center - 2] = 1
    grid[center - 18][center - 2] = 1
    grid[center - 17][center - 3] = 1
    grid[center - 18][center - 3] = 1
  }

  gameSpeed = 50;

}

function bigSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX + 3][startY + 1] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 5][startY - 3] = 1
  grid[startX + 6][startY - 3] = 1
  grid[startX + 6][startY - 2] = 1
  grid[startX + 6][startY - 1] = 1
  grid[startX + 5][startY] = 1
  
}

function middleSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 5][startY - 3] = 1
  grid[startX + 5][startY - 2] = 1
  grid[startX + 5][startY - 1] = 1
  grid[startX + 4][startY] = 1
  
}

function lilSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 1] = 1
  grid[startX + 3][startY] = 1
  
}

function canadaGoose(startX, startY)
{
  
  grid[startX][startY] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  
  grid[startX - 1][startY - 2] = 1
  grid[startX][startY - 3] = 1
  grid[startX + 1][startY - 2] = 1
  grid[startX + 2][startY - 2] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 4][startY - 4] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 5][startY - 3] = 1
  grid[startX + 5][startY - 4] = 1
  grid[startX + 5][startY - 5] = 1
  grid[startX + 5][startY - 6] = 1
  grid[startX + 6][startY - 5] = 1
  grid[startX + 6][startY - 6] = 1
  grid[startX + 7][startY - 8] = 1
  grid[startX + 8][startY - 9] = 1
  grid[startX + 8][startY - 10] = 1
  grid[startX + 9][startY - 9] = 1
  grid[startX + 9][startY - 8] = 1
  
  grid[startX + 1][startY - 5] = 1
  grid[startX + 1][startY - 6] = 1
  grid[startX + 1][startY - 7] = 1
  grid[startX + 2][startY - 5] = 1
  grid[startX + 2][startY - 6] = 1
  grid[startX + 2][startY - 7] = 1
  grid[startX - 1][startY - 7] = 1
  grid[startX - 1][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1
  
  grid[startX + 5][startY] = 1
  grid[startX + 7][startY] = 1
  grid[startX + 7][startY - 1] = 1
  grid[startX + 6][startY - 1] = 1
  grid[startX + 6][startY - 2] = 1
  grid[startX + 8][startY + 1] = 1
  grid[startX + 6][startY + 2] = 1
  grid[startX + 7][startY + 2] = 1
  
}

function pentadecathlon(start)
{

  for (var i = 0; i < 10; i++)
  {
    grid[start + i][start] = 1
  }

}

function bigFuckingShip(startX, startY)
{
  
  grid[startX][startY] = 1
  grid[startX][startY + 8] = 1
  grid[startX][startY + 1] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 2][startY + 6] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 6] = 1
  grid[startX + 4][startY] = 1
  grid[startX + 4][startY + 2] = 1
  grid[startX + 4][startY + 8] = 1
  grid[startX + 5][startY] = 1
  grid[startX + 5][startY + 6] = 1
  grid[startX + 5][startY + 7] = 1
  grid[startX + 5][startY + 8] = 1
  grid[startX + 6][startY] = 1
  grid[startX + 6][startY + 2] = 1
  grid[startX + 6][startY + 7] = 1
  grid[startX + 7][startY] = 1
  grid[startX + 8][startY + 1] = 1
  grid[startX + 9][startY + 1] = 1
  grid[startX + 8][startY + 2] = 1
  grid[startX + 9][startY + 2] = 1
  grid[startX + 9][startY + 4] = 1
  grid[startX + 9][startY + 5] = 1
  grid[startX + 10][startY + 3] = 1

  grid[startX][startY] = 1
  grid[startX][startY] = 1
  grid[startX][startY - 8] = 1
  grid[startX][startY - 1] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 1][startY - 8] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 2][startY - 1] = 1
  grid[startX + 2][startY - 5] = 1
  grid[startX + 2][startY - 6] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 3][startY - 6] = 1
  grid[startX + 4][startY] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 8] = 1
  grid[startX + 5][startY] = 1
  grid[startX + 5][startY - 6] = 1
  grid[startX + 5][startY - 7] = 1
  grid[startX + 5][startY - 8] = 1
  grid[startX + 6][startY] = 1
  grid[startX + 6][startY - 2] = 1
  grid[startX + 6][startY - 7] = 1
  grid[startX + 7][startY] = 1
  grid[startX + 8][startY - 1] = 1
  grid[startX + 9][startY - 1] = 1
  grid[startX + 8][startY - 2] = 1
  grid[startX + 9][startY - 2] = 1
  grid[startX + 9][startY - 4] = 1
  grid[startX + 9][startY - 5] = 1
  grid[startX + 10][startY - 3] = 1

}

function ossilateur(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1
  grid[startX + 1][startY - 2] = 1
  grid[startX + 2][startY - 2] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX - 2][startY - 2] = 1
  grid[startX + 2][startY - 4] = 1
  grid[startX - 2][startY - 4] = 1
  grid[startX + 4][startY - 4] = 1
  grid[startX - 4][startY - 4] = 1
  grid[startX + 4][startY - 5] = 1
  grid[startX - 4][startY - 5] = 1
  grid[startX + 5][startY - 6] = 1
  grid[startX - 5][startY - 6] = 1
  grid[startX + 6][startY - 6] = 1
  grid[startX - 6][startY - 6] = 1
  grid[startX + 4][startY - 7] = 1
  grid[startX - 4][startY - 7] = 1
  grid[startX + 4][startY - 8] = 1
  grid[startX - 4][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1
  grid[startX + 2][startY - 8] = 1
  grid[startX - 2][startY - 10] = 1
  grid[startX + 2][startY - 10] = 1
  grid[startX - 1][startY - 10] = 1
  grid[startX + 1][startY - 10] = 1
  grid[startX][startY - 11] = 1
  grid[startX][startY - 12] = 1

}

function ossilateurArrounded(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1
  grid[startX + 1][startY - 1] = 1
  grid[startX - 1][startY - 1] = 1
  grid[startX + 1][startY - 2] = 1
  grid[startX + 2][startY - 2] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX - 2][startY - 2] = 1
  grid[startX - 3][startY - 2] = 1
  grid[startX + 3][startY - 2] = 1
  grid[startX - 3][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX - 3][startY - 4] = 1
  grid[startX + 3][startY - 4] = 1
  grid[startX - 4][startY - 4] = 1
  grid[startX + 4][startY - 4] = 1
  grid[startX - 4][startY - 5] = 1
  grid[startX + 4][startY - 5] = 1
  grid[startX - 5][startY - 5] = 1
  grid[startX + 5][startY - 5] = 1
  grid[startX - 4][startY - 6] = 1
  grid[startX + 4][startY - 6] = 1
  grid[startX - 3][startY - 6] = 1
  grid[startX + 3][startY - 6] = 1
  grid[startX - 3][startY - 7] = 1
  grid[startX + 3][startY - 7] = 1
  grid[startX - 3][startY - 8] = 1
  grid[startX + 3][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1
  grid[startX + 2][startY - 8] = 1
  grid[startX - 1][startY - 8] = 1
  grid[startX + 1][startY - 8] = 1
  grid[startX - 1][startY - 9] = 1
  grid[startX + 1][startY - 9] = 1
  grid[startX][startY - 9] = 1
  grid[startX][startY - 10] = 1

  grid[startX + 4][startY] = 1
  grid[startX + 4][startY - 1] = 1
  grid[startX + 5][startY] = 1
  grid[startX + 5][startY - 1] = 1

  grid[startX - 4][startY] = 1
  grid[startX - 4][startY - 1] = 1
  grid[startX - 5][startY] = 1
  grid[startX - 5][startY - 1] = 1

  grid[startX + 4][startY - 10] = 1
  grid[startX + 4][startY - 9] = 1
  grid[startX + 5][startY - 10] = 1
  grid[startX + 5][startY - 9] = 1

  grid[startX - 4][startY - 10] = 1
  grid[startX - 4][startY - 9] = 1
  grid[startX - 5][startY - 10] = 1
  grid[startX - 5][startY - 9] = 1

}

function cross(startX, startY)
{
  var startg = startX - 3

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1
  grid[startX][startY - 2] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX + 2][startY + 2] = 1
  grid[startX + 2][startY + 3] = 1
  grid[startX + 1][startY + 3] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1
  grid[startX][startY + 5] = 1
  grid[startX - 1][startY + 5] = 1
  grid[startX - 1][startY + 5] = 1

  grid[startg][startY] = 1
  grid[startg][startY - 1] = 1
  grid[startg][startY - 2] = 1
  grid[startg + 1][startY - 2] = 1
  grid[startg - 1][startY] = 1
  grid[startg - 2][startY] = 1
  grid[startg - 2][startY + 1] = 1
  grid[startg - 2][startY + 2] = 1
  grid[startg - 2][startY + 3] = 1
  grid[startg - 1][startY + 3] = 1
  grid[startg][startY + 3] = 1
  grid[startg][startY + 4] = 1
  grid[startg][startY + 5] = 1
  grid[startg + 1][startY + 5] = 1
  grid[startg + 1][startY + 5] = 1

}

function diagonale(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX + 1][startY + 1] = 1
  grid[startX][startY + 2] = 1
  grid[startX - 1][startY + 1] = 1
  grid[startX - 1][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1
  grid[startX - 3][startY + 2] = 1
  grid[startX - 3][startY + 3] = 1
  grid[startX - 3][startY + 4] = 1
  grid[startX - 4][startY + 4] = 1

  grid[startX][startY - 1] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX][startY - 3] = 1
  grid[startX + 1][startY - 2] = 1
  grid[startX + 1][startY - 3] = 1
  grid[startX + 2][startY - 2] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 3][startY - 4] = 1
  grid[startX + 3][startY - 5] = 1
  grid[startX + 4][startY - 5] = 1

}

function clock(startX, startY)
{

  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1

  grid[startX][startY + 1] = 1
  grid[startX][startY + 2] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1

  grid[startX + 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

  grid[startX + 5][startY + 1] = 1
  grid[startX + 5][startY + 2] = 1
  grid[startX + 5][startY + 3] = 1
  grid[startX + 5][startY + 4] = 1

  grid[startX + 1][startY + 7] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY + 7] = 1
  grid[startX + 2][startY + 8] = 1

  grid[startX + 3][startY - 2] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 3] = 1

  grid[startX - 2][startY + 2] = 1
  grid[startX - 3][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1
  grid[startX - 3][startY + 1] = 1

  grid[startX + 7][startY + 3] = 1
  grid[startX + 7][startY + 4] = 1
  grid[startX + 8][startY + 3] = 1
  grid[startX + 8][startY + 4] = 1

  grid[startX + 2][startY + 4] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 2] = 1

}

function clockBis(startX, startY)
{

  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1

  grid[startX][startY + 1] = 1
  grid[startX][startY + 2] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1

  grid[startX + 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

  grid[startX + 5][startY + 1] = 1
  grid[startX + 5][startY + 2] = 1
  grid[startX + 5][startY + 3] = 1
  grid[startX + 5][startY + 4] = 1

  grid[startX + 1][startY + 7] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY + 7] = 1
  grid[startX + 2][startY + 8] = 1

  grid[startX + 3][startY - 2] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 3] = 1

  grid[startX - 2][startY + 2] = 1
  grid[startX - 3][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1
  grid[startX - 3][startY + 1] = 1

  grid[startX + 7][startY + 3] = 1
  grid[startX + 7][startY + 4] = 1
  grid[startX + 8][startY + 3] = 1
  grid[startX + 8][startY + 4] = 1

  grid[startX + 1][startY + 2] = 1
  grid[startX + 2][startY + 3] = 1
  grid[startX + 3][startY + 1] = 1

}

function octogone(startX, startY)
{
  var startr = startY + 3
  var startl = startX + 3

  grid[startX][startY + 1] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 1][startY + 2] = 1
  grid[startX + 2][startY + 1] = 1

  grid[startl][startY + 1] = 1
  grid[startl + 1][startY] = 1
  grid[startl + 1][startY + 2] = 1
  grid[startl + 2][startY + 1] = 1

  grid[startX][startr + 1] = 1
  grid[startX + 1][startr] = 1
  grid[startX + 1][startr + 2] = 1
  grid[startX + 2][startr + 1] = 1

  grid[startl][startr + 1] = 1
  grid[startl + 1][startr] = 1
  grid[startl + 1][startr + 2] = 1
  grid[startl + 2][startr + 1] = 1

}

function fountain(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX + 1][startY] = 1

  grid[startX - 2][startY + 1] = 1
  grid[startX + 3][startY + 1] = 1
  grid[startX - 2][startY + 2] = 1
  grid[startX + 3][startY + 2] = 1
  grid[startX - 2][startY + 3] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX - 1][startY + 4] = 1
  grid[startX + 2][startY + 4] = 1
  grid[startX - 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX - 2][startY + 6] = 1
  grid[startX + 3][startY + 6] = 1
  grid[startX - 3][startY + 6] = 1
  grid[startX + 4][startY + 6] = 1
  grid[startX - 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

}

function galaxy(startX, startY)
{

  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1
  grid[startX + 1][startY + 3] = 1
  grid[startX + 1][startY + 4] = 1

  grid[startX][startY - 3] = 1
  grid[startX][startY - 4] = 1
  grid[startX - 1][startY - 3] = 1
  grid[startX - 1][startY - 4] = 1

  grid[startX - 3][startY] = 1
  grid[startX - 4][startY] = 1
  grid[startX - 3][startY + 1] = 1
  grid[startX - 4][startY + 1] = 1

  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1
  grid[startX + 3][startY - 1] = 1
  grid[startX + 4][startY - 1] = 1

  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 4] = 1
  grid[startX + 4][startY + 3] = 1
  grid[startX + 4][startY + 2] = 1

  grid[startX - 3][startY + 3] = 1
  grid[startX - 3][startY + 4] = 1
  grid[startX - 4][startY + 3] = 1
  grid[startX - 2][startY + 4] = 1

  grid[startX + 3][startY - 3] = 1
  grid[startX + 3][startY - 4] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 2][startY - 4] = 1

  grid[startX - 3][startY - 3] = 1
  grid[startX - 3][startY - 4] = 1
  grid[startX - 4][startY - 3] = 1
  grid[startX - 4][startY - 2] = 1

}