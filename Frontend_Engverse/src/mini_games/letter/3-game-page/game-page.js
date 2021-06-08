// import functions and grab DOM elements
import { saveToLocalStorage, getFromLocalStorage } from '../1-user-info/userUtils.js';
import adventuresData from '../Data/data.js';
import { renderGame, findById, getRandomLetter, findLetterIndex } from './game-page-utils.js';
// initialize state
const main = document.querySelector('main');
const params = new URLSearchParams(window.location.search);
const adventureId = params.get('id');
const adventureData = findById(adventuresData, adventureId);
const sectionElement = renderGame(adventureData);
const backButton = document.querySelector('#back-button');
const radioTags = sectionElement.querySelectorAll('input[name="letter-select"]');
const description = document.getElementById('description');
const findLetter = document.getElementById('find-letter-prompt');
const letterStuff = adventureData.letterChoices;
const audio = document.getElementById('audio');

backButton.addEventListener('click', () => {
    window.location = '../2-choose-adventure';
});
main.append(sectionElement);

let gameRounds = 0;
function gamePlay(letterStuff) {
    const letter = getRandomLetter(letterStuff);

    return letter;
}
//set event listeners to update state and DOM

let letters = gamePlay(letterStuff);
let correctLetter = letters.id;
let correctDescription = letters.description;

description.textContent = correctDescription;
findLetter.textContent = `Find the letter ${correctLetter}`;
audio.src = '../assets/audio-files/' + letters.audio;
let letterIndex = findLetterIndex(letterStuff, correctLetter);
const numberOfRounds = adventureData.letterChoices.length;

radioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {
        const userChoice = e.target.value;
        if (userChoice === correctLetter) {
            alert(`Good job! You clicked on the letter ${correctLetter}`);
            gameRounds++;
            letterStuff.splice(letterIndex, 1);
            if (letterStuff.length > 0) {
                letters = gamePlay(letterStuff);

                correctLetter = letters.id;
                letterIndex = findLetterIndex(letterStuff, correctLetter);

                correctDescription = letters.description;
                description.textContent = correctDescription;
                findLetter.textContent = `Find the letter ${correctLetter}`;
                audio.src = '../assets/audio-files/' + letters.audio;
            }

        } else {
            alert(`Sorry! You did not click on the letter ${correctLetter}. Please try again`);
        }

        if (gameRounds === numberOfRounds) {


            const storage = getFromLocalStorage('USER');
            storage.completed.push(adventureId);
            saveToLocalStorage('USER', storage);
            window.location = '../2-choose-adventure/index.html';
        }
    });
});
