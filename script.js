'use strict';

// ========== Create expression functions & Refactoring ===========

//message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// scoreElement
const scoreElement = function (scoreNum) {
    document.querySelector('.score').textContent = scoreNum;
}

//Display body
const displayBody = function (body) {
    document.querySelector('body').style.background = body
}

// ================= Add variables =================
const number = document.querySelector('.number');
// create random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// create addEventListener for click event
document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // When there is no input 
        if (!guess) {
            displayMessage('⛔ No Number!')
        }
        // When player wins
        else if (guess === secretNumber) {
            displayMessage('🎉Correct Number!')
            displayBody('#60b347')
            number.style.width = '30rem'
            // secret number
            number.textContent = secretNumber;

            // Checking High Score  
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        //! When guess is wrong
        else if (guess !== secretNumber) {
            if (score > 1) {
                // When guess is to low or high
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
                score--
                scoreElement(score)
            } else {
                displayMessage('💥 You lost the game!')
                scoreElement(0)
                displayBody('rgb(224, 46, 46)')
            }
        }
    })

//? When click againBtn
document.querySelector('.again').addEventListener(
    'click', function () {
        score = '20';
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...')
        scoreElement(score)
        number.textContent = '?';
        document.querySelector('.guess').value = '';
        displayBody('#222')
        number.style.width = '15rem'
    }
)