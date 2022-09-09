
let player = {
    name: "Per",
    chips: 145
}
let sum = 0
let cards = []
let hasBlackJack = false
message = ""
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
// let sumEl = document.querySelector("#sum-el")


playerEl.textContent = player.name + " $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function renderGame() {
        if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjacked!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
    // console.log("Draw a new card from the deck")
}

