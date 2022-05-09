// import functions and grab DOM elements
import { signs } from './sign details/data.js';
import { renderSign } from './utils.js';

const signListEl = document.getElementById('signs');

// let state
for (let sign of signs) {
    const signDiv = renderSign(sign);
    signListEl.append(signDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

console.log('hello from app.js...');