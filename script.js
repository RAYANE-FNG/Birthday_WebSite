document.getElementById('validate-btn').addEventListener('click', checkDOB);

function checkDOB(){
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  const correctDate = {day:"22", month:"12", year:"2005"};

  if(day === correctDate.day && month === correctDate.month && year === correctDate.year){
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.heart-page').style.display = 'block';
    document.getElementById('song').play();
    document.querySelector('.birthday-text').innerText = "Happy Birthday Rim 🎉";
  } else {
    document.getElementById('error-msg').innerText = "Date incorrecte ! Essaie encore 😉";
  }
}

function goToVideo(){
  document.querySelector('.heart-page').style.display = 'none';
  document.querySelector('.video-page').style.display = 'block';
}

function goToLetter(){
  document.querySelector('.video-page').style.display = 'none';
  document.querySelector('.letter-page').style.display = 'block';
}

function goBackToHome(){
  document.querySelector('.heart-page').style.display = 'none';
  document.querySelector('.home-page').style.display = 'block';
  document.getElementById('song').pause();
  document.getElementById('song').currentTime = 0;
}

function goBackToHeart(){
  document.querySelector('.video-page').style.display = 'none';
  document.querySelector('.heart-page').style.display = 'block';
}

function goBackToVideo(){
  document.querySelector('.letter-page').style.display = 'none';
  document.querySelector('.video-page').style.display = 'block';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  
  // Position horizontale aléatoire
  heart.style.left = Math.random() * window.innerWidth + 'px';
  // Durée aléatoire de l'animation
  const duration = 3 + Math.random() * 3;
  heart.style.animationDuration = duration + 's';
  // Taille aléatoire initiale
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  
  document.body.appendChild(heart);

  // Supprimer le cœur après l'animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Créer des cœurs toutes les 200 ms
setInterval(createHeart, 200);


const flowers = ['🌸','🌹','🌺','💐','🥀']; // liste d’emojis fleurs

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  
  // Choisir une fleur aléatoire
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
  // Position horizontale aléatoire
  flower.style.left = Math.random() * window.innerWidth + 'px';
  
  // Durée aléatoire de l'animation
  const duration = 3 + Math.random() * 3;
  flower.style.animationDuration = duration + 's';
  
  // Taille aléatoire initiale
  flower.style.fontSize = (16 + Math.random() * 24) + 'px';
  
  document.body.appendChild(flower);

  // Supprimer la fleur après l'animation
  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// Créer des fleurs toutes les 200 ms
setInterval(createFlower, 200);