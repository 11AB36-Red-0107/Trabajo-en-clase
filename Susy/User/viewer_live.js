document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menu = document.getElementById('menu');
    const sendCommentButton = document.getElementById('sendCommentButton');
    const commentInput = document.getElementById('commentInput');
    const likeButton = document.getElementById('likeButton');
    const subscribeButton = document.getElementById('subscribeButton');
    const tokenModal = document.getElementById('tokenModal');
    const buyTokensButton = document.getElementById('buyTokensButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const commentsContainer = document.getElementById('commentsContainer');
    const viewersCount = document.getElementById('viewersCount');
    const likesCount = document.getElementById('likesCount');
    const commentsCount = document.getElementById('commentsCount');

    let isSubscribed = false;
    let likes = 0;
    let comments = 0;
    let viewers = 0;

    // Simular la carga inicial de la base de datos
    function loadInitialData() {
        // Aquí llamarías a tu API para obtener los datos iniciales
        likes = 10; // Ejemplo
        comments = 5; // Ejemplo
        viewers = 100; // Ejemplo
        updateStats();
    }

    function updateStats() {
        viewersCount.textContent = `Viewers: ${viewers}`;
        likesCount.textContent = `Likes: ${likes}`;
        commentsCount.textContent = `Comments: ${comments}`;
    }

    hamburgerMenu.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    sendCommentButton.addEventListener('click', () => {
      if (!isSubscribed) {
        alert('You must subscribe to comment.');
      } else {
        const comment = commentInput.value;
        if (comment.trim() !== '') {
          const commentElement = document.createElement('div');
          commentElement.className = 'comment';
          commentElement.textContent = comment;
          commentsContainer.appendChild(commentElement);
          commentInput.value = '';
          comments++;
          updateStats();
          // Aquí llamarías a tu API para guardar el comentario
        } else {
          alert('Write a comment before sending.');
        }
      }
    });

    likeButton.addEventListener('click', () => {
      likes++;
      updateStats();
      // Aquí llamarías a tu API para actualizar los likes
    });

    subscribeButton.addEventListener('click', () => {
      tokenModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
      tokenModal.style.display = 'none';
    });

    buyTokensButton.addEventListener('click', () => {
      const tokenAmount = document.getElementById('tokenAmount').value;
      if (tokenAmount.trim() !== '' && !isNaN(tokenAmount)) {
        alert(`Bought ${tokenAmount} tokens!`);
        tokenModal.style.display = 'none';
        isSubscribed = true;
        subscribeButton.style.display = 'none';
      } else {
        alert('Please enter a valid token amount.');
      }
    });

    // Simular incremento de viewers
    function incrementViewers() {
        viewers++;
        updateStats();
        // Aquí llamarías a tu API para actualizar los viewers
    }

    // Inicializar datos
    loadInitialData();
    setInterval(incrementViewers, 5000); // Simular incremento de viewers cada 5 segundos
});
