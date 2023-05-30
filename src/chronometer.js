class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      this.currentTime += 1;
     if(printTimeCallback) printTimeCallback()
    }, 1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60;
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

    const minutesDigit = this.computeTwoDigitNumber(minutes);
    const secondsDigit = this.computeTwoDigitNumber(seconds);

    return `${minutesDigit}:${secondsDigit}`;
  }
}
