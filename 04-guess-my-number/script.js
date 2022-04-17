'use strict';
/*
//get elem content
console.log(document.querySelector('.message').textContent);

//set elem content
document.querySelector('.message').textContent = '🎉Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

/*buttonCheck.addEventListener('click', event => {
  console.log(document.querySelector('.guess').value);
});*/

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
const setDisplayedMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const buttonCheck = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');

let secretNumber = Math.floor(getRandomNumber(1, 20));
let score = 20;
let highscore = 0;

buttonCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    setDisplayedMessage('⛔️ No number or invalid number entered!');
  } else if (guess == secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    setDisplayedMessage('🎉Correct number!');
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    setDisplayedMessage(guess > secretNumber ? 'To high!' : 'To low');
    /*guess > secretNumber
      ? (document.querySelector('.message').textContent = 'To high!')
      : (document.querySelector('.message').textContent = 'To low!');*/

    if (score <= 0) {
      setDisplayedMessage('You lost the game!');
    }
  }
});

buttonAgain.addEventListener('click', event => {
  score = 20;
  secretNumber = Math.floor(getRandomNumber(1, 20));
  setDisplayedMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
