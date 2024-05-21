document.addEventListener('DOMContentLoaded', () => {
  // Datos de ejemplo
  const channels = [
    { name: 'Channel 1', description: 'Description for Channel 1', image: 'channel_image1.jpg', isLive: true },
    { name: 'Channel 2', description: 'Description for Channel 2', image: 'channel_image2.jpg', isLive: false },
    { name: 'Channel 3', description: 'Description for Channel 3', image: 'channel_image3.jpg', isLive: true },
    // Añade más canales según sea necesario
  ];

  const channelSearch = document.getElementById('channelSearch');
  const searchResults = document.getElementById('searchResults');
  const allChannels = document.getElementById('allChannels');

  // Función para crear un div de canal
  const createChannelDiv = (channel) => {
    const channelDiv = document.createElement('div');
    channelDiv.classList.add('channel');

    const img = document.createElement('img');
    img.src = channel.image;
    channelDiv.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = channel.name;
    channelDiv.appendChild(name);

    const description = document.createElement('p');
    description.textContent = channel.description;
    channelDiv.appendChild(description);

    if (channel.isLive) {
      const liveIndicator = document.createElement('div');
      liveIndicator.classList.add('live-indicator');
      liveIndicator.textContent = 'LIVE';
      channelDiv.appendChild(liveIndicator);
    }

    const followButton = document.createElement('button');
    followButton.classList.add('follow-button');
    followButton.textContent = 'Follow';
    followButton.addEventListener('click', () => {
      // Implementa la funcionalidad de seguir aquí
      alert(`You are now following ${channel.name}`);
    });
    channelDiv.appendChild(followButton);

    return channelDiv;
  };

  // Mostrar todos los canales
  channels.forEach(channel => {
    allChannels.appendChild(createChannelDiv(channel));
  });

  // Función para manejar la búsqueda
  const handleSearch = () => {
    const query = channelSearch.value.toLowerCase();
    searchResults.innerHTML = '';

    const filteredChannels = channels.filter(channel => 
      channel.name.toLowerCase().includes(query) || 
      channel.description.toLowerCase().includes(query)
    );

    filteredChannels.forEach(channel => {
      searchResults.appendChild(createChannelDiv(channel));
    });
  };

  // Añadir evento de búsqueda
  channelSearch.addEventListener('input', handleSearch);

  // Configuración de eventos para el botón de configuración y sus opciones
  const configButton = document.querySelector('.config-button');
  const configOptions = document.querySelector('.config-options');
  const languageSelect = document.getElementById('languageSelect');
  const darkThemeToggle = document.getElementById('darkThemeToggle');
  const logoutButton = document.getElementById('logoutButton');

  configButton.addEventListener('click', () => {
    configOptions.style.display = configOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Guardar preferencias en localStorage
  const savePreferences = () => {
    localStorage.setItem('language', languageSelect.value);
    localStorage.setItem('darkTheme', darkThemeToggle.checked);
  };

  languageSelect.addEventListener('change', savePreferences);
  darkThemeToggle.addEventListener('change', savePreferences);

  // Aplicar preferencias guardadas
  const applyPreferences = () => {
    const savedLanguage = localStorage.getItem('language');
    const savedDarkTheme = localStorage.get
Item('darkTheme') === 'true';

    if (savedLanguage) {
      languageSelect.value = savedLanguage;
    }
    darkThemeToggle.checked = savedDarkTheme;

    document.body.classList.toggle('dark-theme', savedDarkTheme);
    if (savedLanguage === 'es') {
      document.documentElement.lang = 'es';
      document.querySelector('.all-channels h2').textContent = 'Conoce más Canales';
      channelSearch.placeholder = 'Buscar un canal';
    } else {
      document.documentElement.lang = 'en';
      document.querySelector('.all-channels h2').textContent = 'Discover More Channels';
      channelSearch.placeholder = 'Search for a channel';
    }
  };

  applyPreferences();

  // Cerrar sesión
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('userSession');
    window.location.href = '../Index.html';
  });

  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);  // Trabaja con el objeto JSON aquí
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchData();  // Llamada a la función asíncrona
});
