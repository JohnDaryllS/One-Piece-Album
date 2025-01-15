const audio = document.getElementById('background-music');

    const savedTime = localStorage.getItem('music-time');
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    audio.play().catch(error => {
      console.warn("Autoplay might be blocked:", error);
    });

    setInterval(() => {
      if (!audio.paused) {
        localStorage.setItem('music-time', audio.currentTime);
      }
    }, 1000);