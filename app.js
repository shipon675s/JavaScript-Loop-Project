//! JavaScript Loop Project

// Guess the Function
function guessTheFunction(difficulty) {
    let randomNumber;
    let attemps = 0;
    let maxAttemps;

    // Set difficulty-based Parameters
    switch (difficulty) {
        case 'easy':
            maxAttemps = 5;
            randomNumber = Math.floor(Math.random() * 10 + 1);  // Range 1 - 10
            console.log(randomNumber);
        break;
        case 'medium':
            maxAttemps = 7;
            randomNumber = Math.floor(Math.random() * 100 + 1);  // Range 1 - 100
            console.log(randomNumber);
        break;
        case 'hard':
            maxAttemps = 10;
            randomNumber = Math.floor(Math.random() * 1000 + 1);  // Range 1 - 1000
            console.log(randomNumber);
        break;
        default:
            console.error("Invalid difficulty level, Choose 'easy', 'medium', 'hard' ");
    }
}


// Guess 







// Get user input difficulty
let difficulty = prompt('Choose difficulty (easy, medium, haed)').toLowerCase();


guessTheFunction(difficulty);
// console.log(difficulty);