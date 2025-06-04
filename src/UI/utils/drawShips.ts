import Player from "../../classes/player";

export function drawShips(playerOne: Player, playerTwo: Player) {
  const boardOne = document.querySelector(`#${"player-one-board"}`);
  const boardTwo = document.querySelector(`#${"player-two-board"}`);

  document.querySelectorAll(".cell").forEach((cell) => cell.classList.remove("ship", "hit"));

  const PlayerOneCoords = playerOne.board.getShipCoord();
  PlayerOneCoords.forEach(([x, y]: number[]) => {
    const cell = boardOne?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
    cell?.classList.add("ship");
  });

  const PlayerTwoCoords = playerTwo.board.getShipCoord();
  PlayerTwoCoords.forEach(([x, y]: number[]) => {
    const cell = boardTwo?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
    cell?.classList.add("ship");
  });
}
