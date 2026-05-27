/* console.log("Hello World")
для проверки, что все работает */ 

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