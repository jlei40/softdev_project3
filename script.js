let die = [0, 0, 0];

let diceroll1 = true;
let diceroll2 = false;
let diceroll3 = false;
let firstrolling = true;

let p1score = 0;
let p2score = 0;
let p1rounds = 0;
let p2rounds = 0; 

let currentRound = 1;
let totalRounds;
let currentPlayer;

let bothPlayers = 0; 
let firstPlayerRolled = false;
let secondPlayerRolled = false;
let gameStarted = false;


function startGame() {
    gameStarted = true;
    document.getElementById('rollDiceBtn').removeAttribute('disabled');
    totalRounds = prompt('Enter an odd number of rounds:');
    if (totalRounds % 2 == 0) prompt('Enter an odd number of rounds:');
    alert("Roll to see who goes first!");
    updateUI();
}


function rollDice(){
    
    if (!gameStarted){
        alert("Please start the game first!"); 
    }
    else if (firstrolling && !firstPlayerRolled){
        for (let i in die){
            die[i] = Math.floor(Math.random() * 6) + 1;
            p1score += die[i]; 
        }
        firstPlayerRolled = true;
    } else if (firstrolling && !secondPlayerRolled){
        for (let i in die){
            die[i] = Math.floor(Math.random() * 6) + 1;
            p2score += die[i]; 
        }

        updateUI();

        secondPlayerRolled = true; 

        if (p1score > p2score){
            currentPlayer = 1; 
            alert("Player One with " + p1score + " beats Player Two with " + p2score + " and goes first!");
        } else if (p2score > p1score){
            currentPlayer = 2;
            alert("Player Two with " + p2score + " beats Player One with " + p1score + " and goes first!");
        } else if (p1score == p2score){
            alert("Player Two with " + p2score + " ties Player One with " + p1score + "! Reroll to see who goes first!");
            firstPlayerRolled = false;
            secondPlayerRolled = false;
        }

        p1score = 0;
        p2score = 0; 

    } 


    else if (diceroll1){
        for (let i in die){
            die[i] = Math.floor(Math.random() * 6) + 1;
        }
        diceroll1 = false; 
        diceroll2 = true; 
    }

    else if (diceroll2){
        let max = 0; 
        let maxindex = 0; 
        for (let i in die){
            if (die[i] >= max){
                max = die[i];
                maxindex = i; 
            }
        }

        for (let i in die){
            if (i != maxindex){
                die[i] = Math.floor(Math.random() * 6) + 1;
            }
        }

        diceroll2 = false;
        diceroll3 = true;
    }

    else if (diceroll3){
        let min = 7;
        let minindex = 0;
        for (let i in die){
            if (die[i] <= min){
                min = die[i];
                minindex = i; 
            }
        }

        for (let i in die){
            if (i == minindex){
                die[i] = Math.floor(Math.random() * 6) + 1;
            }
        }

        for (let i in die){
            if (currentPlayer == 1){
                p1score += die[i];
            }

            else {
                p2score += die[i];
            }
        }

        updateUI();

        if (currentPlayer == 1){
            currentPlayer = 2;
        } else currentPlayer = 1; 

        bothPlayers++; 

        if (bothPlayers == 2){
            if (p1score > p2score){
                p1rounds++;
                alert("Player One with " + p1score + " beats Player Two with " + p2score + "!");

            }
            else if (p2score > p1score){
                p2rounds++;
                alert("Player Two with " + p2score + " beats Player One with " + p1score + "!");
            }
            else if (p1score == p2score){
                alert("Player Two with " + p2score + " ties Player One with " + p1score + "! Restarting the round!");
                currentRound--; 
            }

            p1score = 0; 
            p2score = 0;
            bothPlayers = 0; 
            currentRound++; 
        }
        
        diceroll3 = false;
        diceroll1 = true; 
    }

    updateUI();

    if (currentRound > totalRounds){
        endGame(); 
    }
}

function endGame(){
    if (p1rounds > p2rounds){
        alert("Player One who won " + p1rounds + " Rounds beats Player Two who won " + p2rounds + " and Wins!");
    } else alert("Player Two who won " + p2rounds + " Rounds beats Player One who won " + p1rounds + " and Wins!");;

    die = [0, 0, 0];

    diceroll1 = true;
    diceroll2 = false;
    diceroll3 = false;
    firstrolling = true;

    p1score = 0;
    p2score = 0;
    p1rounds = 0;
    p2rounds = 0; 
    currentRound = 1;
    bothPlayers = 0; 
    firstPlayerRolled = false;
    secondPlayerRolled = false;
    gameStarted = false;

    document.getElementById('rollDiceBtn').setAttribute('disabled', 'disabled');
    updateUI();
}

function updateUI(){
    document.getElementById('die0').innerText = die[0];
    document.getElementById('die1').innerText = die[1];
    document.getElementById('die2').innerText = die[2];

    document.getElementById('p1score').innerText = p1score;
    document.getElementById('p1rounds').innerText = p1rounds;
    document.getElementById('p2score').innerText = p2score;
    document.getElementById('p2rounds').innerText = p2rounds;

    document.getElementById('currentRound').innerText = currentRound;
    document.getElementById('totalRounds').innerText = totalRounds;
    document.getElementById('currentPlayer').innerText = currentPlayer;
}

