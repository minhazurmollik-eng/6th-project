const hearts = ['💐','🌸','🏵','🌹','🌺','🌼','🌷','🍂','🍁','🍀','🍃'];
const container = document.getElementById('heartsContainer');

for (let i = 0; i < 20; i++) spawnHeart(true);

function spawnHeart(bg) {
  const h = document.createElement('div');
  h.className = 'heart-particle';
  h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  // Start at random X, bottom of screen
  h.style.left   = Math.random() * 100 + 'vw';
  h.style.top    = '100vh';  // start from bottom
  h.style.fontSize = (bg ? 12 + Math.random() * 14 : 18 + Math.random() * 16) + 'px';
  const dur = bg ? 6 + Math.random() * 8 : 2 + Math.random() * 3;
  h.style.animationDuration = dur + 's';
  h.style.animationDelay   = (bg ? Math.random() * dur : 0) + 's';
  container.appendChild(h);
  if (!bg) setTimeout(() => h.remove(), (dur + 1) * 1000);
}

const noBtn = document.getElementById('noBtn');
const msgs = [
  "I'll wait. I'm very patient",
  "Are you sure?",
  "That's so funny haha. Now say yes",
  "The cat is crying...",
  "Last chance!!",
  "Okay fine... just kidding, SAY YES!",
  "Stop running away",
  "The button is tired of running",
  "You can't escape forever",
  "Pretty just say yes",
  "I will keep waiting...",
  "Fine, I'll ask again tomorrow",
  "No means nothing here",
  "The cat is getting angry",
  "You're so stubborn omg",
  "I'm not giving up",
  "SAY. YES. NOW.",
  "Please? Pretty please?",
  "This button will never stop",
  "You + Me = Forever"
];
let noClicks = 0;

function initNoBtn() {
  const bw = noBtn.offsetWidth;
  const bh = noBtn.offsetHeight;
  noBtn.style.left = (window.innerWidth / 2 + 90) + 'px';
  noBtn.style.top  = (window.innerHeight / 2 - bh / 2) + 'px';
}

function moveNoBtn() {
  const bw = noBtn.offsetWidth;
  const bh = noBtn.offsetHeight;
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let nx, ny;
  const curL = parseFloat(noBtn.style.left) || 0;
  const curT = parseFloat(noBtn.style.top)  || 0;
  do {
    nx = pad + Math.random() * (vw - bw - pad * 2);
    ny = pad + Math.random() * (vh - bh - pad * 2);
  } while (Math.abs(nx - curL) < 80 && Math.abs(ny - curT) < 80);
  noBtn.style.left = nx + 'px';
  noBtn.style.top  = ny + 'px';
  noClicks++;
  document.getElementById('subtext').textContent = msgs[noClicks % msgs.length];
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', e => { e.preventDefault(); moveNoBtn(); }, { passive: false });

window.addEventListener('load', initNoBtn);
window.addEventListener('resize', initNoBtn);

function sayYes() {
  document.getElementById('questionScreen').classList.add('hidden');
  document.getElementById('yesScreen').classList.add('active');
  noBtn.style.display = 'none';
  for (let i = 0; i < 35; i++) setTimeout(() => spawnHeart(false), i * 70);
}