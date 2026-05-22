/* console.log("Hello World")
для проверки, что все работает */ 

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

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Choose Rock, Scissors or Paper");
  return choice.toLowerCase(); //изначально написал просто choice, но надо привести к единому регистру, т.к. пользователь может написать и с большой буквы
}

console.log(getHumanChoice());

let humanScore = 0; 
let getComputerScore = 0;

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