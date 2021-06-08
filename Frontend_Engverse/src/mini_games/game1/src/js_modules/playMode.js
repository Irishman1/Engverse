import properties from './data/properties.js';
import createStatistics from './createStatistics.js';
import showResultPage from './helpers/showResultPage';

export default function // game process
    playMode() {
    document.querySelector('.start-game-button').addEventListener('click', () => {
        document.querySelector('.rate').textContent = '';

        document.querySelector('.start-game-button').classList.add('hidden');
        document.querySelector('.repeat-button').classList.remove('hidden');
        document.querySelector('.repeat-button').textContent = '⟳';

        let mixedWordsArray = properties.currentCategoryWords.slice();

        // mix th words
        for (let i = mixedWordsArray.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [mixedWordsArray[i], mixedWordsArray[j]] = [mixedWordsArray[j], mixedWordsArray[i]];
        }

        // word pronounce function
        const playCardAudio = (index) => {
            if (mixedWordsArray.length) {
                const audio = document.createElement('audio');
                audio.src = mixedWordsArray[index].audioSrc;
                audio.play();
            }
        };

        // play correct audio function
        const guess = () => {
            const audio = document.createElement('audio');
            audio.src = require('../assets/audio/correct.mp3');
            audio.play();
        };

        // play correct wrong function
        const error = () => {
            const audio = document.createElement('audio');
            audio.src = require('../assets/audio/error.mp3');
            audio.play();
        };

        // play audio of the first word
        let i = 0;

        playCardAudio(i);

        // initialize error counter
        let errors = 0;

        let widthOfRateBlock = 0;

        document.querySelector('.cards').addEventListener('click', (event) => {
            // check if it is a game mode
            if (properties.isGame) {
                if (event.target.classList.contains('card__image') && i < mixedWordsArray.length) {
                    // if right card was clicked
                    if (event.target.closest('.card').querySelector('.card__back__name').textContent
                        === mixedWordsArray[i].translation) {
                        // play audio of correct click
                        guess();

                        // add 1 point to statistics to correct answers
                        const word = event.target.closest('.card').querySelector('.card__front__name').textContent.replace('⟳', '');
                        const wordObj = JSON.parse(localStorage[word]);
                        wordObj.correct += 1;
                        localStorage.setItem(word, JSON.stringify(wordObj));

                        createStatistics();

                        // add check
                        const widthOfCheck = 32.03;
                        widthOfRateBlock += widthOfCheck;

                        // if the block is overfill, clear content
                        if (widthOfRateBlock > document.querySelector('.wrapper').offsetWidth) {
                            widthOfRateBlock = 0;
                            document.querySelector('.rate').textContent = '';
                        }
                        document.querySelector('.rate').insertAdjacentHTML('beforeend', '<span class="check">✔</span>');

                        // make clicked card disabled and change its view
                        event.target.closest('.card').querySelector('.card__background').classList.remove('hidden');
                        event.target.closest('.card').classList.add('disabled');

                        // go the next word if the previous was not the last or show result page
                        i += 1;

                        if (i < mixedWordsArray.length) {
                            playCardAudio(i);
                        } else {
                            showResultPage(errors);
                        }
                    } else {
                        // play audio of wrong click
                        error();

                        errors += 1;

                        // add 1 point to statistics to wrong answers
                        const { word } = mixedWordsArray[i];
                        const wordObj = JSON.parse(localStorage[word]);
                        wordObj.wrong += 1;
                        localStorage.setItem(word, JSON.stringify(wordObj));

                        createStatistics();

                        // add cross
                        const widthOfCross = 32.68;
                        widthOfRateBlock += widthOfCross;

                        // if the block is overfill, clear content
                        if (widthOfRateBlock > document.querySelector('.wrapper').offsetWidth) {
                            widthOfRateBlock = 0;
                            document.querySelector('.rate').textContent = '';
                        }
                        document.querySelector('.rate').insertAdjacentHTML('beforeend', '<span class="cross">✖</span>');
                    }
                }
            }
        });

        document.getElementById('mode').addEventListener('click', () => {
            // clear results of previous game
            document.querySelector('.rate').textContent = '';
            mixedWordsArray = [];

            // hide buttons
            document.querySelector('.start-game-button').classList.toggle('hidden', !properties.isGame);
            document.querySelector('.repeat-button').classList.add('hidden');

            // reset styles of the cards
            document.querySelectorAll('.card').forEach((card) => {
                card.classList.remove('disabled');
                card.querySelector('.card__background').classList.add('hidden');
            });
        });

        // repeat the word
        document.querySelector('.repeat-button').addEventListener('click', () => {
            playCardAudio(i);
        });
    });
}