// Fonction pour gérer la navigation burger
export default function navigationBurger() {
  // Récupération de l'élément HTML avec l'ID 'navbar' et stockage dans la variable 'navbar'
  const navbar = document.getElementById('navbar');

  // Sélection de tous les éléments li situés dans une balise 'nav' et stockage dans la variable 'links'
  const links = document.querySelectorAll('nav li');

  // Écouter l'événement de clic sur l'élément avec l'ID 'burger' (peut-être un bouton de menu burger)
  burger.addEventListener('click', () => {
    // Bascule la classe CSS 'active' sur l'élément 'navbar' pour afficher ou masquer le menu
    navbar.classList.toggle('active');
  });

  // Parcourir tous les éléments 'link' dans la liste 'links'
  links.forEach((link) => {
    // Écouter l'événement de clic sur chaque élément 'link'
    link.addEventListener('click', () => {
      // Supprimer la classe CSS 'active' de l'élément 'navbar' pour masquer le menu après avoir cliqué sur un lien
      navbar.classList.remove('active');
    });
  });
}

/*
 Ce code s'occupe de la gestion de la navigation burger.
 Il permet d'afficher ou de masquer un menu de navigation en ajoutant ou en supprimant une classe CSS appelée 'active' sur l'élément 'navbar' lorsque le bouton burger est cliqué.
 Il également assure que le menu se referme lorsque l'utilisateur clique sur un lien du menu.
*/
