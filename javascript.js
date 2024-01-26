const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
const score = document.querySelector('.score')
let wins = 0
let losses = 0

buttons.forEach((button) => button.addEventListener('click', () => {
    (playRound(button.textContent, getComputerChoice())) ? wins++ : losses++
    if (wins === 5 || losses === 5) {
        buttons.forEach((button) => )
        if (wins === 5) {
            score.textContent = `You won the game ${wins} to ${losses}.`
        } else {
            score.textContent = `Sorry, you lost the game ${wins} to ${losses}.`
        }
    } else {
        score.textContent = `Score: you - ${wins} computer - ${losses}.`
    }
    }))

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

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

function game () {
    let playerSelection
    let computerSelection
    // intro to game
    // console.log("let's play Rock, Paper, Scissors...best of 5")
    // game to run 5 times (best of 5)

    // prompt for user input
    // playerSelection = prompt('Enter your move:')
    // get computerSelection
    // computerSelection = getComputerChoice()
    // playRound and determine winner
    let result = playRound(playerSelection, getComputerChoice())
    result ? wins++ : losses++
    
    // if tie have computer rechoose
    // playRound again
    // track winner

    // if played three times or more check for winner
    // if winner end game
}

// report winner
// game()

// interesting: I have not been using ;'s' but without it after the game call above, I get a TypeError that game is not a function. the error comes after game() executes and the lines below try to get executed. if i add the semi it works fine. If I do a formal if/else (see below) then it works without the semi; if i eliminate the () around wins === 3 then it works without the semi. I read that you have to be careful of lines that start with a ( since it thinks this is part of the previous line.

wins === 3 ? console.log(`Congrats!! You won ${wins} to ${losses}.`) : console.log(`You lost ${wins} to ${losses}.`)

// if (wins === 3) {
//     console.log(`Congrats!! You won ${wins} to ${losses}.`)
// }
// else {
//     console.log(`You lost ${wins} to ${losses}.`)
// }



