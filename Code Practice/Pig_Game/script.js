'use strict';
//Selecting elements
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //if the active player is player 0, then we want the new active player to be player 1; else it should be player 0

  //switch background color by toggling the .player--acive class
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //Hide the die

const scores = [0, 0]; //store the scores as they get added
let currentScore = 0; //cannot be inside the function; otherwise it would be set to 0 when we reset
let activePlayer = 0; //0 identifies player 1; 1 identifies player 2
let playing = true;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1; if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore = currentScore + dice;
      //switch players by manipulating the id current--0/current--1
      // current0El.textContent = currentScore; // make *current0El dynamic
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer(); // Don't forget the ()!!
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's total score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check and see if the score is 100; if so, finish
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //    if not, switch players
      switchPlayer(); // Don't forget the ()!!
    }
  }
});
