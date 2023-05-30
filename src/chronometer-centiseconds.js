class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/ 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 6000) / 100
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return `0${value}`.slice(-2)
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const centiseconds = this.getCentiseconds();

    const minutesDigit = this.computeTwoDigitNumber(minutes);
    const secondsDigit = this.computeTwoDigitNumber(seconds);
    const centisecondsDigit = this.computeTwoDigitNumber(centiseconds)

    return `${minutesDigit}:${secondsDigit}.${centisecondsDigit}`;
  }
}
