let initialHomeScore = document.getElementById("home-score-board")
let homescore = 0
let initialGuestScore = document.getElementById("guest-score-board")
let guestscore = 0

function homePlusOne() {
    homescore += 1
    initialHomeScore.textContent = homescore
}

function homePlusTwo() {
    homescore += 2
    initialHomeScore.textContent = homescore
}

function homePlusThree() {
    homescore += 3
    initialHomeScore.textContent = homescore
}
 // Guest scoreboard functions
function guestPlusOne() {
    guestscore += 1
    initialGuestScore.textContent = guestscore
}

function guestPlusTwo() {
    guestscore += 2
    initialGuestScore.textContent = guestscore
}

function guestPlusThree() {
    guestscore += 3
    initialGuestScore.textContent = guestscore
}

function newGame() {
    guestscore = 0
    homescore = 0
    initialGuestScore.textContent = 0
    initialHomeScore.textContent = 0
}