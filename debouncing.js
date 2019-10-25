function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

// debounce handleEvent so it gets called after calls have stopped for 2 seconds (2000 ms)
element.on('event', debounce(handleEvent, 2000));
