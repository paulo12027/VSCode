const trailerBtn = document.getElementById('trailerBtn');
const trailerModal = document.getElementById('trailerModal');
const closeBtn = document.querySelector('.close-btn');
const trailerVideo = document.getElementById('trailerVideo');

trailerBtn.addEventListener('click', () => {
  // Link do YouTube transformado em embed + autoplay
  trailerVideo.src = 'https://www.youtube.com/embed/VQRLujxTm3c?autoplay=1&mute=1';
  
  trailerModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  trailerModal.style.display = 'none';
  trailerVideo.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === trailerModal) {
    trailerModal.style.display = 'none';
    trailerVideo.src = '';
  }
});
