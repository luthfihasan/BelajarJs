/**
 * Input Nama
 */
function prevslide() {
  var playerNameInput = document.getElementById('player-name');
  var playerName = playerNameInput.value;
  
  // Simpan nilai playerName ke dalam local storage
  localStorage.setItem('playerName', playerName);
}

var myGamePiece;
var myObstacles = [];
var mySound;
var myMusic;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  mySound = new sound("bounce.mp3");
  myMusic = new sound("gametheme.mp3");
  myMusic.play();
  myGameArea.start();
}