import creatingCards from './helpers/creatingCards.js';
import cards from './data/cards.js';

export default function // go to clicked category
    handleLinksClick() {
    document.getElementById('burger-menu').addEventListener('click', (event) => {
        if (event.target.classList.contains('link')) {
            // change active link
            document.querySelector('.active').classList.remove('active');
            event.target.classList.add('active');

            // if current page is not a start page than clear previous category words
            if (document.querySelector('.cards')) {
                document.querySelector('.cards').remove();
            }

            // hide rate block with checks and crosses
            document.querySelector('.rate').textContent = '';

            // hide repeat button
            document.querySelector('.repeat-button').classList.add('hidden');

            // close menu
            document.getElementById('burger-menu').classList.remove('opened');
            document.getElementById('burger-button').classList.remove('pressed');

            // hide categories
            document.querySelector('.categories').classList.add('hidden');

            // call the function of creating category cards
            if (!event.target.classList.contains('statistics-link')) {
                const categoryName = event.target.textContent;
                const wordsIndexInCards = cards[0].indexOf(categoryName) + 1;
                creatingCards(cards[wordsIndexInCards]);

                // hide statistics
                document.querySelector('.statistics').classList.add('hidden');
            }
        }
    });
}