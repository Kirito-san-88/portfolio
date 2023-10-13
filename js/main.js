import initializeModal from './header-modal.js';
import loading from './loading.js';
import navigationBurger from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  loading();
  initializeModal();
  navigationBurger();

  // on met l'année de la date en cours et qui change a chaque nouvel année
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById('date').innerHTML = year;
});
