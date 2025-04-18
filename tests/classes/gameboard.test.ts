import Ship from '../../src/classes/ship'
import Gameboard from '../../src/classes/gameboard'

test("Placeship works correctly", () => {
    const board = new Gameboard
    const ship = new Ship(2);

    // placing ship
    expect(board.placeShip(ship, 2, 3)).toBe(ship) // what does it test btw?..

    // placing works with size of board
    expect(board.board[2][3]).toBe(ship);
    expect(board.board[2][4]).toBe(ship);
    
    // correctly work with borders of gameboard
    board.placeShip(ship, 9, 9)
    expect(board.board[9][9]).toBe(0)
    expect(board.placeShip(ship, -1, 9)).toBe(false)

    // correctly work with borders of gameboard AND gorizontal
    board.placeShip(ship, 9, 6, false)
    expect(board.board[9][6]).toBe(0)

    // correctly work with busy cells
    const anotherShip = new Ship(3);
    expect(board.placeShip(anotherShip, 2, 3)).toBe(false)

    // correctly work with vertical orientation
    expect(board.placeShip(anotherShip, 5, 6, false)).toBe(anotherShip)
    expect(board.board[5][6]).toBe(anotherShip);
    expect(board.board[6][6]).toBe(anotherShip);
    expect(board.board[7][6]).toBe(anotherShip);
})

    test('Ship dont placed on top of each other at the intersection', () => {
        const board = new Gameboard
        const ship = new Ship(5);
        const anotherShip = new Ship(4);

        board.placeShip(ship, 1, 5, false)
        board.placeShip(anotherShip, 3, 3)

        expect(board.board[5][2]).toBe(0)
        expect(board.getShipCoord()).toEqual([[1, 5],[2, 5],[3, 5],[4, 5],[5, 5]])

    })

test('Receive attack function works correctly', () => {
    const board = new Gameboard
    const ship = new Ship(2);
    board.placeShip(ship, 2, 3)

    expect(board.receiveAttack(2, 3)).toBe(true)
    expect(board.receiveAttack(2, 3)).toBe(false)

    expect(board.receiveAttack(4, 5)).toBe(false)
})

test('AllShipSunk function works correctly', () => {
    const board = new Gameboard

    // all sunk
    const ship = new Ship(2);
    board.placeShip(ship, 2, 3)

    expect(board.receiveAttack(2, 3)).toBe(true)  
    expect(board.receiveAttack(2, 4)).toBe(true)

    expect(board.allShipsSunk()).toBe(true)

    // not all sunk
    const anotherShip = new Ship(3);
    board.placeShip(anotherShip, 4, 6)

    expect(board.receiveAttack(4, 6)).toBe(true)  
    expect(board.receiveAttack(4, 7)).toBe(true)

    expect(board.allShipsSunk()).toBe(false)
})