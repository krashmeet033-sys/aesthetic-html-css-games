// ===== HUMAN FRIENDLY QUIZ GAME =====

// questions
const quiz = [
  {
    question: "Which language is used for web styling?",
    answers: ["HTML", "CSS", "Python", "C++"],
    correct: 1
  },
  {
    question: "Which tag is used for links?",
    answers: ["<div>", "<a>", "<p>", "<img>"],
    correct: 1
  },
  {
    question: "JavaScript is mainly used for?",
    answers: ["Structure", "Design", "Logic", "Database"],
    correct: 2
  },
  {
    question: "CSS Grid is used for?",
    answers: ["Animation", "Layout", "Backend", "SEO"],
    correct: 1
  }
];

// screens
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// elements
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const scoreText = document.getElementById("score");
const bar = document.getElementById("bar");

// buttons
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let index = 0;
let score = 0;

// screen switch
function show(screen){
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screen.classList.add("active");
}

// start quiz
function startQuiz(){
  index = 0;
  score = 0;
  show(quizScreen);
  loadQuestion();
}

// load question
function loadQuestion(){

  const q = quiz[index];
  questionText.textContent = q.question;

  answersBox.innerHTML = "";

  // progress animation
  bar.style.width = ((index) / quiz.length) * 100 + "%";

  q.answers.forEach((ans, i)=>{
    const btn = document.createElement("div");
    btn.className = "answer";
    btn.textContent = ans;

    btn.onclick = () => checkAnswer(i);

    answersBox.appendChild(btn);
  });
}

// check answer
function checkAnswer(i){

  if(i === quiz[index].correct){
    score++;
  }

  index++;

  if(index < quiz.length){
    loadQuestion();
  }
  else{
    bar.style.width = "100%";
    scoreText.textContent = score + " / " + quiz.length;
    show(resultScreen);
  }
}

// events
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
