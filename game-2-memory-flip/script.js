// ===== HUMAN FRIENDLY MEMORY GAME =====

// emojis for cards
const emojis = [
  "🍕","🍕","🚀","🚀","🌸","🌸","🎧","🎧",
  "🐱","🐱","⚽","⚽","🍩","🍩","🌈","🌈"
];

// screens
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

// buttons
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

// game elements
const grid = document.getElementById("grid");
const movesText = document.getElementById("moves");
const matchesText = document.getElementById("matches");
const finalMoves = document.getElementById("finalMoves");

let firstCard = null;
let secondCard = null;
let lock = false;
let moves = 0;
let matches = 0;

// show screen
function showScreen(screen){
  startScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  endScreen.classList.remove("active");
  screen.classList.add("active");
}

// shuffle
function shuffle(arr){
  return arr.sort(()=>Math.random()-0.5);
}

// start game
function startGame(){

  grid.innerHTML = "";
  firstCard = secondCard = null;
  lock = false;
  moves = 0;
  matches = 0;

  movesText.textContent = moves;
  matchesText.textContent = matches;

  const shuffled = shuffle([...emojis]);

  shuffled.forEach(emoji=>{
    const card = document.createElement("div");
    card.className = "card";

    const inner = document.createElement("div");
    inner.className = "inner";

    const front = document.createElement("div");
    front.className = "front";
    front.textContent = "?";

    const back = document.createElement("div");
    back.className = "back";
    back.textContent = emoji;

    inner.append(front, back);
    card.appendChild(inner);

    card.addEventListener("click", ()=>flipCard(inner, emoji));

    grid.appendChild(card);
  });

  showScreen(gameScreen);
}

// flip logic
function flipCard(card, emoji){

  if(lock || card.classList.contains("flip")) return;

  card.classList.add("flip");

  if(!firstCard){
    firstCard = {card, emoji};
    return;
  }

  secondCard = {card, emoji};
  moves++;
  movesText.textContent = moves;

  // match
  if(firstCard.emoji === secondCard.emoji){
    matches++;
    matchesText.textContent = matches;

    firstCard = secondCard = null;

    if(matches === emojis.length / 2){
      finalMoves.textContent = moves;
      showScreen(endScreen);
    }
  }
  else{
    lock = true;

    setTimeout(()=>{
      firstCard.card.classList.remove("flip");
      secondCard.card.classList.remove("flip");
      firstCard = secondCard = null;
      lock = false;
    }, 800);
  }
}

// events
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
