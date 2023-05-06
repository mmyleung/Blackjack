

//function that returns number inclusive of min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(`You have been dealt: ${randomPlayerNumber}`);
if (randomPlayerNumber === 21) {
    console.log(`YOU WIN!`);
}

var randomDealerNumber = getRndInteger(2, 11);

console.log(`The dealer has been dealt: ${randomDealerNumber}`);


// Psuedocode
// Confirm to start the game play blackjack
// Player gets a random number between 4-21 (replicates 2 cards)
var playerNumber = getRndInteger(4, 21);
// Dealer gets a random number between 2-11 (replicates 1 card)
var dealerNumber = getRndInteger(2,11)
// User will see own number and dealer number
`You have been dealt ${playerNumber}, the dealer has been dealt ${dealerNumber}. Press ok to hit or cancel to stay`
// Player can decide to hit or stay
// If hit add a random number between 2-11 to existing number
// If stay then stop and evaluate dealer number
// If dealer number is less than 17, then add random number between 2-11 to existing number
// Evaluate again and repeat if dealer number is less than 17
// If dealer number is more than 17 then stop
// If player or dealer number is more than 21 then they lose
// If both stop and under 21 then compare and see which has the closer number to 21
