import changeCardsPageViewIfGame from "./changeCardsPageViewIfGame.js";
import properties from "../data/properties.js";

export default function // creating cards and rate block with checks and crosses
    creatingCards(wordsArray) {
    properties.currentCategoryWords = wordsArray;

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards');

    document.querySelector('.rate').classList.remove('hidden');

    wordsArray.forEach((word) => {
        const cardFrontImage = document.createElement('div');
        cardFrontImage.classList.add('card__image');
        cardFrontImage.style.backgroundImage = `url(${word.image})`;

        const cardFront = document.createElement('div');
        cardFront.classList.add('card__front');
        cardFront.insertAdjacentElement('beforeend', cardFrontImage);
        cardFront.insertAdjacentHTML('beforeend', `<div class="card__front__name">${word.word}<span class="card__turn-over-btn">⟳</span></div>`);

        const cardBackImage = document.createElement('div');
        cardBackImage.classList.add('card__image');
        cardBackImage.style.backgroundImage = `url(${word.image})`;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card__back');
        cardBack.insertAdjacentElement('beforeend', cardBackImage);
        cardBack.insertAdjacentHTML('beforeend', `<div class="card__back__name">${word.translation}</div>`);

        const cardInner = document.createElement('div');
        cardInner.classList.add('card__inner');
        cardInner.insertAdjacentElement('beforeend', cardFront);
        cardInner.insertAdjacentElement('beforeend', cardBack);

        const cardBackground = document.createElement('div');
        cardBackground.classList.add('card__background', 'hidden');

        const card = document.createElement('div');
        card.classList.add('card');
        card.insertAdjacentElement('beforeend', cardInner);
        card.insertAdjacentElement('beforeend', cardBackground);
        card.insertAdjacentHTML('beforeend', `<audio src="${word.audioSrc}"></audio>`);

        cardsContainer.insertAdjacentElement('beforeend', card);

        document.querySelector('main .rate').insertAdjacentElement('afterend', cardsContainer);
    });

    // if the game mode was turned on at the page with categories
    if (properties.isGame) {
        changeCardsPageViewIfGame();
    }
}