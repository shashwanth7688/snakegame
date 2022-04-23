import './style.css'
import { Grid } from './grid';
import $ from 'jquery'
import { Snake } from './snake';
const width = 8;
const height = 8;
const init_length = 5;

const snake = new Snake(init_length, 3, 3, "N");
const grid = new Grid(width, height, snake);

const directionKey = {
    'ArrowUp': 'N',
    'ArrowDown': 'S',
    'ArrowLeft': 'W',
    'ArrowRight': 'E'
}

const keyFunction = (event) => {
    if (directionKey[event.key])
        snake.turn(directionKey[event.key])
}

document.addEventListener("keyup", keyFunction)

const render = () => {
    grid.create();
    snake.move();
    $("#game").empty();
    grid.create();

}

const startGame = () => {
    setInterval(render, 1000)
}
startGame()