import Player from "../classes/player";
import { drawShips } from "../UI/utils/drawShips";
import { Round } from "../UI/round";
import { initializeNewGame } from "../UI/initialize/initializeNewGame";
// import Ship from "../classes/ship";

export const playerOne = new Player("real");
export const playerTwo = new Player("computer");

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

// export function updateCoordinats(oldX: number, oldY: number, newX: number, newY: number) {
//   const ship = playerOne.board.board[oldX][oldY];
//   if (typeof ship === "object") {
//     playerOne.board.placeShip(ship, newX, newY, true);
//   }

//   drawShips(playerOne, playerTwo);
// }
