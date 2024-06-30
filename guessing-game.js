// function singleGuess(guess) {
//     const num = Math.floor(Math.random() * 100);
//     if (guess > 99 || guess < 0) {
//       return "Please guess between 0 & 99";
//     }
//     if (num > guess) {
//       return `${guess} is too low`;
//     } else if (num < guess) {
//       return `${guess} is too high`;
//     } else {
//       return "You win!";
//     }
//   }


  function guessingGame() {
    // Generate a random number between 0 and 99
    const num = Math.floor(Math.random() * 100);//
    let guesses = 0;
    let gameOver = false;
  
 // Return the function that will handle the guesses
    return function (guess) {
      // If the game is over, inform the player
      if (gameOver) {
        return "The game is over, you already won!";
      }
  
      // Increment the number of guesses
      guesses++;
  
      // Validate the guess
      if (guess > 99 || guess < 0) {
        return "Please guess between 0 & 99";
      }
  
      // Check if the guess is too low
      if (num > guess) {
        return `${guess} is too low`;
      }
      // Check if the guess is too high
      else if (num < guess) {
        return `${guess} is too high`;
      }
      // The guess is correct
      else {
        gameOver = true; // Set gameOver to true to prevent further guesses
        return `You win! You found ${num} in ${guesses} guesses.`;
      }
    };
  }

// module.exports = { guessingGame };
