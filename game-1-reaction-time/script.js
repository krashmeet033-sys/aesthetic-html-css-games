const startBtn = document.getElementById("startBtn");
const gameScreen = document.querySelector(".game-screen");
const startScreen = document.querySelector(".start-screen");

const cells = document.querySelectorAll(".cell");
const turnText = document.getElementById("turn");
const winnerText = document.getElementById("winner");

const gameOver = document.querySelector(".game-over");
const playAgain = document.getElementById("playAgain");
const restart = document.getElementById("restart");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let active = true;

/* Start Game */
startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
};

/* Click on cells */
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (board[index] !== "" || !active) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      winnerText.textContent = currentPlayer + " Wins!";
      gameScreen.classList.add("hidden");
      gameOver.classList.remove("hidden");
      active = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnText.textContent = currentPlayer;
  });
});

/* Winning patterns */
function checkWin() {
  const win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,4,8],[2,4,6],
    [0,3,6],[1,4,7],[2,5,8]
  ];

  return win.some(pattern =>
    pattern.every(i => board[i] === currentPlayer)
  );
}

/* Restart */
restart.onclick = resetGame;
playAgain.onclick = resetGame;

function resetGame() {
  board = ["","","","","","","","",""];
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  turnText.textContent = "X";
  active = true;

  gameOver.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}
