function setVolume() {
    var volume = document.getElementById("volume").value;
    player.setVolume(volume);
    var volumePercentage = document.getElementById("volume-percentage");
    volumePercentage.textContent = volume + "%";
  }
  
  function toggleSidebar(sidebarNum) {
    var sidebar = document.getElementById("sidebar" + sidebarNum);
    sidebar.classList.toggle("open");
  }

  var loop = false; // Indicateur de boucle

  function toggleLoop() {
    loop = !loop; // Inverse l'état de la boucle
  }