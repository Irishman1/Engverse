import properties from './data/properties.js'

export default function playAudioOnClick() {
    document.addEventListener('click', (event) => {
        if (event.target.closest('.card') && !properties.isGame) {
            const audio = event.target.closest('.card').querySelector('audio');
            audio.play();

            // add 1 point to statistics to train property
            const word = event.target.closest('.card').querySelector('.card__front__name').textContent.replace('⟳', '');
            const wordObj = JSON.parse(localStorage[word]);

            wordObj.train += 1;
            localStorage.setItem(word, JSON.stringify(wordObj));
        }
    });
}