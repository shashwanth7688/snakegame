import './style.css';
import {Grid} from './grid';
import { Snake } from './snake';


const width = 8
const height = 8
const initiallength=4;

const grid = new Grid(width,height);
const snake = new Snake(initiallength,2,3,"N");

grid.create();
