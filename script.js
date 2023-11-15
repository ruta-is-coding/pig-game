'use strict';
//Elements and variables
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer, isGameOn, scores;

//Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isGameOn = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
init();

const displayCurrentScore = textContentValue => {
  document.getElementById(`current--${activePlayer}`).textContent =
    textContentValue;
};

const switchPlayers = () => {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (isGameOn) {
    // 1. Generate a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if the dice number is not 1.
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      displayCurrentScore(currentScore);
    } else {
      displayCurrentScore(0);
      switchPlayers();
    }
  }
});

//Clicking the hold button
btnHold.addEventListener('click', function () {
  if (isGameOn) {
    // 1. Add current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      //Finish the game
      isGameOn = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Switch to the next player
      switchPlayers();
    }
  }
});

//Reset the game
btnNew.addEventListener('click', init);
