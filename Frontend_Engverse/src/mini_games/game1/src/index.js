import '@/styles/style.css';
import '@/styles/style.scss';
import burgerMenu from './js_modules/burgerMenu.js';
import handleToggleClick from './js_modules/handleToggleClick.js';
import handleCategoryClick from './js_modules/handleCategoryClick.js';
import flipCards from './js_modules/flipCards.js';
import handleLinksClick from './js_modules/handleLinksClick.js';
import playAudioOnClick from './js_modules/playAudioOnClick.js';
import playMode from './js_modules/playMode.js';
import createStatistics from './js_modules/createStatistics.js';
import showStatistics from './js_modules/showStatistics.js';
import resetStatistics from './js_modules/resetStatistics.js';
import sortStatistics from './js_modules/sortStatistics.js';


window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  handleToggleClick();
  handleCategoryClick();
  flipCards();
  handleLinksClick();
  playAudioOnClick();
  playMode();
  createStatistics();
  showStatistics();
  resetStatistics();
  sortStatistics();
});
