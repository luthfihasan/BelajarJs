document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gameSize = 20;
    const tileSize = 20;
    const initialSnakeLength = 3;
    const speed = 200;
  
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let direction = 'right';
    let isGameOver = false;
  
    function createGameBoard() {
      gameBoard.innerHTML = '';
  
      for (let y = 0; y < gameSize; y++) {
        for (let x = 0; x < gameSize; x++) {
          const tile = document.createElement('div');
          tile.style.width = `${tileSize}px`;
          tile.style.height = `${tileSize}px`;
          tile.style.left = `${x * tileSize}px`;
          tile.style.top = `${y * tileSize}px`;
          tile.classList.add('tile');
          gameBoard.appendChild(tile);
        }
      }
    }
  
    function drawSnake() {
      snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.width = `${tileSize}px`;
        snakeElement.style.height = `${tileSize}px`;
        snakeElement.style.left = `${segment.x * tileSize}px`;
        snakeElement.style.top = `${segment.y * tileSize}px`;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
      });
    }
  
    function drawFood() {
      const foodElement = document.createElement('div');
      foodElement.style.width = `${tileSize}px`;
      foodElement.style.height = `${tileSize}px`;
      foodElement.style.left = `${food.x * tileSize}px`;
      foodElement.style.top = `${food.y * tileSize}px`;
      foodElement.classList.add('food');
      gameBoard.appendChild(foodElement);
    }
  
    function moveSnake() {
      const head = { x: snake[0].x, y: snake[0].y };
  
      switch (direction) {
        case 'up':
          head.y--;
          break;
        case 'down':
          head.y++;
          break;
        case 'left':
          head.x--;
          break;
        case 'right':
          head.x++;
          break;
      }
  
      snake.unshift(head);
  
      if (head.x === food.x && head.y === food.y) {
        generateFood();
      } else {
        snake.pop();
      }
    }
  
    function changeDirection(event) {
      const keyPressed = event.keyCode;
  
      switch (keyPressed) {
        case 37:
          if (direction !== 'right') {
            direction = 'left';
          }
          break;
        case 38:
          if (direction !== 'down') {
            direction = 'up';
          }
          break;
        case 39:
          if (direction !== 'left') {
            direction = 'right';
          }
          break;
        case 40:
          if (direction !== 'up') {
            direction = 'down';
          }
          break;
      }
    }
  
    function generateFood() {
      food = {
        x: Math.floor(Math.random() * gameSize),
        y: Math.floor(Math.random() * gameSize)
      };
  
      snake.forEach(segment => {
        if (segment.x === food.x && segment.y === food.y) {
          generateFood();
        }
      });
    }
  
    function checkCollision() {
      const head = snake[0];
  
      if (
        head.x < 0 ||
        head.x >= gameSize ||
        head.y < 0 ||
        head.y >= gameSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        isGameOver = true;
      }
    }
  
    function updateGame() {
      if (isGameOver) {
        return;
      }
  
      gameBoard.innerHTML = '';
      moveSnake();
      checkCollision();
      drawSnake();
      drawFood();
  
      setTimeout(updateGame, speed);
    }
  
    function startGame() {
      createGameBoard();
      drawSnake();
      generateFood();
      updateGame();
    }
  
    document.addEventListener('keydown', changeDirection);
    startGame();
  });
  