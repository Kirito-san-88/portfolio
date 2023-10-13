export default function loading() {
  const loader = document.getElementById('loading');
  const headerModal = document.getElementById('header-modal');
  window.addEventListener('load', () => {
    loader.style.display = 'block';

    setTimeout(() => {
      loader.style.display = 'none';
      document.body.style.display = 'block';
      headerModal.style.display = 'block';
    }, 1000);
  });
}
