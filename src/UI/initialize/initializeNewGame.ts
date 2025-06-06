import Ship from "../../classes/ship";
// import { updateCoordinats } from "../../utils/game";
import { playerOne } from "../../utils/game";
import { drawShips } from "../utils/drawShips";

export function initializeNewGame() {
  const newRoundBtn = document.querySelector(".newRoundBtn") as HTMLElement;
  newRoundBtn.classList.add("active");

  const randomPlacementBtn = document.querySelector(".placeShipsBtn") as HTMLElement;
  randomPlacementBtn.classList.add("active");

  const playerOneBoard = document.querySelector(".playerOne") as HTMLElement;
  playerOneBoard.classList.remove("startShadow");

  const playerTwoBoard = document.querySelector(".playerTwo") as HTMLElement;
  playerTwoBoard.classList.add("startShadow");

  const display = document.querySelector(".display") as HTMLElement;
  display.textContent = "Place your ships";

  const endMessage = document.querySelector(".endGameBlock") as HTMLElement;
  endMessage.classList.remove("endGameSize");

  initializeDrag();
}
// Fixes: reliable drag target, correct DOM updates, proper board mutation
function initializeDrag() {
  const boardEl = document.querySelector(".playerOne") as HTMLElement;

  const playerCells = boardEl.querySelectorAll(".cell.ship");
  playerCells.forEach((cell) => {
    (cell as HTMLElement).draggable = true;
  });

  let draggedShipCells: HTMLElement[] = [];
  let originX = 0;
  let originY = 0;
  let isVertical: boolean;
  let draggedShip: Ship | null = null;

  const clearSurroundingArea = (coords: number[][]) => {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [y, x] of coords) {
      for (const [dy, dx] of directions) {
        const ny = y + dy;
        const nx = x + dx;
        if (
          ny >= 0 &&
          ny < playerOne.board.board.length &&
          nx >= 0 &&
          nx < playerOne.board.board[0].length &&
          typeof playerOne.board.board[ny][nx] !== "object"
        ) {
          playerOne.board.board[ny][nx] = 0;
        }
      }
    }
  };

  boardEl.addEventListener("dragstart", (e) => {
    const target = e.target as HTMLElement;
    const cell = target.closest(".cell") as HTMLElement;
    if (!cell || !cell.classList.contains("ship")) return;

    originY = parseInt(cell.dataset.row!);
    originX = parseInt(cell.dataset.col!);

    const maybeShip = playerOne.board.board[originY][originX];
    if (!(maybeShip && typeof maybeShip === "object" && "size" in maybeShip)) return;

    draggedShip = maybeShip as Ship;
    const size = draggedShip.size;
    draggedShipCells = [cell];

    isVertical = draggedShip.isVertical;

    if (isVertical) {
      for (let i = 1; i < size; i++) {
        const next = boardEl.querySelector(
          `.cell.ship[data-row='${originY + i}'][data-col='${originX}']`,
        ) as HTMLElement;
        if (!next) break;
        draggedShipCells.push(next);
      }
    } else {
      for (let i = 1; i < size; i++) {
        const next = boardEl.querySelector(
          `.cell.ship[data-row='${originY}'][data-col='${originX + i}']`,
        ) as HTMLElement;
        if (!next) break;
        draggedShipCells.push(next);
      }
    }

    draggedShipCells.forEach((c) => c.classList.add("selected"));
  });

  boardEl.addEventListener("dragend", () => {
    draggedShipCells.forEach((c) => c.classList.remove("selected"));
    draggedShipCells = [];
    draggedShip = null;
  });

  boardEl.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  boardEl.addEventListener("drop", (e) => {
    e.preventDefault();

    const dropCell = (e.target as HTMLElement).closest(".cell") as HTMLElement;
    if (!dropCell || !draggedShip || draggedShipCells.length === 0) {
      boardEl.dispatchEvent(new DragEvent("dragend"));
      return;
    }

    const dropY = parseInt(dropCell.dataset.row!);
    const dropX = parseInt(dropCell.dataset.col!);
    if (dropX === originX && dropY === originY) return;

    draggedShipCells.forEach((cell) => cell.classList.remove("ship"));

    const oldCoords = playerOne.board.getShipCoord();
    console.log({ oldCoords });
    playerOne.board.ships = playerOne.board.ships.filter((s) => s !== draggedShip);
    playerOne.board.shipCoord = playerOne.board.shipCoord.filter(
      (coord) => coord.length === 0 || playerOne.board.board[coord[0][0]][coord[0][1]] !== draggedShip,
    );

    for (const [x, y] of oldCoords) {
      if (playerOne.board.board[x][y] === draggedShip) {
        playerOne.board.board[x][y] = 0;
      }
    }

    const success = playerOne.board.placeShip(draggedShip, dropX, dropY, isVertical);

    if (success) {
      clearSurroundingArea(oldCoords);
      drawShips(playerOne, null);
    } else {
      playerOne.board.placeShip(draggedShip, originX, originY, isVertical);
      drawShips(playerOne, null);

      draggedShipCells.forEach((cell) => {
        cell.classList.add("ship");
        cell.classList.add("shake-fail");
        setTimeout(() => cell.classList.remove("shake-fail"), 500);
      });
    }

    draggedShipCells.forEach((c) => c.classList.remove("selected"));
    draggedShipCells = [];
    draggedShip = null;
  });
}
