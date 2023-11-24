// Fonction pour gérer le chargement initial de la page
export default function loading() {
  // Récupération de l'élément HTML avec l'ID 'loading' et stockage dans la variable 'loader'
  const loader = document.getElementById('loading');

  // Récupération de l'élément HTML avec l'ID 'header-modal' et stockage dans la variable 'headerModal'
  const headerModal = document.getElementById('header-modal');

  // Récupération de l'élément HTML avec l'ID 'header' et stockage dans la variable 'header'
  // const header = document.getElementById('header');

  // Écouter l'événement de chargement complet de la fenêtre (quand tout est chargé : images, styles, scripts, etc.)
  window.addEventListener('load', () => {
    // Afficher l'élément de chargement ('loader') en définissant sa propriété de style 'display' sur 'block'
    loader.style.display = 'block';

    // Après un délai de 300 millisecondes (0,3 seconde)
    setTimeout(() => {
      // Ajouter la classe CSS 'header' à l'élément 'header'
      // header.classList.add('header');

      // Afficher le corps du document ('document.body') en définissant sa propriété de style 'display' sur 'block'
      document.body.style.display = 'block';

      // Afficher l'élément 'headerModal' en définissant sa propriété de style 'display' sur 'block'
      headerModal.style.display = 'block';

      // Masquer à nouveau l'élément de chargement ('loader') en définissant sa propriété de style 'display' sur 'none'
      loader.style.display = 'none';
    }, 300); // Ce délai de 300 ms est utilisé pour créer un effet de transition
  });
}
/*
Ce code semble s'occuper du chargement initial de la page en affichant un élément de chargement ('loader') au début,
puis en le masquant après un court délai, tout en ajoutant des classes CSS pour modifier l'apparence de certains éléments.
*/
