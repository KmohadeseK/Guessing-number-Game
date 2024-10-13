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

// display number with textContent Element
const displayNumber = function (numb) {
    document.querySelector('.number').textContent = numb;
}

// Width style for number element 
const widthNumber = function (widthNum) {
    document.querySelector('.number').style.width  = widthNum;
}

// ================= Add variables =================

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
            displayMessage('🎉Correct Number!');
            displayBody('#60b347');
            widthNumber('30rem');
            // secret number
            displayNumber(secretNumber);
            
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
        displayNumber('?');
        document.querySelector('.guess').value = '';
        displayBody('#222')
        widthNumber('15rem')
    }
)

