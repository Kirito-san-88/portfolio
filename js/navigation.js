export default function navigationBurger() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('nav li');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });
}
