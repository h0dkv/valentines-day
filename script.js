const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const card = document.getElementById('card');
const buttons = document.getElementById('buttons');
const question = document.getElementById('question');
const heartsContainer = document.getElementById('hearts');


noBtn.addEventListener('mouseenter', () => {
const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
noBtn.style.position = 'fixed';
noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;
});


yesBtn.addEventListener('click', () => {
question.remove();
buttons.remove();


const msg = document.createElement('div');
msg.className = 'yes-message';
msg.innerText = 'Yay!! 💕 I knew you would say yes!';
card.appendChild(msg);


for (let i = 0; i < 30; i++) {
createHeart();
}
});


function createHeart() {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerText = '💖';
heart.style.left = Math.random() * 100 + 'vw';
heart.style.animationDuration = 3 + Math.random() * 2 + 's';
heartsContainer.appendChild(heart);


setTimeout(() => heart.remove(), 5000);
}