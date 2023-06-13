// function createGameBoard() {
//     gameBoard.innerHTML = '';
  
//     for (let y = 0; y < gameSize; y++) {
//       for (let x = 0; x < gameSize; x++) {
//         const tile = document.createElement('div');
//         tile.style.width = `${tileSize}px`;
//         tile.style.height = `${tileSize}px`;
//         tile.style.left = `${x * tileSize}px`;
//         tile.style.top = `${y * tileSize}px`;
//         tile.classList.add('tile');
  
//         // Menambahkan checkbox pada setiap kotak
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.style.width = '100%';
//         checkbox.style.height = '100%';
//         checkbox.style.position = 'absolute';
//         checkbox.style.opacity = '0'; // Menggunakan opasitas 0 agar checkbox tidak terlihat
//         checkbox.disabled = true; // Mengnonaktifkan checkbox agar tidak dapat diklik
//         tile.appendChild(checkbox);
  
//         gameBoard.appendChild(tile);
//       }
//     }
//   }
  
//   function drawSnake() {
//     snake.forEach(segment => {
//       const snakeElement = document.createElement('div');
//       snakeElement.style.width = `${tileSize}px`;
//       snakeElement.style.height = `${tileSize}px`;
//       snakeElement.style.left = `${segment.x * tileSize}px`;
//       snakeElement.style.top = `${segment.y * tileSize}px`;
//       snakeElement.classList.add('snake');
  
//       // Mengambil checkbox pada kotak yang sesuai dengan posisi ular
//       const tile = gameBoard.children[segment.y * gameSize + segment.x];
//       const checkbox = tile.querySelector('input[type="checkbox"]');
//       checkbox.checked = true; // Memeriksa checkbox untuk menandai posisi ular
  
//       gameBoard.appendChild(snakeElement);
//     });
//   }
  