let firstNumber = 11
let secondNumber = 10
let cards = [firstNumber, secondNumber]
let sum = firstNumber + secondNumber
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if(sum < 21){
        message = "Do you want to continue?"
    }else if(sum === 21){
        message = "You've won the game!"
        hasBlackJack = true
    }else{
        message = "You've lost the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard(){
    console.log("New card is drawn!")
    let Card = 6
    sum += Card
    renderGame()
}
