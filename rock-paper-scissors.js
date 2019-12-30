// Randomises rock, paper and scissors
function computerPlay() {
	let computerChoice = [ 'rock', 'paper', 'scissors' ];
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// Declares win/loss
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock') {
		if (computerSelection === 'rock') {
			return 'Draw';
		} else if (computerSelection === 'paper') {
			return 'Lose';
		} else {
			return 'Win';
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'rock') {
			return 'Win';
		} else if (computerSelection === 'paper') {
			return 'Draw';
		} else {
			return 'Lose';
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') {
			return 'Lose';
		} else if (computerSelection === 'paper') {
			return 'Win';
		} else {
			return 'Draw';
		}
	} else {
		return 'Huh?';
	}
}

// Keeps track of game
function game() {
	for (
		let playerScore = 0, computerScore = 0;
		playerScore + computerScore < 5 && (computerScore || playerScore) < 3;

	) {
		let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
		let computerSelection = computerPlay();
		let results = playRound(playerSelection, computerSelection);

		if (results === 'Win') {
			playerScore++;
			console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
		} else if (results === 'Lose') {
			computerScore++;
			console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
		} else {
			console.log(`Draw! ${playerSelection} draws with ${computerSelection}.`);
		}
		console.log(`Score is ${playerScore} : ${computerScore}`);
	}
}
