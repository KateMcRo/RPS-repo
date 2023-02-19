// Button
const startButton = document.querySelector("#start");

// Selection Options
const rockOption = "R"
const paperOption = "P"
const scissorOption = "S"

const computerOptions = ["R", "P", "S"]

// User Selections
var userSelection = "";

// Computer Selections
var computerSelection = "";

// Random Code Selections
function computerMath () {
    var randomSelection = Math.floor(Math.random() * 3)
    var index = randomSelection
    var randomLetter = computerOptions[index]
    return computerSelection += randomLetter
}

// Selection Comparisons 

// Win/Loss Reporting

// Prompt
function prompt1 () {
    const selection = prompt("Choose rock, paper, or scissors by typing the corresponding first letter of your selection:") // collects user response
    return userSelection += selection // adds user selection to emtpy string
}

// Game Flow
function gameFlow () {
    userSelection = ""
    prompt1 ()
    console.log(userSelection)
    if (userSelection.toUpperCase() === rockOption || userSelection.toUpperCase() === paperOption || userSelection.toUpperCase() === scissorOption) {
    } else { alert("Selections must be 'R', 'P', or 'S'. Please try again.") }
    computerMath ()
    console.log(computerSelection)
}




// Event Listener
startButton.addEventListener("click", gameFlow)