import properties from "../data/properties.js";

export default function  // change view of the cards
    changeCardsPageViewIfGame() {
    document.querySelectorAll('.card').forEach((card) => {
        card.classList.toggle('card_game-mode');
    });

    // show and hide start button due to the mode
    document.querySelector('.start-game-button').classList.toggle('hidden', !properties.isGame);
}