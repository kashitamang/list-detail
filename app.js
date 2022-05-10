// import functions and grab DOM elements
import { signs } from '/data.js';
import { renderSign } from './utils.js';
//import { renderListItem } from './utils.js';
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//console.log('hello from app.js...');

//let state
const signListEl = document.getElementById('signs');

for (let sign of signs) {
    const signDiv = renderSign(sign);
    signListEl.append(signDiv);
}
