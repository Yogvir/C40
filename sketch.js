var ball;
var database;
var playerCount;
var gameState = 0;
var player, form, game;
var allPlayers;
var cars, car1, car2, car3, car4;
var car1img, car2img, car3img, car4img;
var groundimg, trackimg;
var CarsAtEnd;
function preload() {
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  groundimg = loadImage("images/ground.png");
  trackimg = loadImage("images/track.jpg");
 
}

function setup() {
  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 100);

  game = new Game();
  game.getState();
  game.start();
}
function draw() {
  background("white");

  if (playerCount === 4) {
    game.updateState(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.displayRank();
  }
}
