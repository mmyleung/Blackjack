

//function that returns number inclusive of min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Psuedocode
// Confirm to start the game play blackjack
// Player gets a random number between 4-21 (replicates 2 cards)
var playerNumber = getRndInteger(4, 21);
// Dealer gets a random number between 2-11 (replicates 1 card)
var dealerNumber = getRndInteger(2,11)
// User will see own number and dealer number
//If number is equal to 21 then player wins

//function to check if blackjack or bust
function blackJack (number) {
    if (number === 21) {
        alert(`You have ${playerNumber} - YOU WIN! :)`)
    } else if (number > 21) {
        alert(`You have ${playerNumber} - YOU LOST! :(`)
    }
}

blackJack(playerNumber);

// Player can decide to hit or stay
// If hit add a random number between 2-11 to existing number

//function to add card if press ok to hit

function hit (){};
if (confirm(`You have been dealt ${playerNumber}, the dealer has been dealt ${dealerNumber}. Press ok to hit or cancel to stay`)) {
    playerNumber = playerNumber + getRndInteger(2, 11);
    blackJack(playerNumber);
    }
else  {
    if (dealerNumber < 17) {
        dealerNumber = dealerNumber + getRndInteger(2, 11)
    } else {

    }
}
// If stay then stop and evaluate dealer number
// If dealer number is less than 17, then add random number between 2-11 to existing number
// Evaluate again and repeat if dealer number is less than 17
// If dealer number is more than 17 then stop
// If player or dealer number is more than 21 then they lose
// If both stop and under 21 then compare and see which has the closer number to 21
