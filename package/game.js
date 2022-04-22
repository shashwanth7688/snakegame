import $ from 'jquery';
import './style.css';


const width = 8
const height = 8

for(let y=0; y < height; y=y+1){
    $("#game").append(`<div id='row-${y}'></div>`)
    for(let x=0;x<width;x=x+1){
        $(`#row-${y}`).append(`<div id='cell-${x}' class='cell'> ${x},${y}</div>`)
    }
   
}
