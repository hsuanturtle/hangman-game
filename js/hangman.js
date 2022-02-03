class Hangman {
  constructor(word, remainingGuess) {
    this.word = word.toLowerCase().split("");
    this.remainingGuess = remainingGuess;
    this.guessedLetters = [];
    this.status = "playing";
  }
  //function to get puzzle and display on the screen
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      //if the user guess the right letter,show it;if not, then show it as "*"
      if (this.guessedLetters.includes(letter) || letter === "") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  //function to display how many guesses the user has left
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isWrong = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isWrong) {
      this.remainingGuess--;
    }
    this.calculateStatus();
  }

  //show the status message below(right or wrong)
  get statusMessage() {
    if (this.status === "playing") {
      return `Guess left: ${this.remainingGuess}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return `Excellent! You guessed the word.`;
    }
  }

  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ""
    );
    if (this.remainingGuess === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
}
