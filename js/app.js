let game1;
const puzzle = document.querySelector("#puzzle");
const remaining = document.querySelector("#guesses");

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});
//display text on the screen
const render = () => {
  puzzle.innerHTML = "";
  remaining.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzle.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  game1 = new Hangman(puzzle, 5);
  render();
};
//reset the game
document.querySelector("#reset").addEventListener("click", startGame);
startGame();
