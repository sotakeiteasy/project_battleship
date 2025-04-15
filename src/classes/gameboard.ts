import Ship from './ship'
export default class Gameboard {
    board: (Ship | number)[][]
    hitMap: boolean[][]
    constructor(){
        this.board = Array(10).fill(0).map(() => Array(10).fill(0))
        this.hitMap = Array(10).fill(false).map(() => Array(10).fill(false))
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

    receiveAttack(coordinateX: number, coordinateY: number) {
        const boardCell = this.board[coordinateX][coordinateY];

        if (this.hitMap[coordinateX][coordinateY] === true) {
            return false
        } else if (boardCell === 0) {
            this.hitMap[coordinateX][coordinateY] = true;
            return false
        } else if (typeof(boardCell) === "object") {
            this.hitMap[coordinateX][coordinateY] = true;
            boardCell.hit();
            return true
        } 
    }

    allShipsSunk() {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board.length; j++) {
                if(typeof(this.board[i][j]) === 'object' && this.hitMap[i][j] === false)  {
                    return false
                }
            }
        }
        return true
    }
}

