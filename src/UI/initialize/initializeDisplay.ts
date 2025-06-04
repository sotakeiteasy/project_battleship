import { createGameBoard } from "../utils/createGameboard";
import { startGame, startRound, randomPlacement } from "../../utils/game";

export function initializeDisplay() {
  createGameBoard("player-one-board");
  createGameBoard("player-two-board");

  const newRoundBtn = document.querySelector(".newRoundBtn") as HTMLElement;
  newRoundBtn.addEventListener("click", startRound);

  const newGameBtn = document.querySelector(".newGameBtn") as HTMLElement;
  newGameBtn.addEventListener("click", startGame);

  const randomPlacementBtn = document.querySelector(".placeShipsBtn") as HTMLElement;
  randomPlacementBtn.addEventListener("click", randomPlacement);

  startGame();
}
