let rounds = prompt("Please enter the number of rounds");
let roundsplayed = 0; 
let p1score = 0; 
let p2score = 0;

let p1active = false; 
let p2active = false;



while (rounds % 2 == 0){
    rounds = prompt("Please enter an odd number of rounds");
}


document.querySelector(".button_check").addEventListener("click", function () {
    console.log("Dice is rolling...");
    let diceroll = Math.round(Math.random() * 6) + 1; 
    console.log(diceroll);
    roundsplayed++; 
    if (p1active){
        p1score += diceroll; 
    } else {
        p2score += diceroll; 
    }
});

while (roundsplayed < rounds){
    if (p1active){
        p2active = true;
        p1active = false;
    } else {
        p1active = false;
        p2active = true; 
    }
}


