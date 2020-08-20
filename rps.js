function randomizeInteger(min, max) {
    if(max == null) {
      max = (min == null ? Number.MAX_SAFE_INTEGER : min);
        min = 0;
  }

  min = Math.ceil(min);  // inclusive min
  max = Math.floor(max); // exclusive max

    if(min > max - 1) {
      throw new Error("Incorrect arguments.");
  }

  return min + Math.floor((max - min) * Math.random());
}

function computerPlay() {
    let r = randomizeInteger(0, 3)
    if (r == 0) return "rock"
    else if (r == 1) return "paper"
    else if (r == 2) return "scissors"
}

function indexOfRPS(rps) {
    if (rps == "rock") return 0
    else if (rps == "paper") return 1
    else if (rps == "scissors") return 2
    return null
}

function alphaBeatsBeta(alpha, beta) {
    return (indexOfRPS(beta) + 1) % 3 === indexOfRPS(alpha)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toString().toLowerCase()
    if (indexOfRPS(playerSelection) === null) return `INVALID INPUT`
    else if (playerSelection == computerSelection) return `DRAW! ${playerSelection} vs. ${computerSelection}`
    else if (alphaBeatsBeta(playerSelection, computerSelection)) return `YOU WON! ${playerSelection} beats ${computerSelection}`
    else return `YOU LOSE! ${playerSelection} got beaten by ${computerSelection}`
}

for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose one of(Rock, Paper, Scissors):")
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}
