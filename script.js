use strict;

let computerPoints = 0;
let playerPoints = 0;
let roundScore = 0;
let playerSelection = "";
let computerSelection = "";

function getPlayerChoice () {
  document.getElementById("")
}

function getComputerChoice () {
  let randomNum = Math.floor(Math.random()*3);

  if (randomNum == 0) {
    computerSelection = "rock";
    return computerSelection;
  }
  else if (randomNum == 1) {
    computerSelection = "paper";
    return computerSelection;
  }
  else {
    computerSelection = "scissors";
    return computerSelection;
  }
}

function playRound (playerSelection, computerSelection) {

  getComputerChoice();

  if ((playerSelection == "rock" && computerSelection == "scissors") ||    (playerSelection == "paper" && computerSelection == "rock") ||
  (playerSelection == "scissors" && computerSelection == "paper")){
    playerWinsRound();
    roundScore++;
  }

  else if ((playerSelection == "rock" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "rock")){
    computerWinsRound();
    roundScore++;
  }

  else {
    document.querySelector("#message").innerHTML = "It's a tie!";
  }
}

function playerWinsRound (playerPoints) {
  playerPoints += 1;
  document.querySelector("#playerScore").innerHTML = "Your score: " + playerPoints;
  document.querySelector("#message").innerHTML = "Wow! Nice one. This round is yours";
}

function computerWinsRound (computerPoints) {
  computerPoints += 1;
  document.querySelector("#computerScore").innerHTML = "Computer's score: " + computerPoints;
  document.querySelector("#message").innerHTML = "This time I am better than you. Ha-ha!";
}

function newGame () {
  computerPoints = 0;
  playerPoints = 0;
  roundScore = 0;
  playerSelection = "";
  computerSelection = "";
  document.querySelector("#message").innerHTML = "";
}

function game (roundScore){
  if (roundScore =< 5){
    playRound();
  }
  else {
    newGame();
  }

}

game();
