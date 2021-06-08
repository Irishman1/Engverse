// IMPORT MODULES under test here:
import { renderAdventure } from '../2-choose-adventure/adventureUtils.js';
import adventureData from '../Data/data.js';
import { findById, renderLetters } from '../3-game-page/game-page-utils.js';

const test = QUnit.test;

const adventure1 = {
    id: 'adventure1',
    title: 'Adventure 1',
    image: '../assets/adventure1.png',
    background: '../assets/background1.png',
    description: `
           Review the letters below. When you are ready, click the "Let's Play" button at the bottom of the page to navigate to the game page. Happy studying! :) `,
    letterChoices: [{
        id: 'A',
        number: 1,
        image: '../assets/data-letters/A.png',
        description: 'The uppercase letter A. This is the 1st letter in the English alphabet!',
        result: 'Great job! You earned one S(tudy) Coin!',
        sCoin: 1,
    }, {
        id: 'B',
        number: 2,
        image: '../assets/data-letters/B.png',
        description: 'The uppercase letter B. This is the 2nd letter in the English alphabet!',
        result: 'Nice job! You earned one S(tudy) Coin!',
        sCoin: 1,
    }, {
        id: 'C',
        number: 3,
        image: '../assets/data-letters/C.png',
        description: 'The uppercase letter C. This is the 3rd letter in the English alphabet!',
        result: 'Amazing job! You earned one S(tudy) Coin!',
        sCoin: 1,
    }, {
        id: 'D',
        number: 4,
        image: '../assets/data-letters/D.png',
        description: 'The uppercase letter D. This is the 4th letter in the English alphabet!',
        result: 'Awesome job! You earned one S(tudy) Coin!',
        sCoin: 1,
    }, {
        id: 'E',
        number: 5,
        image: '../assets/data-letters/E.png',
        description: 'The uppercase letter E. This is the 5th letter in the English alphabet!',
        result: 'Awesome job! You earned one S(tudy) Coin!',
        sCoin: 1,
    }]
};

test('renderAdventure', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const adventure1 = {
        id: 'adventure1',
        image: '../assets/blue.png'
    };
    
    const actual = renderAdventure(adventure1);
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = `<section><label><a href="../3-game-page/?id=adventure1"><img src="../assets/blue.png"></a><input type="radio" value="adventure1" name="adventure-choice" class="pack-div"></label></section>`;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

test('tests if the function searches an array and returns find the first value that matches the id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const letter1 = 'A';
    const letter2 = 'B';
    const expectedLetter1 = adventure1.letterChoices[0];
    const expectedLetter2 = adventure1.letterChoices[1];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(adventure1.letterChoices, letter1);
    const actual2 = findById(adventure1.letterChoices, letter2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expectedLetter1);
    expect.deepEqual(actual2, expectedLetter2);
});

test('tests if the function renders a group of letters to page', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><label class="letter-labels"><input type="radio" name="letter-select" value="A"><img class="letter-tiles" src="../assets/data-letters/A.png"></label><label class="letter-labels"><input type="radio" name="letter-select" value="B"><img class="letter-tiles" src="../assets/data-letters/B.png"></label><label class="letter-labels"><input type="radio" name="letter-select" value="C"><img class="letter-tiles" src="../assets/data-letters/C.png"></label><label class="letter-labels"><input type="radio" name="letter-select" value="D"><img class="letter-tiles" src="../assets/data-letters/D.png"></label><label class="letter-labels"><input type="radio" name="letter-select" value="E"><img class="letter-tiles" src="../assets/data-letters/E.png"></label></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLetters(adventureData[0].letterChoices);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});