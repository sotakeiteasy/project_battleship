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

function initializeDrag() {
  const boardEl = document.querySelector(".playerOne") as HTMLElement;

  boardEl.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(".cell.ship") as HTMLElement;
    if (!target) return;

    const y = parseInt(target.dataset.row!);
    const x = parseInt(target.dataset.col!);
    const ship = playerOne.board.board[y][x];

    if (!(ship && typeof ship === "object" && "isVertical" in ship)) return;

    ship.isVertical = !ship.isVertical;

    const shipCoordsArr = playerOne.board
      .getShipCoord()
      .find((coords) => coords.some(([cy, cx]) => cy === y && cx === x));
    if (!shipCoordsArr) return;

    const [originY, originX] = shipCoordsArr[0];

    // Удалить корабль с поля
    playerOne.board.ships = playerOne.board.ships.filter((s) => s !== ship);
    playerOne.board.shipCoord = playerOne.board.shipCoord.filter(
      (coord) => coord.length === 0 || playerOne.board.board[coord[0][0]][coord[0][1]] !== ship,
    );
    for (const [cy, cx] of shipCoordsArr) {
      if (playerOne.board.board[cy][cx] === ship) {
        playerOne.board.board[cy][cx] = 0;
      }
    }

    // Поставить с новой ориентацией
    const success = playerOne.board.placeShip(ship, originX, originY, ship.isVertical);

    // Если не получилось — вернуть обратно
    if (!success) {
      shipCoordsArr.forEach(([cy, cx]) => {
        const cell = boardEl.querySelector(`[data-row="${cy}"][data-col="${cx}"]`);
        if (cell) {
          if (!ship.isVertical) {
            cell.classList.add("shake-fail-vertical");
            setTimeout(() => cell.classList.remove("shake-fail-vertical"), 500);
          } else if (ship.isVertical) {
            cell.classList.add("shake-fail-non-vertical");
            setTimeout(() => cell.classList.remove("shake-fail-non-vertical"), 500);
          }
        }
      });

      ship.isVertical = !ship.isVertical;
      playerOne.board.placeShip(ship, originX, originY, ship.isVertical);
    }

    // Перерисовать
    drawShips(playerOne, null);
  });

  const playerCells = boardEl.querySelectorAll(".cell.ship");
  playerCells.forEach((cell) => {
    (cell as HTMLElement).draggable = true;
  });

  let draggedShipCells: HTMLElement[] = [];
  let originX = 0;
  let originY = 0;
  let isVertical: boolean;
  let draggedShip: Ship | null = null;
  let dragIndex: number;
  let shipCoordsArr: number[][] = [];
  let dropSuccess = false;

  const clearSurroundingArea = (oldCoords: number[][][]) => {
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

    for (const coords of oldCoords) {
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
    }
  };

  boardEl.addEventListener("dragstart", (e) => {
    dropSuccess = false;

    const target = e.target as HTMLElement;
    const cell = target.closest(".cell") as HTMLElement;
    if (!cell || !cell.classList.contains("ship")) {
      e.preventDefault();
      return;
    }
    console.log("maybeShip");

    const y = parseInt(cell.dataset.row!);
    const x = parseInt(cell.dataset.col!);

    const maybeShip = playerOne.board.board[y][x];
    if (!(maybeShip && typeof maybeShip === "object" && "size" in maybeShip)) return;

    draggedShip = maybeShip as Ship;
    isVertical = draggedShip.isVertical;

    shipCoordsArr =
      playerOne.board.getShipCoord().find((coords) => coords.some(([cy, cx]) => cy === y && cx === x)) || [];
    if (shipCoordsArr.length === 0) return;

    dragIndex = shipCoordsArr.findIndex(([cy, cx]) => cy === y && cx === x);

    originY = shipCoordsArr[0][0];
    originX = shipCoordsArr[0][1];

    draggedShipCells = [];

    for (let i = 0; i < draggedShip.size; i++) {
      const cy = isVertical ? originY + i : originY;
      const cx = isVertical ? originX : originX + i;
      const cell = boardEl.querySelector(`.cell.ship[data-row='${cy}'][data-col='${cx}']`) as HTMLElement;
      if (!cell) break;
      draggedShipCells.push(cell);
    }

    draggedShipCells.forEach((c) => c.classList.add("selected"));
    shipCoordsArr.forEach(([cy, cx]) =>
      boardEl.querySelector(`[data-row="${cy}"][data-col="${cx}"]`)?.classList.remove("ship"),
    );
  });

  boardEl.addEventListener("dragend", () => {
    if (!dropSuccess && draggedShip && shipCoordsArr.length) {
      handleFail(shipCoordsArr, draggedShip);
    }
    draggedShipCells.forEach((c) => c.classList.remove("selected"));
    draggedShipCells = [];
    draggedShip = null;
    shipCoordsArr = [];

    document.querySelectorAll(".cell.highlight").forEach((cell) => cell.classList.remove("highlight"));
  });

  boardEl.addEventListener("dragover", (e) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    if (!target) return;
    const cell = target.closest(".cell") as HTMLElement;
    if (!cell) return;

    if (!draggedShip) return;
    const y = parseInt(cell.dataset.row!);
    const x = parseInt(cell.dataset.col!);

    const startY = isVertical ? y - dragIndex : y;
    const startX = isVertical ? x : x - dragIndex;

    for (let i = 0; i < draggedShip.size; i++) {
      const cy = isVertical ? startY + i : startY;
      const cx = isVertical ? startX : startX + i;
      const cell = boardEl.querySelector(`[data-row="${cy}"][data-col="${cx}"]`);
      cell?.classList.add("highlight");
    }
  });

  boardEl.addEventListener("dragleave", () => {
    document.querySelectorAll(".cell.highlight").forEach((cell) => cell.classList.remove("highlight"));
  });

  boardEl.addEventListener("drop", (e) => {
    e.preventDefault();

    const dropCell = (e.target as HTMLElement).closest(".cell") as HTMLElement;
    if (!dropCell || !draggedShip || draggedShipCells.length === 0) {
      handleFail(shipCoordsArr, draggedShip!);

      boardEl.dispatchEvent(new DragEvent("dragend"));
      return;
    }

    const dropY = parseInt(dropCell.dataset.row!);
    const dropX = parseInt(dropCell.dataset.col!);
    if (dropX === originX && dropY === originY) return;

    const startY = isVertical ? dropY - dragIndex : dropY;
    const startX = isVertical ? dropX : dropX - dragIndex;

    draggedShipCells.forEach((cell) => cell.classList.remove("ship"));

    const allCoords = playerOne.board.getShipCoord();

    playerOne.board.ships = playerOne.board.ships.filter((s) => s !== draggedShip);
    playerOne.board.shipCoord = playerOne.board.shipCoord.filter(
      (coord) => coord.length === 0 || playerOne.board.board[coord[0][0]][coord[0][1]] !== draggedShip,
    );

    // for (const shipCoords of oldCoords) {
    for (const [y, x] of shipCoordsArr) {
      if (playerOne.board.board[y][x] === draggedShip) {
        playerOne.board.board[y][x] = 0;
      }
    }
    // }
    const success = playerOne.board.placeShip(draggedShip, startX, startY, isVertical);

    if (success) {
      handleSuccess(allCoords, draggedShip, startX, startY);
    } else {
      handleFail(shipCoordsArr, draggedShip);
    }

    draggedShipCells.forEach((c) => c.classList.remove("selected"));
    draggedShipCells = [];
    draggedShip = null;
  });

  function handleSuccess(oldCoords: number[][][], draggedShip: Ship, startX: number, startY: number) {
    clearSurroundingArea(oldCoords);
    drawShips(playerOne, null);

    for (let i = 0; i < draggedShip.size; i++) {
      const cy = isVertical ? startY + i : startY;
      const cx = isVertical ? startX : startX + i;
      boardEl.querySelector(`[data-row="${cy}"][data-col="${cx}"]`)?.classList.add("ship");
    }
    dropSuccess = true;
  }

  function handleFail(oldCoords: number[][], draggedShip: Ship) {
    oldCoords.forEach(([cy, cx]) => {
      boardEl.querySelector(`[data-row="${cy}"][data-col="${cx}"]`)?.classList.add("ship");
    });

    playerOne.board.placeShip(draggedShip, originX, originY, isVertical);
    drawShips(playerOne, null);

    if (isVertical) {
      draggedShipCells.forEach((cell) => {
        cell.classList.add("ship");
        cell.classList.add("shake-fail-vertical");
        setTimeout(() => cell.classList.remove("shake-fail-vertical"), 500);
      });
    } else {
      draggedShipCells.forEach((cell) => {
        cell.classList.add("ship");
        cell.classList.add("shake-fail-non-vertical");
        setTimeout(() => cell.classList.remove("shake-fail-non-vertical"), 500);
      });
    }
  }
}
