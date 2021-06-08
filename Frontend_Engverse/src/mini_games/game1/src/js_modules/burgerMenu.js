export default function // Open and close burger menu
    burgerMenu() {
    const burgerButton = document.getElementById('burger-button');
    const burgerMenu = document.getElementById('burger-menu');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('pressed');
        burgerMenu.classList.toggle('opened');
    });

    document.addEventListener('click', (event) => {
        if (burgerMenu.classList.contains('opened')) {
            if (!event.target.closest('.burger-menu')) {
                burgerMenu.classList.remove('opened');
                burgerButton.classList.remove('pressed');
            }
        }
    });
}