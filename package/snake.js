import $ from 'jquery';
import { Block } from './block';
class Snake{
constructor (length,initialXPos,initialYPos,direction){
    this.length = length
    this.initialXPos = initialXPos
    this.initialYPos = initialYPos
    this.direction = direction
    this.snakebody = this.createSnakeBody()
}
createSnakeBody = () => {
    const head = new Block(this.initialXPos, this.initialYPos);
    const body = [1,2,3,4].map(step => head.nextCell(this.direction, step))
    return [head, ...body]

}
}

export {Snake}