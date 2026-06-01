/* console.log("Hello World")
для проверки, что все работает */ 

function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice < 1 / 3) {
      return "rock"; 
  } else if (computerChoice < 2 / 3) {
      return "paper";
  } else {
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose between Rock, Paper or Scissors");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  
  if (computerChoice === humanChoice) {
      console.log(`Draw! ${computerChoice} = ${humanChoice}`);
      return "draw";
  } else if (
  ( humanChoice === "rock" && computerChoice === "scissors") ||
  ( humanChoice === "scissors" && computerChoice === "paper") ||
  ( humanChoice === "paper" && computerChoice === "rock")
   ) {
      console.log(`You've won ${humanChoice} beats ${computerChoice}`);
      return "human"; 
  } else { 
      console.log(`You've lost ${computerChoice} beats ${humanChoice}`);
      return "computer";
  }
}

function counter() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
      console.log(`Round ${i + 1}`);

      const roundResult = playRound(getHumanChoice(), getComputerChoice());

      if (roundResult === "human") {
          humanScore++;
      } else if (roundResult === "computer") { 
          computerScore++;
      }

      console.log(`Current score: human: ${humanScore}, computer: ${computerScore}`);
  }

  console.log(`Game over.`);

  if (humanScore > computerScore) {
      console.log(`Congratulations. You've won.`); 
  } else if (humanScore < computerScore) {
      console.log(`You've lost.`);
  } else {
      console.log(`Draw.`);
  }
}

/* ниже будет код, который я написал в начале, самый первый, для сравнения, 
он гораздо менее профессиональный. 

playGame();

function getComputerChoice() {
  const randomNumber = Math.random();
  
  if (randomNumber < 1 / 3) { // здесь сначала я записал 0.33. теперь JS сам разделит на равные части
    return "Scissors";
  } else if (randomNumber < 2 / 3) {
    return "Rock";
  } else {
    return "Paper"; 
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Scissors or Paper");
  return choice.toLowerCase(); //изначально написал просто choice, но надо привести к единому регистру, т.к. пользователь может написать и с большой буквы
}

function playGame() {
  let humanScore = 0; 
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase(); 
    const computer = computerChoice.toLowerCase();
    if (human === computer) {
      console.log("Draw!" + human + " = " + computer);
    } else if (
      ( human === "rock" && computer === "scissors") ||
      ( human === "paper" && computer === "rock") ||
      ( human === "scissors" && computer === "paper") 
    ) {
      console.log("You win!" + human + " beats " + computer);
      humanScore ++;
    } else {
      console.log("You`ve lost!" + computer + " beats " + human);
      computerScore ++;
    }
  }
    for (let i = 1; i <= 5; i++) {
      console.log(`Round ${i}`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  }
    console.log("Game Over");
    if (humanScore > computerScore) {
      console.log(`Congratulations! You have won the game! Final score is ${humanScore}:${computerScore}`); 
    } else if (humanScore < computerScore) {
      console.log(`You have lost. Final score is ${humanScore}:${computerScore}`);
    } else {
      console.log(`Draw. Final score is ${humanScore}:${computerScore}`);
    }
}
*/

/*function ShowMessage() {
  return ("Hello");
}

console.log(ShowMessage());
*/

/* вариант этого кода с массивом. 
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());
*/

 
/*function favoriteAnimal(animal) {
  return animal + " is my favorite animal"
}

console.log(favoriteAnimal ('Goat'));

function sum(param1, param2) {
  return param1 + param2; 
}

console.log (sum(1, 2));
*/

