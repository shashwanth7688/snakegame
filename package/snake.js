import { Block } from "./block";
import _ from 'lodash';

class Snake {
    constructor(init_length, init_Xpos, init_Ypos, direction) {
        this.init_length = init_length
        this.init_Xpos = init_Xpos;
        this.init_Ypos = init_Ypos;
        this.direction = direction;
        this.SnakeBody = this.MakeSnakeBody();
    }

    getOppositeDirection(direction) {
        const opposite = {
            'N': 'S',
            'S': 'N',
            'E': 'W',
            'W': 'E',
        }
        return opposite[direction];
    }

    MakeSnakeBody() {
        const head = new Block(this.init_Xpos, this.init_Ypos);
        const bodyCells = _.range(1, this.init_length);
        const body = _.map(bodyCells, step => head.nextCell(this.getOppositeDirection(this.direction), step));
        return [head, ...body];
    }

    move = () => {
        let currentHead = this.SnakeBody[0];
        let newHead = currentHead.nextCell(this.direction, 1);
        this.SnakeBody.pop()
        this.SnakeBody = [newHead, ...this.SnakeBody]
    }

    turn = (directionToTurn) => {
        this.direction = directionToTurn
    }

}
export { Snake };