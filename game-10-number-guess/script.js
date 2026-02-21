// Secret escape code
const secret = "1234";

const input = document.getElementById("code");
const msg = document.getElementById("msg");

document.getElementById("submit").addEventListener("click", () => {
  if (input.value === secret) {
    msg.textContent = "🎉 You Escaped!";
    msg.style.color = "lightgreen";
  } else {
    msg.textContent = "❌ Wrong Code. Try again!";
    msg.style.color = "red";
  }
});
