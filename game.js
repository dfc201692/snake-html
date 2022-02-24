import {SNAKE_SPEED,update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersation} from './snake.js'
import {outsideGrid} from './grid.js'
import {update as updaeFood, draw as drawFood} from './food.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if(gameOver){
    if(confirm('Perdiste el juego. Preciosn OK para reiniciar')){
      window.location = '/'
    }
    return
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
  if(secondSinceLastRender<1/SNAKE_SPEED){
    return
  }
  lastRenderTime = currentTime;
  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  checkDead();
}

function draw() {
    gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDead() {
  gameOver = outsideGrid(getSnakeHead())|| snakeIntersation();
}