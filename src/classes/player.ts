import Gameboard from "./gameboard";

export default class Player {
    type: string;
    board: Gameboard

    constructor(type: string) {
        this.type = type
        this.board = new Gameboard()
    }
}