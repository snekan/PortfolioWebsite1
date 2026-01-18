const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('highScore');
const finalScoreEl = document.getElementById('finalScore');
const gameOverScreen = document.getElementById('gameOverScreen');
const pauseScreen = document.getElementById('pauseScreen');

// Game State
let snake = [];
let food = { x: 0, y: 0 };
let direction = 'right'; // current direction
let nextDirection = 'right'; // buffered direction
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameSpeed = 150;
let gameLoop;
let isRunning = false;
let isPaused = false;

// Config (Responsive Grid)
let gridSize = 20; // Size of one tile
let tileCount = 20; // 400px / 20 = 20 tiles

highScoreEl.textContent = highScore;

// Adjust for mobile canvas scaling if needed
function resizeGame() {
    if (window.innerWidth <= 600) {
        // CSS handles display size, but internal coordinate system remains 20x20
        // No change needed to logic if canvas width/height attributes stay 400
    }
}

function initGame() {
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    score = 0;
    gameSpeed = 150;
    direction = 'right';
    nextDirection = 'right';
    scoreEl.textContent = 0;
    spawnFood();
    gameOverScreen.classList.add('hidden');
    pauseScreen.classList.add('hidden');

    if (gameLoop) clearInterval(gameLoop);
    isRunning = true;
    isPaused = false;
    gameLoop = setInterval(gameStep, gameSpeed);
}

function gameStep() {
    if (isPaused) return;

    // Update Direction
    direction = nextDirection;
    const head = { x: snake[0].x, y: snake[0].y };

    if (direction === 'right') head.x++;
    else if (direction === 'left') head.x--;
    else if (direction === 'up') head.y--;
    else if (direction === 'down') head.y++;

    // Check Wall Collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // Check Self Collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
        return;
    }

    snake.unshift(head);

    // Check Food
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.textContent = score;
        spawnFood();
        increaseSpeed();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    // Clear
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            ctx.fillStyle = '#60a5fa'; // Head
        } else {
            ctx.fillStyle = '#3b82f6'; // Body
        }
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });

    // Draw Food
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    let cx = food.x * gridSize + gridSize / 2;
    let cy = food.y * gridSize + gridSize / 2;
    ctx.arc(cx, cy, gridSize / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
}

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
    // Don't spawn on snake
    if (snake.some(s => s.x === food.x && s.y === food.y)) {
        spawnFood();
    }
}

function increaseSpeed() {
    if (gameSpeed > 50) {
        gameSpeed -= 2;
        clearInterval(gameLoop);
        gameLoop = setInterval(gameStep, gameSpeed);
    }
}

function gameOver() {
    isRunning = false;
    clearInterval(gameLoop);

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        highScoreEl.textContent = highScore;
    }

    finalScoreEl.textContent = score;
    gameOverScreen.classList.remove('hidden');
}

function resetGame() {
    initGame();
}

function togglePause() {
    if (!isRunning) return;
    isPaused = !isPaused;
    if (isPaused) pauseScreen.classList.remove('hidden');
    else pauseScreen.classList.add('hidden');
}

// Input Handling
document.addEventListener('keydown', e => {
    // Prevent scrolling
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }

    if (e.code === 'Space') {
        togglePause();
        return;
    }

    if (!isRunning) return;

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (direction !== 'down') nextDirection = 'up';
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (direction !== 'up') nextDirection = 'down';
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (direction !== 'right') nextDirection = 'left';
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (direction !== 'left') nextDirection = 'right';
            break;
    }
});

function handleMobileInput(dir) {
    if (!isRunning) return;
    if (dir === 'up' && direction !== 'down') nextDirection = 'up';
    if (dir === 'down' && direction !== 'up') nextDirection = 'down';
    if (dir === 'left' && direction !== 'right') nextDirection = 'left';
    if (dir === 'right' && direction !== 'left') nextDirection = 'right';
}

// Start on Load
initGame();
