import { makeUser, saveToLocalStorage } from '../1-user-info/userUtils.js';

// import functions and grab DOM elements
const form = document.querySelector('form');
const audio = document.getElementById('audio');
audio.src = '../assets/audio-files/Create User.mp3';
// set event listeners to update state and DOM
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const newUser = makeUser(formData);

    saveToLocalStorage('USER', newUser);

    window.location = '../2-choose-adventure/index.html';
});