import Gameboard from "./gameboard";
import Ship from "./ship";

export default class Player {
    type: string;
    board: Gameboard

    constructor(type: string) {
        this.type = type
        this.board = new Gameboard()
    }

    createShips() {
        return {
            carrier: new Ship(5),
            battleship: new Ship(4),
            cruiser: new Ship(3),
            submarine: new Ship(2),
            destroyer: new Ship(1)
        };
    }
}