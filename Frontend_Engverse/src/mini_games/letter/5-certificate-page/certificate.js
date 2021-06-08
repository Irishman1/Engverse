// import functions and grab DOM elements

import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const userAdventureStats = getFromLocalStorage('USER');


const audio = document.getElementById('audio');


if (userAdventureStats.completed.length < 5) {

    alert('Sorry! Please complete all Adventure Journals first.');
    window.location = '../2-choose-adventure/index.html';
} else {
    // set event listeners to update state and DOM
    const section = document.querySelector('section');
    const p = document.createElement('p');


    p.classList.add('completed-letters');
    p.textContent = `Congrats ${userAdventureStats.name}!`;
    audio.src = '../assets/audio-files/Certificate page message.mp3';
    const completedDiv = document.createElement('div');
    completedDiv.textContent = `You successfully completed Adventures 1, 2, 3, 4, & 5. You know your A, B, C's!`;


    section.append(p, completedDiv);
}
