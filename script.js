// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get the result div from the HTML by its ID
const resultDiv = document.getElementById("result");

// This function randomly picks "Rock", "Paper", or "Scissors" for the computer
function getComputerChoice() {
  // Create a variable to store a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use if statements to return the choice based on the random number
  if (randomNumber === 0) {
    return "Rock";
  }
  if (randomNumber === 1) {
    return "Paper";
  }
  // If it's not 0 or 1, it must be 2
  return "Scissors";
}

// Add variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

// This function takes the player's choice, generates the computer's choice, and displays both on the page
function playRound(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Create a message using template literals to show both choices
  let message = `You chose: ${playerChoice} <br>Computer chose: ${computerChoice}`;

  // Remove the emoji from the player's choice for comparison
  let player = "";
  if (playerChoice === "Rock 🪨") {
    player = "Rock";
  }
  if (playerChoice === "Paper 📄") {
    player = "Paper";
  }
  if (playerChoice === "Scissors ✂️") {
    player = "Scissors";
  }

  // Decide who wins or if it's a tie
  let result = "";
  if (player === computerChoice) {
    result = "It's a tie!";
  } else if (
    (player === "Rock" && computerChoice === "Scissors") ||
    (player === "Paper" && computerChoice === "Rock") ||
    (player === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
    playerScore = playerScore + 1;
  } else {
    result = "Computer wins!";
    computerScore = computerScore + 1;
  }

  // Add the result and score to the message
  message = `${message} <br><strong>${result}</strong>`;
  message = `${message} <br>Score: You ${playerScore} - Computer ${computerScore}`;

  // Check if someone has won the best of 3 (first to 2)
  if (playerScore === 2 || computerScore === 2) {
    if (playerScore === 2) {
      message = `${message} <br><strong>You win the set! 🎉</strong>`;
    } else {
      message = `${message} <br><strong>Computer wins the set! 🤖</strong>`;
    }
    // Reset scores for a new set
    playerScore = 0;
    computerScore = 0;
    message = `${message} <br><em>Scores reset for a new set.</em>`;
  }

  // Display the message in the result div
  resultDiv.innerHTML = message;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  // Call playRound with "Rock" as the player's choice
  playRound("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  // Call playRound with "Paper" as the player's choice
  playRound("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  // Call playRound with "Scissors" as the player's choice
  playRound("Scissors ✂️");
});