// Fonction pour gérer la navigation burger
export default function navigationBurger() {
  const burger = document.querySelector('.burger');
  const headerMenu = document.querySelector('.menu');
  const headerMenuItems = document.querySelectorAll('.header .menu .items');

  burger.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
    burger.classList.toggle('open');

    headerMenuItems.forEach((item, index) => {
      if (item.style.animationDelay) {
        return (item.style.animationDelay = '');
      }
      const maxDelay = 0.8;
      const delay = index / 12;
      const animationDelay = delay >= maxDelay ? maxDelay : delay;
      return (item.style.animationDelay = `${animationDelay}s`);
    });
    headerMenuItems.forEach((item) => {
      item.addEventListener('click', () => {
        headerMenu.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  });
}
/*
 Ce code s'occupe de la gestion de la navigation burger.
 Il permet d'afficher ou de masquer un menu de navigation en ajoutant ou en supprimant une classe CSS appelée 'active' sur l'élément 'navbar' lorsque le bouton burger est cliqué.
 Il également assure que le menu se referme lorsque l'utilisateur clique sur un lien du menu.
*/
