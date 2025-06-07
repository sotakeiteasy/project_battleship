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
    // boardOne

    changeDisplay("Your turn");
  }

  function computerAttack(Row: number = 0, Col: number = 0) {
    changeDisplay("Computer is attacking...");

    setTimeout(() => {
      while (playerOne.board.hitMap[Row][Col] !== false) {
        Row = Math.floor(Math.random() * 10);
        Col = Math.floor(Math.random() * 10);
      }

      const hitShip = playerOne.board.receiveAttack(Row, Col);
      const cell = boardOne?.querySelector(`[data-row="${Row}"][data-col="${Col}"]`) as HTMLElement;
      cell.classList.add("hit");

      if (hitShip) setTimeout(() => checkStep(), 800);
      else {
        isFirstPlayer = !isFirstPlayer;
        checkStep();
        changeDisplay("Your turn");
      }
    }, 200);
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

  function checkStep() {
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
    } else {
      const markedCells = playerOne.board.markSunkenShips();
      markedCells.forEach(([y, x]: number[]) => {
        const cell = boardOne?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
        cell?.classList.add("hit");
      });
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
      computerAttack();
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
    if (cell?.classList.contains("hit")) {
      return;
    }
    const col = Number(cell.dataset.col);
    const row = Number(cell.dataset.row);
    cell.classList.add("hit");
    const hitShip = playerTwo.board.receiveAttack(row, col);
    if (!hitShip) {
      isFirstPlayer = !isFirstPlayer;
      checkStep();
    } else {
      checkStep();
    }
  }
}
