var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '0',
          width: '0',
          videoId: 'c5V-qL1HRho', // Définir la première vidéo à lire ici
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.setVolume(10); // Définit le volume initial à 10%
        event.target.playVideo(); // Lance la lecture automatique
      }
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
        if (event.data == YT.PlayerState.ENDED) {
          player.loadVideoById('c5V-qL1HRho'); // Recharge la première vidéo
          player.playVideo(); // Lance la lecture automatique
        }
      }
      function changeVideo(videoId) {
        player.loadVideoById(videoId); // Charge une nouvelle vidéo
        player.playVideo(); // Lance la lecture automatique
      }
      function pauseVideo() {
        if (player.getPlayerState() == YT.PlayerState.PLAYING) {
          player.pauseVideo();
        } else {
          player.playVideo();
        }
      }
      function setVolume() {
        var volume = document.getElementById("volume").value;
        player.setVolume(volume);
      }