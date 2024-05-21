document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menu = document.getElementById('menu');
    const sendCommentButton = document.getElementById('sendCommentButton');
    const commentInput = document.getElementById('commentInput');
    const likeButton = document.getElementById('likeButton');
  
    hamburgerMenu.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  
    sendCommentButton.addEventListener('click', () => {
      const comment = commentInput.value;
      if (comment.trim() !== '') {
        // Lógica para enviar comentario
        alert('Comment sent!');
      } else {
        alert('Write a comment before sending.');
      }
    });
  
    likeButton.addEventListener('click', () => {
      // Lógica para dar like
      alert('You liked this live!');
    });
  });
  