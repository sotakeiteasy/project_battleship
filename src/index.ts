// import Gameboard from "./classes/gameboard";
// import Ship from "./classes/ship";
import Player from "./classes/player";

import createGameBoard from "./UI/DOM"
import './styles.css';

createGameBoard('player-one-board');
// createGameBoard('player-two-board');

const playerOne = new Player("real")
const playerTwo = new Player("real")

const playerOneShips = playerOne.createShips();
const playerTwoShips = playerTwo.createShips();

playerOne.board.placeShip(playerOneShips.carrier, 1, 3)
playerOne.board.placeShip(playerOneShips.battleship, 3, 3)
playerOne.board.placeShip(playerOneShips.cruiser, 5, 3)
playerOne.board.placeShip(playerOneShips.submarine, 7, 3)
playerOne.board.placeShip(playerOneShips.destroyer, 9, 3)

playerTwo.board.placeShip(playerTwoShips.carrier, 1, 3)
playerTwo.board.placeShip(playerTwoShips.battleship, 3, 3)
playerTwo.board.placeShip(playerTwoShips.cruiser, 5, 3)
playerTwo.board.placeShip(playerTwoShips.submarine, 7, 3)
playerTwo.board.placeShip(playerTwoShips.destroyer, 9, 3)


