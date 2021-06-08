import creatingCards from './helpers/creatingCards.js';
import cards from './data/cards.js';

export default function handleCategoryClick() {
    document.querySelector('.categories').addEventListener('click', (event) => {
        // remove previous category words
        if (document.querySelector('.cards')) {
            document.querySelector('.cards').remove();
        }

        // if click is on a category
        if (event.target.closest('.category')) {
            const categoryName = event.target.closest('.category').querySelector('.category__name').textContent;
            const wordsIndexInCards = cards[0].indexOf(categoryName) + 1;

            // change active link in the menu
            document.querySelector('.active').classList.remove('active');
            document.querySelectorAll('.link')[cards[0].indexOf(categoryName)].classList.add('active');

            // hide categories
            document.querySelector('.categories').classList.add('hidden');

            // show cards of the category
            creatingCards(cards[wordsIndexInCards]);
        }
    });
}