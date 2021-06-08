import changeGradientIfGame from './changeGradientIfGame.js';
import changeCardsPageViewIfGame from './changeCardsPageViewIfGame.js';
import properties from '../data/properties.js';

export default function // change view of the toggle and view of the page
    switchToggle() {
    const modeText = document.getElementById('mode__text');
    const toggle = document.getElementById('mode__toggle');

    properties.isGame = !properties.isGame;

    // change view of the toggle
    toggle.classList.toggle('play-on');
    modeText.classList.toggle('mode__text_to-right');
    modeText.textContent = properties.isGame ? 'PLAY' : 'TRAIN';

    // change color of gradient
    changeGradientIfGame();

    // show start game button
    if (document.querySelector('.card')) {
        changeCardsPageViewIfGame();
    }
}