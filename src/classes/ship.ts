export default class Ship {
    size: number;
    numberOfHits: number;

    constructor(size: number, numberOfHits: number = 0) {
        this.size = size;
        this.numberOfHits = numberOfHits
    }

    hit() {
        return ++this.numberOfHits
    }

    checkIsSunk() {
        return this.numberOfHits >= this.size;
    }
}