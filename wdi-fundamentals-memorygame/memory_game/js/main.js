console.log ('Up and running!');

// console.log('Diplay card one is ' + cardOne + '.')
var i= 0;
var x=0;

//var element = document.getElementById('')
//var cardsElement = document.getElementsByTagName('img');
//var amount = cards.length;

var cards = [
    {
        suit: 'diamonds',
        rank: 'king',
        cardImage: 'images/king-of-diamonds.png',
    },
    {
        suit: 'diamonds',
        rank: 'queen',
        cardImage: 'images/queen-of-diamonds.png',
    },   
    {
        suit: 'hearts',
        rank: 'king',
        cardImage: 'images/king-of-hearts.png',
    },
    {
        suit: 'hearts',
        rank: 'queen',
        cardImage: 'images/queen-of-hearts.png',
    }
    ];

var cardsInPlay = [];

function checkForMatch() {
    let x = cardsInPlay.length;
    if (x > 1) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('Matching card! (only in testing)');
        } else {
            alert('Try again!');
        }
    }    
};

function flipcard() {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src',cards[cardId].cardImage);
    var flipped = cards[cardId].rank;
    cardsInPlay.push(flipped);
    console.log("User flipped "+ flipped);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
// let x = cardsInPlay.length;

    checkForMatch();
}

function createBoard() {
    for (i=0; i < 4; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipcard);
    }
}

function reset() {
    for (i=0; i < 4; i++) {
        var x = document.getElementById('game-board');
        x.innerHTML = null;
    }
    createBoard();
};

    var button = document.getElementById('reset');
    button.onclick = function() {
        reset();
    };

createBoard();



//cardsInPlay.push('queen','queen');
//flipcard('queen'), flipcard('queen');
//console.log(cardsInPlay);

/*
element.onclick = function(val) {
    switch (val) {
    case val:
    cardsInPlay.push(card);
    }
};
*/