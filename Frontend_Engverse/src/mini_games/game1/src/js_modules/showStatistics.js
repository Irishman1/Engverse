import createStatistics from './createStatistics.js';

export default function showStatistics() {
    document.querySelector('.statistics-link').addEventListener('click', () => {
        document.querySelector('.categories').classList.add('hidden');
        document.querySelector('.statistics').classList.remove('hidden');
        document.querySelector('.rate').classList.add('hidden');
        document.querySelector('.start-game-button').classList.add('hidden');
        if (document.querySelector('.cards')) {
            document.querySelector('.cards').classList.add('hidden');
        }
        createStatistics();
    });
}