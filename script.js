const playerContainer = document.querySelector(".player-container");

const play = (move) => {
  switch (move) {
    case "rock":
      playerContainer.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      break;
    case "paper":
      playerContainer.innerHTML = "<i class='fa-solid fa-hand'></i>";
      break;
    case "scissor":
      playerContainer.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>";
  }
};
