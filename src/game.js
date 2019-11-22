class Game {
  _rolls = [];
  _currentRoll = 0;

  roll(pins) {
    this._rolls[this._currentRoll++] = pins;
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {
        score += 10 + this._strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this._isSpare(frameIndex)) {
        score += 10 + this._spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this._frameScore(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  _isStrike(frameIndex) {
    return this._rolls[frameIndex] === 10;
  }

  _strikeBonus(frameIndex) {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  _isSpare(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }

  _spareBonus(frameIndex) {
    return this._rolls[frameIndex + 2];
  }

  _frameScore(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }
}

export default Game;
