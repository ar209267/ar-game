<!DOCTYPE html>
<html>
<head>
  <title>AR Game Zone</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      font-family: Arial;
      background: #0f172a;
      color: white;
      text-align: center;
    }

    .screen {
      display: none;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #menu {
      display: flex;
    }

    button {
      padding: 12px 20px;
      margin: 10px;
      font-size: 18px;
      border: none;
      border-radius: 8px;
      background: #22c55e;
      color: white;
      cursor: pointer;
    }

    #gameArea {
      width: 100%;
      height: 70vh;
      background: #222;
      position: relative;
      overflow: hidden;
    }

    .car {
      width: 50px;
      height: 100px;
      background: red;
      position: absolute;
      bottom: 20px;
      left: 45%;
      border-radius: 10px;
    }

    .enemy {
      width: 50px;
      height: 100px;
      background: yellow;
      position: absolute;
      top: -120px;
      border-radius: 10px;
    }

    #score {
      margin: 5px;
    }
  </style>
</head>

<body>

<!-- MENU -->
<div id="menu" class="screen">
  <h1>🎮 AR Game Zone</h1>
  <button onclick="startGame()">▶️ Start Game</button>
</div>

<!-- GAME -->
<div id="game" class="screen">
  <h3 id="score">Score: 0</h3>
  <div id="gameArea">
    <div id="player" class="car"></div>
  </div>
  <button onclick="restart()">🔄 Restart</button>
</div>

<script>
let player = document.getElementById("player");
let gameArea = document.getElementById("gameArea");

let scoreText = document.getElementById("score");

let x = window.innerWidth / 2;
let score = 0;
let speed = 5;
let gameRunning = false;

// show menu first
document.getElementById("menu").style.display = "flex";

function startGame(){
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "flex";
  gameRunning = true;
}

function restart(){
  location.reload();
}

// Controls
document.addEventListener("keydown", e=>{
  if(e.key==="ArrowLeft") x-=20;
  if(e.key==="ArrowRight") x+=20;
  player.style.left = x + "px";
});

// Enemy
function createEnemy(){
  if(!gameRunning) return;

  let enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.left = Math.random() * (window.innerWidth - 50) + "px";
  gameArea.appendChild(enemy);

  let y = -100;

  let move = setInterval(()=>{
    y += speed;
    enemy.style.top = y + "px";

    let p = player.getBoundingClientRect();
    let e = enemy.getBoundingClientRect();

    if(p.left<e.right && p.right>e.left && p.top<e.bottom && p.bottom>e.top){
      alert("Game Over 😢\nScore: "+score);
      location.reload();
    }

    if(y > window.innerHeight){
      enemy.remove();
      clearInterval(move);
      score++;
      speed += 0.2;
      scoreText.innerText = "Score: " + score;
    }

  }, 30);
}

// spawn enemy
setInterval(createEnemy, 1500);
</script>

</body>
</html>
