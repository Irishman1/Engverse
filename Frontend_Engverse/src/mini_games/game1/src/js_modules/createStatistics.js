import cards from './data/cards.js';

export default function createStatistics() {
    const table = document.querySelector('.statistics').querySelector('table').querySelector('tbody');

    table.querySelectorAll('tr').forEach((tr) => {
        tr.remove();
    });

    for (let i = 1; i < cards.length; i += 1) {
        cards[i].forEach((word) => {
            // create localStorage properties
            if (!localStorage[word.word]) {
                localStorage.setItem(`${word.word}`, JSON.stringify({ train: 0, correct: 0, wrong: 0 }));
            }

            const wordObj = JSON.parse(localStorage[word.word]);

            // count percent of right answers
            let percentOfCorrect;
            if (wordObj.correct === 0 && wordObj.wrong === 0) {
                percentOfCorrect = 0;
            } else {
                percentOfCorrect = (wordObj.correct / (wordObj.wrong + wordObj.correct) * 100).toFixed(0);
            }

            // create table row for each word
            table.insertAdjacentHTML('beforeend', `<tr><td>${word.word}</td><td>${cards[0][i - 1]}</td><td>${word.translation}</td><td>${wordObj.train}</td><td>${wordObj.correct}</td><td>${wordObj.wrong}</td><td>${percentOfCorrect}</td></tr>`);
        });
    }
}