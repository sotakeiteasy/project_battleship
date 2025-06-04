import Ship from "./ship";
import Player from "./player";

export class Gameboard {
  board: (Ship | number)[][];
  hitMap: boolean[][];
  ships: Ship[];
  shipCoord: number[][][];

  constructor() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
    this.hitMap = Array(10)
      .fill(false)
      .map(() => Array(10).fill(false));
    this.ships = [];
    this.shipCoord = [];
  }

  placeShip(ship: Ship, coordinateX: number, coordinateY: number, isVertical = true) {
    if (coordinateX < 0 || coordinateY < 0) {
      return false;
    }

    if (isVertical === true && coordinateY + ship.size > 9) {
      return false;
    } else if (isVertical === false && coordinateX + ship.size > 9) {
      return false;
    }

    for (let i = 0; i < ship.size; i++) {
      const x = isVertical ? coordinateX : coordinateX + i;
      const y = isVertical ? coordinateY + i : coordinateY;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const nx = x + dx;
          const ny = y + dy;

          if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
            if (typeof this.board[nx][ny] === "object") {
              return false;
            }
          }
        }
      }
    }

    const coords = [];
    for (let i = 0; i < ship.size; i++) {
      const x = isVertical ? coordinateX : coordinateX + i;
      const y = isVertical ? coordinateY + i : coordinateY;
      this.board[x][y] = ship;
      coords.push([x, y]);
    }

    for (let i = 0; i < ship.size; i++) {
      const x = isVertical ? coordinateX : coordinateX + i;
      const y = isVertical ? coordinateY + i : coordinateY;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const nx = x + dx;
          const ny = y + dy;

          if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
            if (this.board[nx][ny] === 0) {
              this.board[nx][ny] = 1;
            }
          }
        }
      }
    }

    this.ships.push(ship);
    this.shipCoord.push(coords);

    return (this.board[coordinateX][coordinateY] = ship);
  }

  placeShips(player: Player, playerShips: { [key: string]: Ship }) {
    const shipsArr: Ship[] = Object.values(playerShips);
    for (let i = 0; i < shipsArr.length; i++) {
      let isPlace: Ship | boolean = false;
      while (!isPlace) {
        const randomCol = Math.floor(Math.random() * 10);
        const randomRow = Math.floor(Math.random() * 10);
        const vertical = Math.random() < 0.5;
        const Coord = [randomCol, randomRow];
        isPlace = player.board.placeShip(shipsArr[i], Coord[0], Coord[1], vertical);
      }
    }
  }

  receiveAttack(coordinateX: number, coordinateY: number) {
    const boardCell = this.board[coordinateX][coordinateY];

    if (this.hitMap[coordinateX][coordinateY] === true) {
      return false;
    } else if (boardCell === 0) {
      this.hitMap[coordinateX][coordinateY] = true;
      return false;
    } else if (typeof boardCell === "object") {
      this.hitMap[coordinateX][coordinateY] = true;
      boardCell.hit();
      return true;
    }
  }

  allShipsSunk() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (typeof this.board[i][j] === "object" && this.hitMap[i][j] === false) {
          return false;
        }
      }
    }
    return true;
  }

  getShipCoord() {
    return this.shipCoord.flat();
  }

  markSunkenShips() {
    const newlyMarkedCells: number[][] = [];
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
      if (ship.numberOfHits === ship.size) {
        const coords = this.shipCoord[i];

        for (const [x, y] of coords) {
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              const nx = x + dx;
              const ny = y + dy;

              if (
                nx >= 0 &&
                nx < 10 &&
                ny >= 0 &&
                ny < 10 &&
                typeof this.board[nx][ny] !== "object" &&
                !this.hitMap[nx][ny]
              ) {
                this.hitMap[nx][ny] = true;
                newlyMarkedCells.push([nx, ny]);
              }
            }
          }
        }
      }
    }
    return newlyMarkedCells;
  }

  isSunkAt(row: number, col: number): boolean {
    const cell = this.board[row][col];

    if (typeof cell === "object") {
      const ship = cell as Ship;
      return ship.numberOfHits === ship.size;
    }

    return false;
  }

  cleanBoard() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
    this.hitMap = Array(10)
      .fill(false)
      .map(() => Array(10).fill(false));
    this.ships = [];
    this.shipCoord = [];
  }
}
