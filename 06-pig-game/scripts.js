'use strict';

//Select the elements
const btnNewGame = document.querySelector('.newGame');
const btnRoLLDice = document.querySelector('.rollDice');
const btnHold = document.querySelector('.holdScore');

const classPlayer1 = document.querySelector('.player--0');
const scoreClassPlayer1 = document.querySelector('#score--0');
const currentScoreClassPlayer1 = document.querySelector('#current--0');

const classPlayer2 = document.querySelector('.player--1');
const scoreClassPlayer2 = document.querySelector('#score--1');
const currentScoreClassPlayer2 = document.querySelector('#current--1');

const imgDice = document.querySelector('.dice');

//Declare variables
let scorePlayer1, scorePlayer2, currentScore, diceNumber;

const initGame = function () {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  currentScore = 0;

  activePlayer = 0;
  playing = true;

  classPlayer1.classList.add('player--active');
  classPlayer2.classList.remove('player--active');
  classPlayer1.classList.remove('player--winner');
  classPlayer2.classList.remove('player--winner');

  scoreClassPlayer1.textContent = 0;
  currentScoreClassPlayer1.textContent = 0;
  scoreClassPlayer2.textContent = 0;
  currentScoreClassPlayer2.textContent = 0;

  btnRoLLDice.disabled = false;
  btnHold.disabled = false;
};

const generateDiceNumber = () => Math.floor(Math.random() * 6 + 1);

btnRoLLDice.addEventListener('click', function () {
  let activePlayer = document.querySelector('.player--active p').textContent;
  diceNumber = generateDiceNumber();
  imgDice.src = `dice-${diceNumber}.png`;

  if (diceNumber == 1) {
    currentScore = 0;
  } else {
    currentScore += diceNumber;
  }
  if (activePlayer == 'PLAYER 1') {
    currentScoreClassPlayer1.textContent = currentScore;
  } else {
    currentScoreClassPlayer2.textContent = currentScore;
  }

  //when dice ==1 -> changeing the state of the app
  if (diceNumber == 1 && activePlayer == 'PLAYER 1') {
    classPlayer1.classList.remove('player--active');
    classPlayer2.classList.add('player--active');
  } else if (diceNumber == 1 && activePlayer == 'PLAYER 2') {
    classPlayer2.classList.remove('player--active');
    classPlayer1.classList.add('player--active');
  }
});

btnHold.addEventListener('click', function () {
  let activePlayer = document.querySelector('.player--active p').textContent;
  console.log(activePlayer);
  if (activePlayer == 'PLAYER 1') {
    console.log('player1');
    scorePlayer1 += currentScore;
    scoreClassPlayer1.textContent = scorePlayer1;
    if (scorePlayer1 < 100) {
      classPlayer1.classList.remove('player--active');
      classPlayer2.classList.add('player--active');
    } else {
      classPlayer1.classList.add('player--winner');
      btnRoLLDice.disabled = true;
      btnHold.disabled = true;
    }
  } else {
    console.log('player2');
    scorePlayer2 += currentScore;
    scoreClassPlayer2.textContent = scorePlayer2;
    if (scorePlayer2 < 100) {
      classPlayer2.classList.remove('player--active');
      classPlayer1.classList.add('player--active');
    } else {
      classPlayer2.classList.add('player--winner');
      btnRoLLDice.disabled = true;
      btnHold.disabled = true;
    }
  }
  currentScore = 0;
});

btnNewGame.addEventListener('click', initGame);

initGame();

//YOU CAN DO SOME REFACTORING, USING SWITCH PLAYER & ACTIVE PLAYER
///IMPLEMENT NEW VERSION USING SWITCH PLAYER (take it from context and setstate, classList.toggle)
//using variable playing to stop the game

//THIS IS OLD VERSION OF THE APP, NOT WORKING AS EXPECTED AFTER SOME CHANGES , NEW VERSION IS in script-new.js
