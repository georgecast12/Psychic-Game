


//Variables that hold initial values and letter options
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = " ";
var computerGuess = " ";
var guesses = " ";
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables that reference div to HMTL

var winsRecordText = document.getElementById("wins-Record");
var lossRecordText = document.getElementById("loss-Record");
var attemptsCountdownText = document.getElementById("attempts-Countdown");
var attemptsRecordText = document.getElementById("attempts-Record");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(computerGuess)


//Activates the game functions by pressing any key
document.onkeydown = function (event) {

    // Determines which key was pressed by user
    var userGuess = event.key;
    console.log(userGuess)

    //shows variables from load of html
    document.getElementById("loss-Record").innerHTML = "Losses: " + losses;
    document.getElementById("wins-Record").innerHTML = "Wins: " + wins;
    document.getElementById("attempts-Countdown").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("attempts-Record").innerHTML = "Your Guesses So Far:" + userGuess;

    // Only run the following code block if the user presses "r" or "p" or "s".
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    }

    else if ((userGuess !== computerGuess) && (guessesLeft < 10) && (guessesLeft > 0)) {
        guessesLeft--;
        // document.getElementById("attempts-Record").appendChild("Your Guesses So Far:" + userGuess);

    }

    if (userGuess !== computerGuess && guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
    }


};

