import {initGame} from './Data/data.js';
import { initGameRender } from './Render/main.js';


//will be usefull when game ends
const globalState = initGame();

initGameRender(initGame());

