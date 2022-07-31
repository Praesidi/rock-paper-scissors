let computerPoints = 0;
let playerPoints = 0;
let playerSelection = " ";
const buttons = document.querySelectorAll("button");

function getComputerChoice () {
  let randomNum = Math.floor(Math.random()*3);

  switch (randomNum) {
    case (0):
      computerSelection = "rock";
      return computerSelection;
      break;

    case(1):
      computerSelection = "paper";
      return computerSelection;
      break;

    case(2):
      computerSelection = "scissors";
      return computerSelection;
      break;

    default:
      console.log("Oops! Something went wrong D;");
  }
}

function playRound (playerSelection) {
  const computerSelection = getComputerChoice();

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "paper" && computerSelection == "rock") ||
  (playerSelection == "scissors" && computerSelection == "paper")){

    playerPoints++;
    document.querySelector("#playerScore").innerHTML = "Your score: " + playerPoints;
    document.querySelector("#computerScore").innerHTML = "Computer's score: " + computerPoints;
    document.querySelector("#message").innerHTML = "Wow! Nice one. This round is yours";

    if (playerPoints == 5) {
      document.querySelector("#message").innerHTML = "You are the winner!";
      setTimeout(newGame, 500);
    }
  }
  else if ((playerSelection == "rock" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "rock")){

    computerPoints++;
    document.querySelector("#playerScore").innerHTML = "Your score: " + playerPoints;
    document.querySelector("#computerScore").innerHTML = "Computer's score: " + computerPoints;
    document.querySelector("#message").innerHTML = "This time I am better than you. Ha-ha!";

    if (computerPoints == 5) {
      document.querySelector("#message").innerHTML = "Not this time, buddy...";
      setTimeout(newGame, 500);
    }
  }else{
      document.querySelector("#message").innerHTML = "It's a tie!";
    }
}

function newGame () {
  if (window.confirm ("Wanna play another round?")){
    computerPoints = 0;
    playerPoints = 0;
    playerSelection = "";
    computerSelection = "";
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#playerScore").innerHTML = "Your Score: " + 0;
    document.querySelector("#computerScore").innerHTML = "Computer's Score: " + 0;
  }else{
    alert ("Feel free to reload page if you wanna play again :)");
    buttons.forEach(button =>{
      button.disabled = true;
    });
  }
}

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        playRound(button.value)
    });
})
