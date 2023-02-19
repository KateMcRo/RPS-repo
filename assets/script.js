// Elements
const startButton = document.getElementById("start");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const tiesEl = document.getElementById("ties");
const gamesPlayedEl = document.getElementById("gamesPlayed");

// Selection Options
const rockOption = "R"
const paperOption = "P"
const scissorOption = "S"

const computerOptions = ["R", "P", "S"]

// Scoreboard Variables
var gamesPlayed = 0
var userWins = 0
var userLosses = 0
var userTies = 0


// User Selections
var userSelection = "";

// Computer Selections
var computerSelection = "";

// Random Code Selections
function computerMath () {
    computerSelection = ""
    var randomSelection = Math.floor(Math.random() * 3)
    var index = randomSelection
    var randomLetter = computerOptions[index]
    return computerSelection += randomLetter
}

// Selection Comparisons 
function checkWins () {
    if (userSelection === "R" && computerSelection === "S") {
        return true
    }
    if (userSelection === "P" && computerSelection === "R") {
        return true
    }
    if (userSelection === "S" && computerSelection === "P") {
        return true
    }   
}

function checkLosses () {
    if (!checkWins() && userSelection !== computerSelection) {
        return true
    }
}

function checkTies () {
    if (userSelection === computerSelection) {
        return true
    }
}

// Win/Loss Reporting
function resultAlert () {
    if (checkWins()) {
        return alert("You Win!")
    }
    if (checkLosses()) {
        return alert("Better luck next time, sport.")
    }
    if (checkTies()) {
        return alert("You're as smart as a random number generator!")
    }
}

function updateScoreboard () {
    if (checkWins()) {
        return userWins = userWins + 1
    }
    if (checkLosses()) {
        return userLosses = userLosses +1
    }
    if (checkTies()) {
        return userTies = userTies +1
    }
}


// Prompt
function prompt1 () {
    const selection = prompt("Choose rock, paper, or scissors by typing the corresponding first letter of your selection:") // collects user response
    return userSelection += selection // adds user selection to emtpy string
}

// Game Flow
function gameFlow () {
    userSelection = ""
    prompt1 ()
    userSelection = userSelection.toUpperCase()
    if (userSelection === rockOption || userSelection === paperOption || userSelection === scissorOption) {
        gamesPlayed += 1
    } else {return alert("Selections must be 'R', 'P', or 'S'. Please try again.") }
    computerMath ()
    checkWins ()
    checkLosses ()
    checkTies ()
    resultAlert ()
    updateScoreboard () 
    gamesPlayedEl.innerText = `Games Played: ${gamesPlayed}`
    winsEl.innerText = `Wins: ${userWins}`
    lossesEl.innerText = `Losses: ${userLosses}`
    tiesEl.innerText = `Ties: ${userTies}`
}

// Event Listener
startButton.addEventListener("click", gameFlow)
