export default function projectAnimation() {
  const card = document.querySelectorAll('.card_inner');

  card.forEach((items) => {
    items.addEventListener('click', () => {
      items.classList.toggle('is-flipped');
    });
  });
}
