export default class Ship {
    size: number;
    numberOfHits: number;
    isSunk: boolean;

    constructor(size: number, numberOfHits: number = 0, isSunk: boolean = false) {
        this.size = size;
        this.numberOfHits = numberOfHits
        this.isSunk = isSunk
    }

    hit() {
        return ++this.numberOfHits
    }

    checkIsSunk() {
        return this.numberOfHits >= this.size;
    }
}