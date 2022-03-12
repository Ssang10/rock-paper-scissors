const player = document.querySelector(".player-container .play");
const comp = document.querySelector(".computer-container .play");

const play = (move) => {
  switch (move) {
    case "rock":
      player.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>";
      break;
    case "paper":
      player.innerHTML = "<i class='fa-solid fa-hand'></i>";
      break;
    case "scissor":
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
