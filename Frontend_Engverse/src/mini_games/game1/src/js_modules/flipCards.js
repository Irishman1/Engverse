export default function flipCards() {
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('card__turn-over-btn')) {
            event.target.closest('.card').classList.add('card_flipped-over');

            document.querySelector('.card_flipped-over').addEventListener('mouseleave', (e) => {
                e.target.classList.remove('card_flipped-over');
            });
        }
    });
}