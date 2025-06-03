import Player from "../../src/classes/player";

test("Two types of player", () => {
  expect(new Player("real").type).toBe("real");
  expect(new Player("computer").type).toBe("computer");
});
