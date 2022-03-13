const player = document.querySelector(".player-container .play");
const comp = document.querySelector(".computer-container .play");
const playerRock = document.querySelector(
  ".buttons-container .fa-hand-back-fist"
);
const playerPaper = document.querySelector(".buttons-container .fa-hand");
const playerScissors = document.querySelector(
  ".buttons-container .fa-hand-scissors"
);

const play = (move) => {
  switch (move) {
    case "rock":
      player.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      break;
    case "paper":
      player.innerHTML = "<i class='fa-solid fa-hand'></i>";
      break;
    case "scissors":
      player.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>";
      break;
  }

  compPlay();
};

const compPlay = () => {
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      comp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      break;
    case 2:
      comp.innerHTML = "<i class='fa-solid fa-hand'></i>";
      break;
    case 3:
      comp.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>";
      break;
  }
};

const main = () => {
  playerRock.addEventListener("click", () => play("rock"));

  playerPaper.addEventListener("click", () => play("paper"));

  playerScissors.addEventListener("click", () => play("scissors"));
};

main();
