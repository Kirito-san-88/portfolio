// Fonction pour initialiser la fenêtre modale
export default function initializeModal() {
  // Récupération de l'élément HTML avec l'ID 'header-modal' et stockage dans la variable 'headerModal'
  const headerModal = document.getElementById('header-modal');

  // Récupération de l'élément HTML avec l'ID 'closeModal' et stockage dans la variable 'closeModal'
  const closeModal = document.getElementById('closeModal');

  // Récupération de l'élément HTML avec l'ID 'background-video' et stockage dans la variable 'backgroundVideo'
  const backgroundVideo = document.getElementById('background-video');

  // Récupération de l'élément HTML avec l'ID 'loading-container' et stockage dans la variable 'loadingContainer'
  const loadingContainer = document.getElementById('loading-container');

  // Masquer l'élément 'headerModal' en définissant sa propriété de style 'display' sur 'none'
  headerModal.style.display = 'none';

  // Ajouter la classe CSS 'no-scroll' au corps du document, ce qui empêche le défilement de la page
  document.body.classList.add('no-scroll');

  document.addEventListener('DOMContentLoaded', () => {
    // Afficher à nouveau l'élément 'headerModal' en définissant sa propriété de style 'display' sur 'block'
    headerModal.style.display = 'block';
  });

  // Écouter l'événement de clic sur l'élément 'closeModal'
  closeModal.addEventListener('click', () => {
    // Masquer l'élément 'loadingContainer'
    loadingContainer.style.display = 'none';

    // Déplacer l'élément 'headerModal' vers le haut (hors de l'écran) en définissant sa propriété 'top' sur '-100%'
    headerModal.style.top = '-100%';

    // Retirer la classe CSS 'no-scroll' du corps du document, permettant le défilement
    document.body.classList.remove('no-scroll');

    // Mettre en pause la vidéo de fond ('backgroundVideo')
    backgroundVideo.pause();
  });
}
/*
cette fonction initialise une fenêtre modale en cachant initialement son contenu,
en empêchant le défilement de la page, en affichant le contenu lorsque le DOM est chargé,
et en gérant la fermeture de la fenêtre modale avec des actions spécifiques lorsqu'un bouton de fermeture est cliqué.
*/
