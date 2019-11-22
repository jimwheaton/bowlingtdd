import Game from "./game";

describe("game", () => {
  test("a gutter game should return a score of 0", () => {
    // arrange
    const game = new Game();

    // act
    // play a shitty game

    // assert
    expect(game.score()).toEqual(0);
  });

  test("knocking down 1 pin per roll should return a score of 20", () => {
    const game = new Game();

    // roll all 1s

    expect(game.score()).toEqual(20);
  });
});
