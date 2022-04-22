import $ from 'jquery';
import './style.css';

class Grid {
     constructor(width,height){
         this.width=width;
         this.height=height;
     }
     create = () => {
        for(let y=0; y < this.height; y=y+1){
            $("#game").append(`<div id='row-${y}'></div>`)
            for(let x=0;x < this.width;x++){
                $(`#row-${y}`).append(`<div id='cell-${x}' class='cell'> ${x},${y}</div>`)
            }
           
        }
     }
}


export { Grid }