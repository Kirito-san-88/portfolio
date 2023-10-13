export default function initializeModal() {
  const headerModal = document.getElementById('header-modal');
  const closeModal = document.getElementById('closeModal');
  const backgroundVideo = document.getElementById('background-video');

  const loadingContainer = document.getElementById('loading-container');

  headerModal.style.display = 'none';

  document.addEventListener('load', () => {
    headerModal.style.display = 'block';
    document.body.classList.add('no-scroll');
  });

  closeModal.addEventListener('click', () => {
    loadingContainer.style.display = 'none';
    headerModal.style.top = '-100%';
    document.body.classList.remove('no-scroll');
    backgroundVideo.pause();
  });
}
