import Player from "./classes/player";
import {Round} from "./UI/DOM"
import './styles.css';

const playerOne = new Player("real")
const playerTwo = new Player("real")

const playerOneShips = playerOne.createShips();
const playerTwoShips = playerTwo.createShips();


Round(playerOne, playerTwo, playerOneShips, playerTwoShips)