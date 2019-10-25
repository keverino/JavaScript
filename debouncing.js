function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();

    // if call happened again before the timer completed, start over
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }

    // set the timeout to the argument "t"
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

// debounce handleEvent so it gets called after calls have stopped for 2 seconds (2000 ms)
element.on('event', debounce(handleEvent, 2000));
