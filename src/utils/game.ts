import Player from "../classes/player";
import { drawShips } from "../UI/utils/drawShips";
import { Round } from "../UI/round";
import { initializeNewGame } from "../UI/initialize/initializeNewGame";

const playerOne = new Player("real");
const playerTwo = new Player("computer");

export function startGame() {
  playerOne.board.cleanBoard();
  playerTwo.board.cleanBoard();

  playerOne.board.placeShips(playerOne, playerOne.createShips());
  playerTwo.board.placeShips(playerTwo, playerOne.createShips());

  drawShips(playerOne, playerTwo);

  initializeNewGame();
}

export function startRound() {
  Round(playerOne, playerTwo);
}

export function randomPlacement() {
  const playerOneShips = playerOne.createShips();
  playerOne.board.cleanBoard();
  playerOne.board.placeShips(playerOne, playerOneShips);
  drawShips(playerOne, playerTwo);
}
