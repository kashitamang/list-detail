// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderSign } from '../utils.js';
import { signs } from '/data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderSign() function', (expect) => {

    const expected = `<div class="sign"><a href="./signs/?id=1"><img src="./assets/sagittarius.jpg"></a><h2>sagittarius</h2><h3>(nov.21 - dec.21)</h3></div>`;

    const actual = renderSign(signs[0]);

    expect.equal(actual.outerHTML, expected);
});
