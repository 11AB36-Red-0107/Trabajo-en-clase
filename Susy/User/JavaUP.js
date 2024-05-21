document.addEventListener('DOMContentLoaded', () => {
  const subscribedChannels = [
    { name: 'Subscribed Channel 1', description: 'Description for Subscribed Channel 1', image: 'channel_image1.jpg', isLive: true },
    { name: 'Subscribed Channel 2', description: 'Description for Subscribed Channel 2', image: 'channel_image2.jpg', isLive: false },
  ];

  const followedChannels = [
    { name: 'Followed Channel 1', description: 'Description for Followed Channel 1', image: 'channel_image3.jpg', isLive: true },
    { name: 'Followed Channel 2', description: 'Description for Followed Channel 2', image: 'channel_image4.jpg', isLive: false },
  ];

  const userName = document.getElementById('userName');
  const editProfileButton = document.getElementById('editProfileButton');
  const profileImage = document.getElementById('profileImage');
  const editProfileForm = document.getElementById('editProfileForm');
  const saveProfileButton = document.getElementById('saveProfileButton');
  const becomeChannelButton = document.getElementById('becomeChannelButton');
  const channelForm = document.getElementById('channelForm');
  const saveChannelButton = document.getElementById('saveChannelButton');

  const subscribedChannelsContainer = document.getElementById('subscribedChannels');
  const followedChannelsContainer = document.getElementById('followedChannels');

  // Function to create a div for a channel
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

    return channelDiv;
  };

  // Display subscribed channels
  subscribedChannels.forEach(channel => {
    subscribedChannelsContainer.appendChild(createChannelDiv(channel));
  });

  // Display followed channels
  followedChannels.forEach(channel => {
    followedChannelsContainer.appendChild(createChannelDiv(channel));
  });

  // Edit profile
  editProfileButton.addEventListener('click', () => {
    editProfileForm.style.display = 'flex';
  });

  saveProfileButton.addEventListener('click', () => {
    // Save logic here
    editProfileForm.style.display = 'none';
  });

  // Show form to become a channel
  becomeChannelButton.addEventListener('click', () => {
    channelForm.style.display = 'flex';
  });

  saveChannelButton.addEventListener('click', async () => {
    const channelName = document.getElementById('channelName').value;
    const channelDescription = document.getElementById('channelDescription').value;

    if (channelName && channelDescription) {
      try {
        const response = await fetch("http://tu-api-url/api/streaming/channel", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: channelName, description: channelDescription })
        });

        if (response.ok) {
          document.body.innerHTML = `
            <header>
              <div class="logo">XERATH</div>
            </header>
            <div class="channel-creator" id="channelCreatorInterface">
              <div class="channel-header">
                <div class="channel-info">
                  <img id="channelCreatorImage" src="default_channel.png" alt="Channel Image">
                  <div>
                    <h2 id="channelCreatorName">${channelName}</h2>
                    <p id="channelCreatorDescription">${channelDescription}</p>
                  </div>
                </div>
                <div class="channel-actions">
                  <button onclick="logout()">Logout</button>
                  <button onclick="viewHistory()">View Broadcast History</button>
                </div>
              </div>
              <div class="live-stream">
                <h2>Start a Live Stream</h2>
                <div class="input-box">
                  <input type="text" placeholder="Stream Title" id="streamTitle">
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Stream Description" id="streamDescription">
                </div>
                <button class="btn" onclick="startLiveStream()">Go Live</button>
              </div>
            </div>
            <script src="JavaC.js"></script>
          `;
        } else {
          alert('Error saving channel details');
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error saving channel details');
      }
    } else {
      alert('Please fill out all fields');
    }
  });
});
