const audio = document.getElementById('background-music');

    // Restore playback position if available
    const savedTime = localStorage.getItem('music-time');
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    // Play the audio
    audio.play().catch(error => {
      console.warn("Autoplay might be blocked:", error);
    });

    // Save playback position every second
    setInterval(() => {
      if (!audio.paused) {
        localStorage.setItem('music-time', audio.currentTime);
      }
    }, 1000);