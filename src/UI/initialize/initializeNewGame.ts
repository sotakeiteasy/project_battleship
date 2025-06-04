export function initializeNewGame() {
  const newRoundBtn = document.querySelector(".newRoundBtn") as HTMLElement;
  newRoundBtn.classList.add("active");

  const randomPlacementBtn = document.querySelector(".placeShipsBtn") as HTMLElement;
  randomPlacementBtn.classList.add("active");

  const playerTwoBoard = document.querySelector(".playerTwo") as HTMLElement;
  playerTwoBoard.classList.add("startShadow");

  const playerOneBoard = document.querySelector(".playerOne") as HTMLElement;
  playerOneBoard.classList.remove("startShadow");

  const display = document.querySelector(".display") as HTMLElement;
  display.textContent = "Place your ships";

  const endMessage = document.querySelector(".endGameBlock") as HTMLElement;
  endMessage.classList.remove("endGameSize");
}
