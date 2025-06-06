import { Gameboard } from "./gameboard";
import Ship from "./ship";

export default class Player {
  type: string;
  board: Gameboard;

  constructor(type: string) {
    this.type = type;
    this.board = new Gameboard();
  }

  createShips() {
    return {
      battleship: new Ship(4),
      cruiser_1: new Ship(3),
      // cruiser_2: new Ship(3),
      submarine_1: new Ship(2),
      // submarine_2: new Ship(2),
      // submarine_3: new Ship(2),
      // destroyer_1: new Ship(1),
      // destroyer_2: new Ship(1),
      // destroyer_3: new Ship(1),
      // destroyer_4: new Ship(1),
    };
  }
}
