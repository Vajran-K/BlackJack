let firstNumber = 11
let secondNumber = 10
let sum = firstNumber + secondNumber
let hasBlackJack = false
let isAlive = true

let message = ""

if(sum < 21){
    message = "Do you want to continue? :)"
}else if(sum === 21){
    message = "Yeahhhhh! You've won!!!!!!! ;)"
    hasBlackJack = true
}else{
    message = "Opps... You've lost the game :("
    isAlive = false
}

console.log(message)
