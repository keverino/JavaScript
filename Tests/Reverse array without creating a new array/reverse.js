// Reverse the array without creating a new array

//var a = [ 1, 3, 6, 2, 4, 8 ];
var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log('Input: ' + a);

var t0 = performance.now();
var counter = a.length - 1;

for( var i = 0; i < a.length/2; i++){
  let currentElement = a[i];

  //console.log('Swapping ' + a[i] + ' with ' + a[counter]);

  a[i] = a[counter];
  a[counter] = currentElement;
  counter--;
}

var t1 = performance.now();
console.log('Output: ' + a);
console.log("Call took " + (t1 - t0) + " milliseconds.");
