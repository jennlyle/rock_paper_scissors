console.log("Welcome to a game of Rock, Paper, Scissors!\n\n");

// Obtain a choice from the user

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse(response) {
    const errormsg = "That doesn't look right... try again.";
// Validate user's choice and tell them if they made a mistake
// strip capiatlisation or ignore capitalisation
    let myString = response.toLowerCase();

    if ((myString !== 'rock') && (myString !== 'paper') && (myString !== 'scissors')){
        console.log(errormsg);
        startGame();
    }
    else {

        // Make a random selection for the computer
        // A random choice of Rock, Paper or Scissors
        const computersChoices = ['rock', 'paper', 'scissors'];
        const randomChoice = computersChoices[Math.floor(Math.random() * computersChoices.length)];
        const ourPicks = "You picked " + myString + " and I picked " + randomChoice + "!  ";

        // Compare the two choices
            // Rule out ties
        if (myString === randomChoice){
            response = "Wow!  We tied! " + ourPicks + "Amazing!!!";
        }
        else {

            if (myString === "paper") {
                if (randomChoice === "rock") {
                    response = "Gratz! " + ourPicks + " Your paper wins!";
                } 
                else {
                    if (randomChoice === "scissors") {
                        response = "Haha! " + ourPicks + " My scissors wins!";
                    }
                }
            }
            if (myString === "scissors") {
                if (randomChoice === "rock") {
                    response = "Too bad! So sad! " + ourPicks + " My rock wins!";
                } 
                else {
                    if (randomChoice === "paper") {
                        response = "No no NOOO! " + ourPicks + " Your scissors wins.";
                    }
                }
            }
            if (myString === "rock") {
                if (randomChoice === "scissors") {
                    response = "No no NOOO! " + ourPicks + " Your rock wins!";
                } 
                else {
                    if (randomChoice === "paper") {
                        response = "Too bad, so sad! " + ourPicks + " My paper wins.";
                    }
                }
            }
        }
        // Report on who won
        console.log("Game Result: ", response);
        readline.close();

    }

};

function startGame(){
    readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);
}

startGame();