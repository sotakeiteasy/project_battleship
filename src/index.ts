import Player from "./classes/player";
import Ship from "./classes/ship";
import { Round } from "./UI/DOM";
import "./styles.css";

const playerOne = new Player("real");
const playerTwo = new Player("real");

const playerOneShips: { [key: string]: Ship } = playerOne.createShips();
const playerTwoShips: { [key: string]: Ship } = playerTwo.createShips();

console.log(playerOneShips["carrier"]);

Round(playerOne, playerTwo, playerOneShips, playerTwoShips);

const newRoundBtn = document.querySelector(".newRoundBtn");
if (newRoundBtn) newRoundBtn.textContent = "Random Placement";
newRoundBtn?.addEventListener("click", () => {
  const playerOne = new Player("real");
  const playerTwo = new Player("real");

  const playerOneShips: { [key: string]: Ship } = playerOne.createShips();
  const playerTwoShips: { [key: string]: Ship } = playerTwo.createShips();
  Round(playerOne, playerTwo, playerOneShips, playerTwoShips);
  console.log("click");
  if (newRoundBtn) newRoundBtn.textContent = "Random Placement";
});
