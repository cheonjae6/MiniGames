// // Declaring the fundamental game variables
// var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying;

// // Initilizing the game 
// init();

// // Adding an event listener to the button that makes the dice roll (using an anonymous function)
// document.querySelector('.btn-roll').addEventListener('click', function () {

//   // Checking if the game is being played
//   if (gamePlaying) {

//     // Create two random numbers for the dices
//     var dice1 = Math.floor(Math.random() * 6) + 1;
//     var dice2 = Math.floor(Math.random() * 6) + 1;

//     // Display the results
//     document.getElementById('dice1').style.display = 'block';
//     document.getElementById('dice2').style.display = 'block';
//     document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
//     document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    
//     // Checking if the player rolls a 6 two times in a row
//     if(dice1 === 6 && prevDiceRoll === 6) {
//         // Player looses his entire score
//         scores[activePlayer] = 0;
//         document.querySelector('#score-' + activePlayer).textContent = '0';
//         nextPlayer();
//     // Update the round score if the rolled number was not a 1 
//     } else if (dice1 !== 1 && dice2 !== 1) {
//         // Add score if the dice number is different from 1
//         roundScore += dice1 + dice2;
//         document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     } else {
//         // Next player's turn  
//         nextPlayer();
//     }

//     // Saving the previous dice roll on a variable 
//     prevDiceRoll = dice1;

//   }

// });

// // Functionality that allows to accumulate points ('hold')
// document.querySelector('.btn-hold').addEventListener('click', function () {

//   if (gamePlaying) {

//     // Adding the current score to the global score
//     scores[activePlayer] += roundScore;

//     // Updating the UI (user interface) 
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//     // Checking if the winning score is the predefined of 100 or if an user has set a specific goal 
//     // Saving the final score input in a variable 
//     var input = document.getElementById('winningScore').value;
//     var winningScore;

//     // Undefined, 0, null or "" are coerced to false, anything else is coerced to true
//     if(input) {
//       winningScore = input;
//     } else {
//       winningScore = 30;
//     }

//     // Checking if the player won the game
//     if (scores[activePlayer] >= winningScore) {

//       // Changing the name of the player to 'Winner!'
//       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

//       // Hiding the dices
//       document.getElementById('dice1').style.display = 'none';
//       document.getElementById('dice2').style.display = 'none';

//       // Adding the 'winner' class to the player
//       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

//       // Removing the active player status from the winner 
//       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

//       // Changing the 'gamePlaying' variable to 'false' 
//       gamePlaying = false;

//     } else {
//       // If the player wins the game, then it's the next player's turn
//       nextPlayer();
//     }
//   }
// });

// // Restarting the game after clicking the 'New Game' button 
// document.querySelector('.btn-new').addEventListener('click', init);

// // Function that initializes the game
// function init() {

//   // Setting the 'gamePlaying' variable to 'true' 
//   gamePlaying = true;

//   // Setting both scores back to 0
//   scores = [0, 0];

//   // Setting the activePlayer back to being 'Player 1'
//   activePlayer = 0;

//   // Setting the roundScore back to 0
//   roundScore = 0;

//   // Hiding the dices right from the beggining of the game
//   document.getElementById('dice1').style.display = 'none';
//   document.getElementById('dice2').style.display = 'none';

//   // Setting the scores to 0 by default (using the 'getElementById' method)
//   document.getElementById('score-0').textContent = '0';
//   document.getElementById('score-1').textContent = '0';
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';

//   // Removing the 'winner status' from the winning player
//   document.getElementById('name-0').textContent = 'Player 1';
//   document.getElementById('name-1').textContent = 'Player 2';
//   document.querySelector('.player-0-panel').classList.remove('winner');
//   document.querySelector('.player-1-panel').classList.remove('winner');

//   // Removing the 'active status' from the winning player 
//   document.querySelector('.player-0-panel').classList.remove('active');
//   document.querySelector('.player-1-panel').classList.remove('active');

//   // Make sure that the 'active status' from 'Player 2' is removed and given to 'Player 1'  
//   document.querySelector('.player-1-panel').classList.remove('active');
//   document.querySelector('.player-0-panel').classList.add('active');

// }

// // Function to giving the turn to the next player
// function nextPlayer() {

//   // It's the next player's turn if the dice number is 1 (using the ternary operator)
//   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

//   // Setting the roundScore back to 0
//   roundScore = 0;

//   // Setting the current score back to 0
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';

//   // Adding the active class to the player who has the turn now
//   document.querySelector('.player-0-panel').classList.toggle('active');
//   document.querySelector('.player-1-panel').classList.toggle('active');

//   // Hiding the dice after the active player changes 
//   document.getElementById('dice1').style.display = 'none';
//   document.getElementById('dice2').style.display = 'none';

// }


'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);