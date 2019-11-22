import Game from "./game";

describe("game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  function rollMany(rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  test("a gutter game should return a score of 0", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  test("knocking down 1 pin per roll should return a score of 20", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });
});
