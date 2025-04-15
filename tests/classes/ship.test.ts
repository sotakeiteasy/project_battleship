import Ship from '../../src/classes/ship'

test("Ship work correctly", () => {
    const ship = new Ship(2);
    expect(ship).toEqual({
        size: 2,
        numberOfHits: 0,
        isSunk: false
    })

    ship.hit()
    expect(ship.numberOfHits).toBe(1)
    expect(ship.checkIsSunk()).toBe(false)
})
