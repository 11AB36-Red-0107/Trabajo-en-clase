document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const historyItems = [
      { name: 'Live 1', description: 'Description for Live 1', image: 'live_image1.jpg', watchedAt: '2024-05-19 10:00' },
      { name: 'Live 2', description: 'Description for Live 2', image: 'live_image2.jpg', watchedAt: '2024-05-18 15:00' },
      // Añade más ítems de historial según sea necesario
    ];
  
    const historyList = document.getElementById('historyList');
  
    // Función para crear un div de historial
    const createHistoryDiv = (item) => {
      const historyDiv = document.createElement('div');
      historyDiv.classList.add('history-item');
  
      const img = document.createElement('img');
      img.src = item.image;
      historyDiv.appendChild(img);
  
      const name = document.createElement('h3');
      name.textContent = item.name;
      historyDiv.appendChild(name);
  
      const description = document.createElement('p');
      description.textContent = item.description;
      historyDiv.appendChild(description);
  
      const watchedAt = document.createElement('p');
      watchedAt.textContent = `Watched at: ${item.watchedAt}`;
      historyDiv.appendChild(watchedAt);
  
      return historyDiv;
    };
  
    // Mostrar historial
    historyItems.forEach(item => {
      historyList.appendChild(createHistoryDiv(item));
    });
  });
  