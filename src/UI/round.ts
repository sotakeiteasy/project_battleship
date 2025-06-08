import Player from "../classes/player";
import { drawShips } from "./utils/drawShips";

export function Round(playerOne: Player, playerTwo: Player) {
  let isFirstPlayer = true;
  const boardOne = document.querySelector("#player-one-board");
  const boardTwo = document.querySelector("#player-two-board");

  initializeUI();

  function initializeUI() {
    const playerTwoBoard = document.querySelector(".playerTwo");
    playerTwoBoard?.classList.remove("startShadow");

    const newRoundBtn = document.querySelector(".newRoundBtn");
    newRoundBtn?.classList.remove("active");

    const randomPlacementBtn = document.querySelector(".placeShipsBtn");
    randomPlacementBtn?.classList.remove("active");

    drawShips(playerOne, playerTwo);
    boardTwo?.addEventListener("click", handleClick);
    boardOne?.classList.add("nonClick");

    changeDisplay("Your turn");
  }

  function computerAttack(Row: number = 0, Col: number = 0) {
    changeDisplay("Computer is attacking...");
    // Ищем клетки кораблей, которые уже поражены
    const hitShipCells = boardOne?.querySelectorAll(".ship.hit");
    let targetFound = false;

    if (hitShipCells && hitShipCells.length > 0) {
      // Проходим по каждой пораженной клетке корабля
      for (const hitCell of hitShipCells) {
        const hitRow = parseInt(hitCell.getAttribute("data-row")!);
        const hitCol = parseInt(hitCell.getAttribute("data-col")!);

        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ];

        for (const [dRow, dCol] of directions) {
          const newRow = hitRow + dRow;
          const newCol = hitCol + dCol;

          if (
            newRow >= 0 &&
            newRow < 10 &&
            newCol >= 0 &&
            newCol < 10 &&
            playerOne.board.hitMap[newRow][newCol] === false && // WHY IT ISN"T WORK?????
            !boardOne?.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`)?.classList.contains("hit")
          ) {
            Row = newRow;
            Col = newCol;
            targetFound = true;

            console.log(playerOne.board.hitMap[newRow][newCol] === false);
            console.log({ newRow, newCol });

            break;
          }
        }

        if (targetFound) break;
      }
    }

    if (!targetFound) {
      while (playerOne.board.hitMap[Row][Col] !== false) {
        Row = Math.floor(Math.random() * 10);
        Col = Math.floor(Math.random() * 10);
      }
    }

    const hitShip = playerOne.board.receiveAttack(Row, Col);
    console.log(hitShip);
    const cell = boardOne?.querySelector(`[data-row="${Row}"][data-col="${Col}"]`) as HTMLElement;
    cell.classList.add("hit");

    if (hitShip) checkStep(Row, Col, true);
    else {
      isFirstPlayer = !isFirstPlayer;
      checkStep();
      changeDisplay("Your turn");
    }
  }

  function changeDisplay(text: string) {
    if (text.startsWith("Game Over")) {
      const endMessage = document.querySelector(".endGameMessage") as HTMLElement;
      endMessage.textContent = text;

      const endGameBlock = document.querySelector(".endGameBlock") as HTMLElement;
      endGameBlock.classList.add("endGameSize");
      return;
    }

    const display = document.querySelector(".display") as HTMLElement;
    display.textContent = text;
  }

  function checkStep(row?: number, col?: number, hit = false) {
    if (isFirstPlayer) {
      const markedCells = playerTwo.board.markSunkenShips();
      markedCells.forEach(([y, x]: number[]) => {
        const cell = boardTwo?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
        cell?.classList.add("hit");
      });
      playerTwo.board.ships.forEach((ship, index) => {
        if (ship.numberOfHits === ship.size) {
          playerTwo.board.shipCoord[index].forEach(([y, x]) => {
            const cell = boardTwo?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
            cell?.classList.add("hitAll");
          });
        }
      });
      if (row != null && col != null) {
        const markedDiagCells = playerTwo.board.markHitsAroundShip(row, col);
        markedDiagCells.forEach(([row, col]) => {
          const elem = boardTwo?.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`);
          elem?.classList.add("hit");
        });
      }
    } else {
      const markedCells = playerOne.board.markSunkenShips();
      markedCells.forEach(([y, x]: number[]) => {
        const cell = boardOne?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
        cell?.classList.add("hit");
      });

      if (row != null && col != null) {
        const markedDiagCells = playerOne.board.markHitsAroundShip(row, col);
        markedDiagCells.forEach(([row, col]) => {
          const elem = boardOne?.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`);
          elem?.classList.add("hit");
        });
      }
    }

    if (playerOne.board.allShipsSunk() || playerTwo.board.allShipsSunk()) {
      console.log("a?");
      handleEndGame(isFirstPlayer);
      return;
    }

    if (isFirstPlayer) {
      boardTwo?.classList.remove("shadow");
    } else if (!isFirstPlayer) {
      boardTwo?.classList.add("shadow");
      setTimeout(() => computerAttack(), hit ? 800 : 200);
    }
  }

  function handleEndGame(isFirstPlayer: boolean) {
    if (isFirstPlayer) changeDisplay("Game Over. You win!");
    else changeDisplay("Game Over. You lose!");

    const playerOneBoard = document.querySelector(".playerOne");
    const playerTwoBoard = document.querySelector(".playerTwo");
    const display = document.querySelector(".display");

    boardTwo?.removeEventListener("click", handleClick);
    playerOneBoard?.classList.add("startShadow");
    playerTwoBoard?.classList.add("startShadow");
    display?.classList.add("startShadow");
  }

  function handleClick(e: Event) {
    if (!isFirstPlayer) return;
    const cell = e.target as HTMLElement;
    if (cell.dataset.row === undefined || cell.dataset.col == undefined) return;
    if (cell?.classList.contains("hit")) return;

    const col = Number(cell.dataset.col);
    const row = Number(cell.dataset.row);

    cell.classList.add("hit");
    const hitShip = playerTwo.board.receiveAttack(row, col);

    if (!hitShip) {
      isFirstPlayer = !isFirstPlayer;
      checkStep();
    } else {
      const markedCells = playerTwo.board.markHitsAroundShip(row, col);

      markedCells.forEach(([row, col]) => {
        const elem = boardTwo?.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`);
        elem?.classList.add("hit");
      });
      checkStep(row, col);
    }
  }
}
