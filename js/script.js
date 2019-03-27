// const fill = document.querySelector('.fill');
// const empties = document.querySelectorAll('.empty');
//
// //Fill Listeners
// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);
// //Loop through empties and call drag events
// for (const empty of empties) {
//     empty.addEventListener('dragover', dragOver);
//     empty.addEventListener('dragenter', dragEnter);
//     empty.addEventListener('dragleave', dragLeave);
//     empty.addEventListener('drop', dragDrop);
// }
//
// //Drag Functions
// function dragStart() {
//     this.className += ' hold';
//     setTimeout(() => this.className = 'invisible', 0);
// }
//
// function dragEnd() {
//     this.className = 'fill';
// }
//
// function dragOver(e) {
//     e.preventDefault();
// }
//
// function dragEnter(e) {
//     e.preventDefault();
//     this.className += ' hovered';
// }
//
// function dragLeave() {
//     this.className = 'empty';
// }
//
// function dragDrop() {
//     this.className = 'empty';
//     this.append(fill);
// }
let cardsValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cardIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let suits = ['diamonds', 'hearts', 'clubs', 'spades'];
let amounts = {
    total: 52,
    dealDeck: 24,
    deal: 1,
    decks: [1, 2, 3, 4, 5, 6, 7],
};
let colors = [0, 1]; // black and red
let deck = [
    {color: 1, suit: 'diamond', number: 'A'},
    {color: 1, suit: 'diamond', number: '2'},
    {color: 1, suit: 'diamond', number: '3'},
    {color: 1, suit: 'diamond', number: '4'},
    {color: 1, suit: 'diamond', number: '5'},
    {color: 1, suit: 'diamond', number: '6'},
    {color: 1, suit: 'diamond', number: '7'},
    {color: 1, suit: 'diamond', number: '8'},
    {color: 1, suit: 'diamond', number: '9'},
    {color: 1, suit: 'diamond', number: '10'},
    {color: 1, suit: 'diamond', number: 'J'},
    {color: 1, suit: 'diamond', number: 'Q'},
    {color: 1, suit: 'diamond', number: 'K'},

    {color: 1, suit: 'hearts', number: 'A'},
    {color: 1, suit: 'hearts', number: '2'},
    {color: 1, suit: 'hearts', number: '3'},
    {color: 1, suit: 'hearts', number: '4'},
    {color: 1, suit: 'hearts', number: '5'},
    {color: 1, suit: 'hearts', number: '6'},
    {color: 1, suit: 'hearts', number: '7'},
    {color: 1, suit: 'hearts', number: '8'},
    {color: 1, suit: 'hearts', number: '9'},
    {color: 1, suit: 'hearts', number: '10'},
    {color: 1, suit: 'hearts', number: 'J'},
    {color: 1, suit: 'hearts', number: 'Q'},
    {color: 1, suit: 'hearts', number: 'K'},

    {color: 0, suit: 'clubs', number: 'A'},
    {color: 0, suit: 'clubs', number: '2'},
    {color: 0, suit: 'clubs', number: '3'},
    {color: 0, suit: 'clubs', number: '4'},
    {color: 0, suit: 'clubs', number: '5'},
    {color: 0, suit: 'clubs', number: '6'},
    {color: 0, suit: 'clubs', number: '7'},
    {color: 0, suit: 'clubs', number: '8'},
    {color: 0, suit: 'clubs', number: '9'},
    {color: 0, suit: 'clubs', number: '10'},
    {color: 0, suit: 'clubs', number: 'J'},
    {color: 0, suit: 'clubs', number: 'Q'},
    {color: 0, suit: 'clubs', number: 'K'},

    {color: 0, suit: 3, number: 1},
    {color: 0, suit: 3, number: 2},
    {color: 0, suit: 3, number: 3},
    {color: 0, suit: 3, number: 4},
    {color: 0, suit: 3, number: 5},
    {color: 0, suit: 3, number: 6},
    {color: 0, suit: 3, number: 7},
    {color: 0, suit: 3, number: 8},
    {color: 0, suit: 3, number: 9},
    {color: 0, suit: 3, number: 10},
    {color: 0, suit: 3, number: 11},
    {color: 0, suit: 3, number: 12},
    {color: 0, suit: 3, number: 13},
];

let dealDeck = [];
let deal = [];


// shuffle full deck of cards
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// painting card

function drawCard(color, suit, cardValue) {
    let card = document.createElement("DIV");
    card.classList.add("card");
    switch (color) {
        case 0:
            card.classList.add("black-suit");
            break;
        case 1:
            card.classList.add("red-suit");
            break;
    }
    card.innerHTML = "<span class='top-sign'>" + cardValue + "</span><span class='middle-sign'>"
        + suit + "</span><span class='bottom-sign'>" + cardValue + "</span>";
    document.getElementById("main-deck").appendChild(card);
}

function createDeck() {
    dealDeck = deck.slice(0, amounts.dealDeck);
    document.getElementById("main-deck").appendChild(dealDeck);
}


function startGame() {
    shuffle();
    drawCard(1, 'diomand', 'A');
}

addEventListener('load', startGame);

