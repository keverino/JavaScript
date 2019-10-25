function throttle(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined // function is being called for the first time
        || (this.lastCall - previousCall) > t) { // throttle time has elapsed
      f(args);
    }
  }
}


// throttle handleEvent so it gets called only once every 2 seconds (2000 ms)
element.on('event', throttle(handleEvent, 2000));


// Another example
var isThrottled = false,
    throttleDuration = 24; // ms

function thingToThrottle() {
    if (isThrottled) { return; }
    isThrottled = true;
    setTimeout(function () { isThrottled = false; }, throttleDuration);

    // do your work here
}
