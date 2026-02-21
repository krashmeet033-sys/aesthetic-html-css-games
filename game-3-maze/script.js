const startBtn = document.getElementById("startBtn");
const restart = document.getElementById("restart");
const playAgain = document.getElementById("playAgain");

const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");
const winScreen = document.querySelector(".win");

const player = document.getElementById("player");

let x = 10;
let y = 10;

/* Start Game */
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

/* Movement */
document.addEventListener("keydown", e => {

  if (gameScreen.classList.contains("hidden")) return;

  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;

  /* Boundaries */
  x = Math.max(0, Math.min(290, x));
  y = Math.max(0, Math.min(290, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkWin();
});

/* Win */
function checkWin() {
  if (x > 260 && y > 260) {
    gameScreen.classList.add("hidden");
    winScreen.classList.remove("hidden");
  }
}

/* Reset */
function resetGame() {
  x = 10;
  y = 10;
  player.style.left = "10px";
  player.style.top = "10px";

  winScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

restart.onclick = resetGame;
playAgain.onclick = resetGame;
