let startButton = document.querySelector(".button_start");
let rollButton = document.querySelector(".button_roll");

let p1score = 0;
let p2score = 0;
let p1rounds = 0;
let p2rounds = 0;
let roundsPlayed = 0;
let currentRound = 0;
let totalRounds = 0;

startButton.addEventListener("click", function () {
    totalRounds = prompt("Enter the number of rounds (odd number):");
    totalRounds = parseInt(totalRounds);

    if (totalRounds % 2 !== 0 && totalRounds >= 1) {
        rollButton.disabled = false;
        currentRound = 1;
        document.getElementById("totalRounds").innerText = totalRounds;
        document.getElementById("currentRound").innerText = currentRound;
    } else {
        alert("Please enter a valid odd number of rounds.");
    }
});

rollButton.addEventListener("click", function () {
    console.log("Dice is rolling...");
    let diceroll = Math.floor(Math.random() * 6) + 1;
    console.log(diceroll);

    if (currentRound <= 3) {
        if (currentRound === 1) {
            p1score += diceroll;
            document.getElementById("p1score").innerText = p1score;
        } else {
            p2score += diceroll;
            document.getElementById("p2score").innerText = p2score;
        }
        currentRound++;
        document.getElementById("currentRound").innerText = currentRound;
    } else {
        endRound();
    }
});

function endRound() {
    roundsPlayed++;

    if (p1score > p2score) {
        p1rounds++;
        document.getElementById("p1rounds").innerText = p1rounds;
    } else if (p2score > p1score) {
        p2rounds++;
        document.getElementById("p2rounds").innerText = p2rounds;
    }

    if (roundsPlayed < totalRounds) {
        resetRound();
    } else {
        endGame();
    }
}

function resetRound() {
    currentRound = 1;
    document.getElementById("currentRound").innerText = currentRound;
    p1score = 0;
    p2score = 0;
    document.getElementById("p1score").innerText = p1score;
    document.getElementById("p2score").innerText = p2score;
}

function endGame() {
    let winner = p1rounds > p2rounds ? "Player 1" : "Player 2";
    alert("Game Over! " + winner + " wins!");
    location.reload(); // Reload the page to start a new game
}
