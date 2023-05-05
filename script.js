var randomCard = getRndInteger(4, 21);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(randomCard);