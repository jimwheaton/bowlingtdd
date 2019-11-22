class Game {
  _rolls = [];
  _currentRoll = 0;

  roll(pins) {
    this._rolls[this._currentRoll++] = pins;
  }

  score() {
    let score = 0;

    for (var frame = 0, roll = 0; frame < 10; frame++, roll += 2) {
      let frameScore = this._rolls[roll] + this._rolls[roll + 1];
      score += frameScore;
      if (frameScore === 10) {
        score += this._rolls[roll + 2];
      }
    }

    return score;
  }
}

export default Game;
