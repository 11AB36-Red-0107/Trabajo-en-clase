document.addEventListener('DOMContentLoaded', () => {
    const endLiveButton = document.getElementById('endLiveButton');
    
    endLiveButton.addEventListener('click', () => {
      // Termina el live y redirige a IndexC.html
      window.location.href = 'IndexC.html';
    });
  });
  