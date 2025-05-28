let playerName = prompt("Enter your name: ");
let playerChips = prompt("Chips: (Only Numbers!)");
let player = {
    name: playerName,
    chips: parseInt(playerChips) 
}

let cards = [];
let sum = 0;

let isBlackJack = false;
let isAlive = false;

let dealerCards = [];
let dealerSum = 0;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let dealerEl = document.getElementById("dealer-el");
let dealerSumEl = document.getElementById("dealer-sum-el");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
    let random = Math.random() * 13;
    let number = Math.floor(random) + 1;
    if (number === 1) {
        return 11;
    } else if (number > 10) {
        return 10;
    } else {
        return number;
    }
}

function startGame() {
    if(player.chips > 0){

        isAlive = true;
        isBlackJack = false;
        let firstNumber = getRandomCard();
        let secondNumber = getRandomCard();
        cards = [firstNumber, secondNumber];
        sum = firstNumber + secondNumber;

        let dealerFirst = getRandomCard();
        let dealerSecond = getRandomCard();
        dealerCards = [dealerFirst, dealerSecond];
        dealerSum = dealerFirst + dealerSecond;

        renderGame();
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";

    for (let j = 0; j < cards.length; j += 1) {
        cardEl.textContent += cards[j] + " ";
    }

    if (sum < 21) {
        message = "Do you want to continue?";
    } else if (sum === 21) {
        message = "You've won the game!";
        isBlackJack = true;
        player.chips = player.chips * 1.2 + player.chips;
        player.chips = Math.floor(player.chips);
        playerEl.textContent = player.name + ": $ " + player.chips;
        dealerPlay();
    } else {
        message = "You've lost the game!";
        isAlive = false;
        player.chips = player.chips - player.chips * 0.7;
        player.chips = Math.floor(player.chips);
        playerEl.textContent = player.name + ": $ " + player.chips;
        if(player.chips <= 0){
            alert("You're out of chips! Refresh the page to add more chips to continue playing.")
            isAlive = false
        }
        dealerPlay();
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && isBlackJack === false && player.chips > 0) {
        let Card = getRandomCard();
        cards.push(Card);
        sum += Card;
        renderGame();

        if (sum >= 21) {
            dealerPlay();
        }
    }
}

function dealerPlay() {
    dealerEl.textContent = "Dealer Cards: ";
    dealerSumEl.textContent = "";

    for (let k = 0; k < dealerCards.length; k++) {
        dealerEl.textContent += dealerCards[k] + " ";
    }

    while (dealerSum < 17) {
        let card = getRandomCard();
        dealerCards.push(card);
        dealerSum += card;
        dealerEl.textContent += card + " ";
    }

    dealerSumEl.textContent = "Dealer Sum: " + dealerSum;

    if (sum <= 21) {
        if (dealerSum > 21 || sum > dealerSum) {
            message = "You win!";
            player.chips = player.chips * 0.8 + player.chips;
        } else if (sum < dealerSum) {
            message = "Dealer wins!";
            player.chips = player.chips - player.chips * 0.7;
        } else {
            message = "It's a draw!";
        }

        player.chips = Math.floor(player.chips);
        playerEl.textContent = player.name + ": $ " + player.chips;
        messageEl.textContent = message;
        isAlive = false;
    }
}

function stand() {
    if (isAlive === true && isBlackJack === false) {
        isAlive = false
        dealerPlay()
    }
}

function cashOut(){
    if(player.chips > 0){
        player.chips = 0
        playerEl.textContent = player.name + ": $ " + player.chips;
        if(player.chips <= 0){
            alert("You've Cashed Out! Refresh the page to add more chips and continue playing.")
            isAlive = false
        }
    }else{
        alert("You're out of chips!.")
        isAlive = false
    }
}