export default function changeGradientIfGame() {
    document.querySelectorAll('.blue-gradient').forEach((item) => {
        item.classList.toggle('red-gradient');
    });
}