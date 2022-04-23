import $ from 'jquery';
import _ from 'lodash'
class Grid {
    constructor(width, height, snake) {
        this.width = width;
        this.height = height;
        this.snake = snake;
    }
    create() {
        for (let j = 0; j < this.height; j++) {
            $("#game").append(`<div id='row-${j}' class="row"></div>`);
            for (let i = 0; i < this.width; i++) {
                let isHead, isTail;
                const entire_snake = this.snake.SnakeBody;
                const body_snake = _.tail(entire_snake);
                (entire_snake[0].x == i && entire_snake[0].y == j) ? isHead = true : isHead = false;
                isTail = body_snake.filter((body_snake) => {
                    if (body_snake.x == i && body_snake.y == j)
                        return body_snake;
                }).length > 0;
                if (isHead)
                    $(`#row-${j}`).append(`<div class="cell heads">${i}${j}</div>`);
                else if (isTail)
                    $(`#row-${j}`).append(`<div class="cell tail">${i}${j}</div>`);
                else
                    $(`#row-${j}`).append(`<div class="cell">${i}${j}</div>`);


            }
        }
    }
}
export { Grid };