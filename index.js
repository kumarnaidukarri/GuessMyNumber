console.log("Welcome to Javascript");
const againBtnEl = document.querySelector(".again");
const checkBtnEl = document.querySelector(".check");
const inputBoxEl = document.querySelector("#input-box");
const messageEl = document.querySelector(".message");
const questionBoxEl = document.querySelector(".question-box");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

function displayMessage(message) {
  console.log(message);
  messageEl.textContent = message;
}
function resetGame() {
  console.log("Game is Resetting...");
  score = 20;
  stopGameCondition = false;
  questionBoxEl.textContent = "?";
  inputBoxEl.value = "";
  inputBoxEl.textContent = "";
  messageEl.textContent = "Start guessing  ...";
  scoreEl.textContent = 20;
  document.body.style.backgroundColor = "#222";
  inputBoxEl.style.backgroundColor = "#222";
  secretNumber =
    Math.trunc(Math.random() * 20) + 1; /* anyRandomNumber between 1 and 20 */
  console.log(secretNumber);
  console.log("Game Reset Done...");
}

let score = 20;
let highScore = 0;
let stopGameCondition = false;
let secretNumber =
  Math.trunc(Math.random() * 20) + 1; /* anyRandomNumber between 1 and 20 */
console.log(secretNumber);

checkBtnEl.addEventListener("click", function () {
  console.log("Matching Input");
  let userNumber = Number(inputBoxEl.value); //stringValue to Number

  //If User Already Won Game (OR)No.of 20 Guesses Over. then,Stop game and Return tell them to reset.
  if (stopGameCondition === true || score === 0) {
    displayMessage(
      score === 0
        ? `You Lost Game Over! Please Reset to start new Game.`
        : `You Already Won. Please Reset to start new Game.`
    );
    return;
  }

  if (userNumber === secretNumber) {
    //Match
    displayMessage("Correct Number! You Won");
    questionBoxEl.textContent = secretNumber;
    document.body.style.backgroundColor = "rgb(96,179,71)";
    inputBoxEl.style.backgroundColor = "rgb(96,179,71)";
    highScore = score > highScore ? score : highScore;
    highScoreEl.textContent = highScore;
    stopGameCondition = true;
  } else if (userNumber <= 0 || userNumber > 20) {
    //Invalid numbers
    displayMessage("Invalid Number! Enter a Number between 1 and 20");
    document.body.style.backgroundColor = "grey";
  } else {
    //Wrong numbers
    console.log(userNumber);
    displayMessage(userNumber > secretNumber ? "Too high!" : "Too low!");
    document.body.style.backgroundColor =
      userNumber > secretNumber ? "#CC0000" : "#FF3333";
    score--;
    scoreEl.textContent = score;
  }
});

againBtnEl.addEventListener("click", resetGame);
