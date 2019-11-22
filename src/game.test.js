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

  test("can score a spare", () => {
    game.roll(4);
    game.roll(6);
    game.roll(5);
    rollMany(17, 0);

    expect(game.score()).toEqual(20);
  });

  test("can score a strike", () => {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    rollMany(16, 0);

    expect(game.score()).toEqual(20);
  });

  test("perfect game", () => {
    rollMany(12, 10);

    expect(game.score()).toEqual(300);
  });
});
