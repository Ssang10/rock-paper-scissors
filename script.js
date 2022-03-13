const player = document.querySelector(".player-container .play");
const comp = document.querySelector(".computer-container .play");
const playerRock = document.querySelector(
  ".buttons-container .fa-hand-back-fist"
);
const playerPaper = document.querySelector(".buttons-container .fa-hand");
const playerScissors = document.querySelector(
  ".buttons-container .fa-hand-scissors"
);
const message = document.querySelector(".message-bar p");
const playerScore = document.querySelector(".player-container .score-card");
const compScore = document.querySelector(".computer-container .score-card");

const win = () => {
  message.innerHTML = "win";
  playerScore.innerHTML++;
};

const lose = () => {
  message.innerHTML = "Lose";
  compScore.innerHTML++;
};

const draw = () => {
  message.innerHTML = "Draw";
};

const gameResult = (playerMove, compMove) => {
  if (
    (playerMove === "rock" && compMove === "scissors") ||
    (playerMove === "paper" && compMove === "rock") ||
    (playerMove === "scissors" && compMove === "paper")
  ) {
    win();
  } else if (
    (playerMove === "scissors" && compMove === "rock") ||
    (playerMove === "rock" && compMove === "paper") ||
    (playerMove === "paper" && compMove === "scissors")
  ) {
    lose();
  } else {
    draw();
  }
};

const play = (move) => {
  let playerMove;

  switch (move) {
    case "rock":
      player.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      playerMove = "rock";
      break;
    case "paper":
      player.innerHTML = "<i class='fa-solid fa-hand'></i>";
      playerMove = "paper";
      break;
    case "scissors":
      player.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>";
      playerMove = "scissors";
      break;
  }

  gameResult(playerMove, compPlay());
};

const compPlay = () => {
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      comp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      return "rock";
    case 2:
      comp.innerHTML = "<i class='fa-solid fa-hand'></i>";
      return "paper";
    case 3:
      comp.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>";
      return "scissors";
  }
};

const main = () => {
  playerRock.addEventListener("click", () => play("rock"));

  playerPaper.addEventListener("click", () => play("paper"));

  playerScissors.addEventListener("click", () => play("scissors"));
};

main();
