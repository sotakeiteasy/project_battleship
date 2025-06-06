export default class Ship {
  size: number;
  numberOfHits: number;
  isVertical: boolean;

  constructor(size: number, numberOfHits: number = 0) {
    this.size = size;
    this.numberOfHits = numberOfHits;
    this.isVertical = false;
  }

  hit() {
    return ++this.numberOfHits;
  }

  checkIsSunk() {
    return this.numberOfHits >= this.size;
  }
}
