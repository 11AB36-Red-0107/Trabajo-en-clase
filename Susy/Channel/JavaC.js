function logout() {
  // Implementa la lógica de cierre de sesión aquí
  alert('Logged out');
}

function viewHistory() {
  // Implementa la lógica para ver el historial de transmisiones aquí
  alert('Viewing broadcast history');
}

function startLiveStream() {
  const streamTitle = document.getElementById('streamTitle').value;
  const streamDescription = document.getElementById('streamDescription').value;

  if (streamTitle && streamDescription) {
    alert('Starting live stream with title: ' + streamTitle + ' and description: ' + streamDescription);
  } else {
    alert('Please fill out all fields');
  }
}

async function initializeChannelCreator() {
  const channelImage = document.getElementById('channelCreatorImage');
  const channelName = document.getElementById('channelCreatorName');
  const channelDescription = document.getElementById('channelCreatorDescription');

 
    channelImage.src = 'https://media.admagazine.com/photos/622a6ad4818965ae9b897513/3:2/w_1997,h_1331,c_limit/Jungkook.jpg';
    channelName.textContent = 'Example Channel Name';
    channelDescription.textContent = 'This is an example description for the channel.';
  }
  
  // Llama a la función de inicialización cuando se cargue la página
  document.addEventListener('DOMContentLoaded', initializeChannelCreator);
  