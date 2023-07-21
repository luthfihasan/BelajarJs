/**
 * Input Nama
 */
function prevslide() {
  var playerNameInput = document.getElementById('player-name');
  var playerName = playerNameInput.value;
  
  // Simpan nilai playerName ke dalam local storage
  localStorage.setItem('playerName', playerName);
}

// Ambil nilai playerName dari local storage
var playerName = localStorage.getItem('playerName');

// Tampilkan nilai playerName di halaman
var playerNameElement = document.getElementById('player-name-display');
playerNameElement.textContent = playerName;