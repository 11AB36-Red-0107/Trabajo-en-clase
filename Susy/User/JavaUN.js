document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const notifications = [
      { channelName: 'Channel 1', message: 'started a live', time: '10:00 AM', image: 'channel_image1.jpg', liveUrl: '#'},
      { channelName: 'Channel 2', message: 'started a live', time: '11:00 AM', image: 'channel_image2.jpg', liveUrl: '#'},
      // Añade más notificaciones según sea necesario
    ];
  
    const notificationList = document.getElementById('notificationList');
  
    // Función para crear un div de notificación
    const createNotificationDiv = (notification) => {
      const notificationDiv = document.createElement('div');
      notificationDiv.classList.add('notification');
  
      const img = document.createElement('img');
      img.src = notification.image;
      notificationDiv.appendChild(img);
  
      const name = document.createElement('h3');
      name.textContent = `${notification.channelName} ${notification.message}`;
      notificationDiv.appendChild(name);
  
      const time = document.createElement('p');
      time.textContent = `at ${notification.time}`;
      notificationDiv.appendChild(time);
  
      notificationDiv.addEventListener('click', () => {
        window.location.href = notification.liveUrl;
      });
  
      return notificationDiv;
    };
  
    // Mostrar notificaciones
    notifications.forEach(notification => {
      notificationList.appendChild(createNotificationDiv(notification));
    });
  });
  