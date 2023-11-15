'use strict';
//Select elements by id
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

//Rolling the dice
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check if the dice number is not 1.
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    //TO-DO change later
    current0El.textContent = currentScore;
  } else {
    //Switch to the next player
  }
});
