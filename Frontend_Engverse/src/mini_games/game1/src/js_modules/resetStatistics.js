import createStatistics from './createStatistics.js';

export default function resetStatistics() {
    document.querySelector('.reset-button').addEventListener('click', () => {
        localStorage.clear();
        createStatistics();
    });
}