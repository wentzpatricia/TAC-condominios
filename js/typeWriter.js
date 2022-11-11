const textDisplay = document.getElementById('text');
const phrases = ['Smartphones.', 'Tablets.', 'Notebooks.', 'Desktop'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const loop = () => {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 30) + 30;
  const normalSpeed = Math.random() * (300 - 100) + 100;
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
};

loop();
