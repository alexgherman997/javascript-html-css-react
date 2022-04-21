'use strict';

//Select the elements
const btnNewGame = document.querySelector('.newGame');
const btnRoLLDice = document.querySelector('.rollDice');
const btnHold = document.querySelector('.holdScore');

const classPlayer0 = document.querySelector('.player--0');
const scoreClassPlayer0 = document.querySelector('#score--0');
const currentScoreClassPlayer0 = document.querySelector('#current--0');

const classPlayer1 = document.querySelector('.player--1');
const scoreClassPlayer1 = document.querySelector('#score--1');
const currentScoreClassPlayer1 = document.querySelector('#current--1');

const imgDice = document.querySelector('.dice');

//Declare variables
let scorePlayer0,
  scorePlayer1,
  currentScore,
  diceNumber,
  activePlayer,
  playing,
  scorePlayer;

const initGame = function () {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  currentScore = 0;

  activePlayer = 0;
  playing = true;

  classPlayer0.classList.add('player--active');
  classPlayer1.classList.remove('player--active');
  classPlayer0.classList.remove('player--winner');
  classPlayer1.classList.remove('player--winner');
  imgDice.classList.add('hidden');

  scoreClassPlayer0.textContent = 0;
  currentScoreClassPlayer0.textContent = 0;
  scoreClassPlayer1.textContent = 0;
  currentScoreClassPlayer1.textContent = 0;
};

initGame();

const generateDiceNumber = () => Math.floor(Math.random() * 6 + 1);

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  classPlayer0.classList.toggle('player--active');
  classPlayer1.classList.toggle('player--active');
};

btnRoLLDice.addEventListener('click', function (e) {
  if (playing) {
    const dice = generateDiceNumber();
    imgDice.src = `dice-${dice}.png`;
    imgDice.classList.remove('hidden');

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function (e) {
  if (playing) {
    //here we can use a list [scorePlayer1, scorePlayer2] , score[activePlayer] += currentScore;
    scorePlayer = activePlayer
      ? (scorePlayer1 += currentScore)
      : (scorePlayer0 += currentScore);

    document.getElementById(`score--${activePlayer}`).textContent = scorePlayer;
    if (scorePlayer >= 100) {
      imgDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', initGame);
///IMPLEMENT NEW VERSION USING SWITCH PLAYER (take it from context and setstate, classList.toggle)
//using variable playing to stop the game
