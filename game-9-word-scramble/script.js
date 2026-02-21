const words = ["html", "css", "javascript", "design", "coding"];

const scrambledWordElement = document.getElementById("scrambledWord");
const userInput = document.getElementById("userInput");
const message = document.getElementById("message");

let currentWord = "";

function scramble(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWordElement.textContent = scramble(currentWord);
    userInput.value = "";
    message.textContent = "";
}

function checkAnswer() {
    if (userInput.value.toLowerCase() === currentWord) {
        message.textContent = "Correct!";
        message.style.color = "lightgreen";
    } else {
        message.textContent = "Try again!";
        message.style.color = "red";
    }
}

document.getElementById("checkBtn").addEventListener("click", checkAnswer);
document.getElementById("newWordBtn").addEventListener("click", newWord);

newWord();
