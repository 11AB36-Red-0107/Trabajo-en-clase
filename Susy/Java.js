function toggleChannelFields() {
    const channelFields = document.getElementById('channelFields');
    const isCreator = document.getElementById('isCreator').checked;

    if (isCreator) {
      channelFields.classList.remove('hidden');
    } else {
      channelFields.classList.add('hidden');
    }
  }

  function toggleForms() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const recoveryForm = document.getElementById('recoveryForm');

    registrationForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
    recoveryForm.classList.add('hidden');
  }

  function showRecoveryForm() {
    const recoveryForm = document.getElementById('recoveryForm');
    const loginForm = document.getElementById('loginForm');

    recoveryForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  }

  function backToLogin() {
    const recoveryForm = document.getElementById('recoveryForm');
    const loginForm = document.getElementById('loginForm');

    recoveryForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  }

  function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewImg = document.getElementById('imagePreviewImg');

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
      imagePreviewImg.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
      imagePreview.classList.remove('hidden');
    } else {
      imagePreview.classList.add('hidden');
    }
  }

  async function fetchData() {
    // Obtén los valores actuales de los campos de entrada
    const usuario = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const apiUrl = "http://172.22.59.201:9780/api/streaming/auth/usuario";
    const dataToSend = {
      nombreUsuario: usuario,
      email: email,
      contrasena: password
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log(data);  // Trabaja con el objeto JSON aquí
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }