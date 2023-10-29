class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
      }

      setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
      }

    guess() {
        return Math.round(this.minRange + (this.maxRange - this.minRange) / 2);
    }

    lower() {
        this.maxRange = this.guess();
    }

    greater() {
        this.minRange = this.guess();
    }
}

module.exports = GuessingGame;
