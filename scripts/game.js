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

//function getHumanChoice(choice) {
//ниже код функции, который мы скрыли, т.к. решили сделать так, 
//чтобы пользователь нажимал на кнопки, а не писал вручную
//а код в комментарии позволяет сделать всплывающее окно,
//куда пользователь печатает свой выбор 
//const humanChoice = prompt("Choose between Rock, Paper or Scissors");
//return humanChoice.toLowerCase();
// return choice;
//}

const results = document.querySelector(".results");
const round_num = document.createElement("p");
const round_result = document.createElement("p");
const player_score = document.createElement("p");
const comp_score = document.createElement("p");
const game_over = document.createElement("p");

function playRound(humanChoice, computerChoice) {

  if (computerChoice === humanChoice) {

    round_result.textContent = `Draw! ${computerChoice} = ${humanChoice}`;
    //console.log(`Draw! ${computerChoice} = ${humanChoice}`);
    return "draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    //console.log(`You've won ${humanChoice} beats ${computerChoice}`);
    round_result.textContent = `You've won ${humanChoice} beats ${computerChoice}`;
    return "human";
  } else {
    round_result.textContent = `You've lost ${computerChoice} beats ${humanChoice}`;
    //console.log(`You've lost ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

function counter(humanChoice) {

  //for (let i = 0; i < 5; i++) {
  //console.log(`Round ${i + 1}`);

  if (currentRound >= 5) {
    return;
  }

  currentRound++;

  round_num.textContent = `Round ${currentRound}`;

  const roundResult = playRound(/*getHumanChoice()*/humanChoice, getComputerChoice());

  if (roundResult === "human") {
    humanScore++;
    player_score.textContent = `Your score is ${humanScore}`;
  } else if (roundResult === "computer") {
    computerScore++;
    comp_score.textContent = `Computer score is ${computerScore}`;
  }

  if (currentRound === 5) {
    if (humanScore > computerScore) {
      game_over.textContent = `Game over. You've won the game. 
      ${humanScore} : ${computerScore}`;
    } else if (humanScore < computerScore) {
      game_over.textContent = `Game over. You've lost. Computer has won,
    ${humanScore} : ${computerScore}`;
    } else game_over.textContent = `Draw. ${humanScore} : ${computerScore}`;
  }
}
//  console.log(`Current score: human: ${humanScore}, computer: ${computerScore}`);

//console.log(`Game over.`);

if (humanScore > computerScore) {
  //console.log(`Congratulations. You've won.`);
} else if (humanScore < computerScore) {
  console.log(`You've lost.`);
} else {
  console.log(`Draw.`);
}

//counter(); //объявили функцию для начала игры
//функция в комментарии, т.к. мы теперь делаем кнопки, 
//и нам эта функция помешает

/*ниже сделаем кнопки, чтобы игра существовавала не только в консоли,
но и на экране*/
/*для этого мы уберем counter в комментарии*/

//const rockBtn = document.querySelector("#rock");
//const paperBtn = document.querySelector("#paper");
//const scissorsBtn = document.querySelector("#scissors");

const buttons = document.querySelector(".buttons");//здесь 
//взяли только родителя. отдельно кнопки нам не нужны,
//клик все равно всплывет от кнопок к родителю и 
//покажет нам инфу о том, какую кнопку нажали

buttons.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {//добавили проверку, чтобы
    //вслучае, если пользователь кликнет на пространство между кнопок, 
    //в humanChoise не записалась пустая строка
    //если пользователь ткнет между кнопок, этот клик не пройдет
    //проверку, т.к. в tagName запишется DIV, и код остановится
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();

    counter(humanChoice);
  }
});

results.appendChild(round_num);
results.appendChild(round_result);
results.appendChild(player_score);
results.appendChild(comp_score);
results.appendChild(game_over);

//передали результат кнопки в функцию playRound и запустили функцию

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

