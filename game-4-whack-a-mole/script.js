const startBtn = document.getElementById("startBtn");
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");

const holes = document.querySelectorAll(".hole");
const scoreText = document.getElementById("score");

let score = 0;
let interval;

/* Create moles */
holes.forEach(hole => {
  const mole = document.createElement("div");
  mole.classList.add("mole");
  hole.appendChild(mole);

  mole.onclick = () => {
    if (hole.classList.contains("active")) {
      score++;
      scoreText.textContent = score;
      hole.classList.remove("active");
    }
  };
});

/* Start */
startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
};

function startGame(){
  interval = setInterval(() => {
    holes.forEach(h => h.classList.remove("active"));
    let random = Math.floor(Math.random() * holes.length);
    holes[random].classList.add("active");
  }, 700);
}
