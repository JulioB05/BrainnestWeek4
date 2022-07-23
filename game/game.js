const handOptions = {
    "rock": "./images/Rock.png",
    "paper": "./images/Paper.png",
    "scissors": "./images/Scissors.png"
}

let scoreWins = 0;
let scoreTies = 0;
let scoreLosses = 0;


const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];

    pickComputerHand(hand);

};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]

    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
        setScoreLosses(scoreLosses + 1);
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScoreWins(scoreWins + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
        setScoreTies(scoreTies + 1);
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScoreWins(scoreWins + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        setScoreLosses(scoreLosses + 1);
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
        setScoreTies(scoreTies + 1);
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
        setScoreTies(scoreTies + 1);
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        setScoreLosses(scoreLosses + 1);
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScoreWins(scoreWins + 1);
    }
};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScoreWins = (newScore) => {
    scoreWins = newScore;
    document.querySelector(".scoreWins h1").innerText = newScore;

    if (scoreWins == 5) {
        alert("YOU WIN THE GAME!!");
        resetScore();
    }
}

const setScoreTies = (newScore) => {
    scoreTies = newScore;
    document.querySelector(".scoreTies h1").innerText = newScore;

    if (scoreTies == 5) {
        alert("NOBODY WINS!!");
        resetScore();
    }
}
const setScoreLosses = (newScore) => {
    scoreLosses = newScore;
    document.querySelector(".scoreLosses h1").innerText = newScore;

    if (scoreLosses == 5) {
        alert("YOU LOSE THE GAME!!");
        resetScore();
    }
}

const resetScore = () => {
    let newGame = 0;
    document.querySelector(".scoreWins h1").innerText = newGame;
    document.querySelector(".scoreTies h1").innerText = newGame;
    document.querySelector(".scoreLosses h1").innerText = newGame;

    scoreWins = 0;
    scoreTies = 0;
    scoreLosses = 0;
}
