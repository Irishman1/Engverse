// import functions and grab DOM elements
import adventureData from '../Data/data.js';
import { renderAdventure, completedAdventure } from './adventureUtils.js';
import { getFromLocalStorage } from '../1-user-info/userUtils.js';

// initialize state
const main = document.querySelector('main');
const localStorage = getFromLocalStorage('USER');
const completedStorage = localStorage.completed;
const audio = document.getElementById('audio');
audio.src = '../assets/audio-files/Click book choose adventure 2.mp3';

for (let i = 0; i < adventureData.length; i++) {
    const adventure = adventureData[i];

    if (completedStorage.length === adventureData.length) {
        window.location = '../5-certificate-page/index.html';

    } else if (completedStorage[i] === adventure.id) {
        const completedElement = completedAdventure(adventure);

        main.appendChild(completedElement);
    } else {
        const element = renderAdventure(adventure);

        main.appendChild(element);
    }
}




