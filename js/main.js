import initializeModal from './header-modal.js';
import loading from './loading.js';
import navigationBurger from './navigation.js';

// Écouter l'événement de chargement complet du DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', () => {
  // Appeler la fonction 'loading()' pour gérer le chargement initial de la page
  loading();

  // Appeler la fonction 'initializeModal()' pour initialiser la fenêtre modale
  initializeModal();

  // Appeler la fonction 'navigationBurger()' pour gérer la navigation burger (peut-être un menu mobile)
  navigationBurger();

  // Créer une instance de la date actuelle
  let date = new Date();

  // Obtenir l'année actuelle à partir de la date
  let year = date.getFullYear();

  // Mettre l'année actuelle dans l'élément HTML avec l'ID 'date'
  document.getElementById('date').innerHTML = year;
});
/*
Ce code écoute l'événement DOMContentLoaded pour s'assurer que le code s'exécute une fois que le DOM est complètement chargé.
Ensuite, il appelle différentes fonctions, notamment pour gérer le chargement initial de la page,
initialiser une fenêtre modale, gérer la navigation burger (potentiellement un menu mobile) et afficher l'année actuelle dans un élément HTML.
*/
