const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
const score = document.querySelector('.score')
let wins = 0
let losses = 0


// this is the function to run when a button is clicked by the User 
// it will play a round and send the results to the game function to determine 
// score and game status.

const clickFunction = (button) => {
    return function () { 
    game(playRound(button.textContent, getComputerChoice()))
    }
}

buttons.forEach((button) => button.addEventListener('click', clickFunction(button)))

// fuction to removed the EventListeners after the game is over. unfortunately, 
// this is not working as intended at the buttons continue to respond. I gave up trying to get them to work.
function removeListeners() {
    buttons.forEach((button) => button.removeEventListener('click', clickFunction(button)))
}

// the guts of the game to track scores and check for winners
function game(result) {
    result ? wins++ : losses++;

    if (wins === 5 || losses === 5) {
        removeListeners();
        showGameResult();
    } else {
        updateScore();
    }
}

// determine if user or computer is the winner
function showGameResult() {
    if (wins === 5) {
        score.textContent = `You won the game ${wins} to ${losses}.`;
    } else {
        score.textContent = `Sorry, you lost the game ${wins} to ${losses}.`;
    }
}


function updateScore() {
    score.textContent = `Score: you - ${wins} computer - ${losses}.`;
}

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

// play a single round and send the result to the game function to update score
function playRound (player, computer) {
    let result
    let playerLower = player.toLowerCase()
    while (playerLower === computer) {
        computer = getComputerChoice()
    }
    if (playerLower === 'rock') {
        (computer === 'scissors') ? result = 1 : result = 0
    }
    else if (playerLower === 'paper') {
        (computer === 'scissors') ? result = 0 : result = 1 
    }
    else {
        (computer === 'rock') ? result = 0 : result = 1 
    }
    if (result === 1) {
        results.textContent = (`You Win!! ${playerLower} beats ${computer}.`)
    }
    else {
        results.textContent = (`You Lose. ${computer} beats ${playerLower}.`)
    }
    return result
}
