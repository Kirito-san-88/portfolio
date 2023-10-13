export default function loading() {
  const loader = document.getElementById('loading');
  const headerModal = document.getElementById('header-modal');
  window.addEventListener('load', () => {
    loader.style.display = 'block';

    setTimeout(() => {
      document.body.style.display = 'block';
      headerModal.style.display = 'block';
      loader.style.display = 'none';
    }, 300);
  });
}
