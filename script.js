

//function that returns number inclusive of min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Psuedocode
// Confirm to start the game play blackjack
// Player gets a random number between 4-21 (replicates 2 cards)
var playerNumber = 0;
var dealerNumber = 0;

function assignInitialPNo() {
    playerNumber = playerNumber + getRndInteger(4, 21);
}


// Dealer gets a random number between 2-11 (replicates 1 card)
function assignInitialDNo() {
    dealerNumber = dealerNumber + getRndInteger(2,11)
}

// User will see own number and dealer number
//If number is equal to 21 then player wins

//function to check if blackjack or bust
function blackJack (number) {
    console.log(number);
    if (number === 21) {
        alert(`You have ${playerNumber} - YOU WIN! :)`)
        return;
    } else if (number > 21) {
        alert(`You have ${playerNumber} - YOU LOST! :(`)
        return;
    } else {
        return;
    }
}

assignInitialDNo();
assignInitialPNo();
blackJack(playerNumber);

// Player can decide to hit or stay
let playerDecision = () => confirm(`You have been dealt ${playerNumber}, the dealer has been dealt ${dealerNumber}. Press ok to hit or cancel to stay`);

if (playerDecision() == true) {
    //Check that 
    hit();
    blackJack(playerNumber);
} else {
    stay();
}
// If hit add a random number between 2-11 to existing number

//function to add card if press ok to hit

function hit() {
        playerNumber = playerNumber + getRndInteger(2, 11);
        };

// if {
//     if (dealerNumber < 17) {
//         dealerNumber = dealerNumber + getRndInteger(2, 11)
//     } else {

//     }
// }
// If stay then stop and evaluate dealer number

function stay() {

    while (dealerNumber < 17) {
        assignInitialDNo();
        alert(`The dealer has ${dealerNumber}`);
    }
    if (dealerNumber > 21) {
        alert(`You have ${playerNumber} and the dealer has ${dealerNumber}. YOU WIN! :)`);
    } else {
        if (playerNumber > dealerNumber) {
            alert(`You have ${playerNumber} and the dealer has ${dealerNumber}. YOU WIN! :)`)
        } else if (playerDecision < dealerNumber) {
            alert(`You have ${playerNumber} and the dealer has ${dealerNumber}. YOU LOSE! :(`)
        } else {
            alert(`You have ${playerNumber} and the dealer has ${dealerNumber}. IT'S A TIE!`)
        }
    }
}
// If dealer number is less than 17, then add random number between 2-11 to existing number
// Evaluate again and repeat if dealer number is less than 17
// If dealer number is more than 17 then stop
// If player or dealer number is more than 21 then they lose
// If both stop and under 21 then compare and see which has the closer number to 21
