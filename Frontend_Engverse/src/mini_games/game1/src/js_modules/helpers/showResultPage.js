export default function showResultPage(errors) {
    // hide cards
    document.querySelector('.cards').remove();

    // show error or success page and play appropriate audio
    document.querySelector('.result-page').classList.remove('hidden');

    const audio = document.createElement('audio');

    if (errors) {
        document.querySelector('.result-page_error').classList.remove('hidden');
        document.querySelector('.result-page_error').querySelector('.errors').textContent = `errors: ${errors}`;
        audio.src = require('../../assets/audio/failure.mp3');
    } else {
        document.querySelector('.result-page_success').classList.remove('hidden');
        audio.src = require('../../assets/audio/success.mp3');
    }

    audio.play();

    // back to categories after 3 seconds
    setTimeout(() => {
        document.querySelector('.result-page').classList.add('hidden');
        document.querySelector('.result-page_error').classList.add('hidden');
        document.querySelector('.result-page_success').classList.add('hidden');
        document.querySelector('.categories').classList.remove('hidden');
        document.querySelector('.rate').textContent = '';
        document.querySelector('.rate').classList.add('hidden');
        document.querySelector('.repeat-button').classList.add('hidden');
    }, 3000);
}