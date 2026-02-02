const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question");
const heartsContainer = document.getElementById("hearts");

// Names (customized)
const names = "Lini & Bebinka 💖";

// Set personalized question
question.textContent = `${names}, will you be my Valentine?`;

// Move "No" button (mobile + desktop)
function moveNoButton() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Mobile haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseenter", moveNoButton);

yesBtn.addEventListener("click", () => {
  question.remove();
  buttons.remove();

  const msg = document.createElement("div");
  msg.className = "yes-message";
  msg.textContent = `Yay!! 💕 Happy Valentine’s, ${names}!`;
  card.appendChild(msg);

  // Celebration hearts
  for (let i = 0; i < 35; i++) {
    createHeart();
  }

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
