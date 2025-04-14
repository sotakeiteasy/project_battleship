import Ship from './ship'
export default class Gameboard {
    board: (Ship | number)[][]
    constructor(){
        this.board = Array(10).fill(0).map(() => Array(10).fill(0))
    }

    placeShip(ship: Ship, coordinateX: number, coordinateY: number, isVertical = true) {
        if (coordinateX < 0 || coordinateY < 0) {
            return false; 
        }

        if (isVertical === true && coordinateY + ship.size > 9) {
            return false
        } else if (isVertical === false && coordinateX + ship.size > 9) {
            return false
        }

        if(this.board[coordinateX][coordinateY] !== 0) {
            return false;
        }

        for(let i = 0; i < ship.size; i++) {
            const x = isVertical ? coordinateX : coordinateX+i;
            const y = isVertical ? coordinateY + i : coordinateY;
            this.board[x][y] = ship
        }   

        return this.board[coordinateX][coordinateY] = ship
    }

    // - placeShip()
    // - receiveAttack()
    // - allShipsSunk()

    // Gameboards should keep track of missed attacks so they can display them properly.
}

