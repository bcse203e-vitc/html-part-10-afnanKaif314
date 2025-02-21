const target = Math.floor(Math.random() * 50) + 1;
let guess = 0;

while (guess !== target) {
    guess = parseInt(prompt("Guess a number between 1 and 50:"), 10);
    
    if (guess < target) {
        alert("Too low! Try again.");
    } else if (guess > target) {
        alert("Too high! Try again.");
    } else {
        alert("Congratulations! You guessed the correct number.");
        break;
    }
}
