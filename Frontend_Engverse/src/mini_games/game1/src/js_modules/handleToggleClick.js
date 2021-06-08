import switchToggle from './helpers/switchToggle.js';

export default function handleToggleClick() {
    const mode = document.getElementById('mode');

    mode.addEventListener('click', () => {
        switchToggle();
    });
}