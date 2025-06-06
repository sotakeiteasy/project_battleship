import Player from "../../classes/player";

export function drawShips(playerOne: Player | null, playerTwo: Player | null) {
  const boardOne = document.querySelector(`#${"player-one-board"}`);
  const boardTwo = document.querySelector(`#${"player-two-board"}`);

  document.querySelectorAll(".cell").forEach((cell) => cell.classList.remove("ship", "hit", "hitAll"));

  if (playerOne) {
    const PlayerOneCoords = playerOne.board.getShipCoord();
    PlayerOneCoords.forEach(([y, x]: number[]) => {
      const cell = boardOne?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
      cell?.classList.add("ship");
    });
  }

  if (playerTwo) {
    const PlayerTwoCoords = playerTwo.board.getShipCoord();
    PlayerTwoCoords.forEach(([y, x]: number[]) => {
      const cell = boardTwo?.querySelector(`[data-row="${y}"][data-col="${x}"]`);
      cell?.classList.add("ship");
    });
  }
}
