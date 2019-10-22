// Remove duplicates from array

/*
* Slow, o(n^2)
*/
var a = [ 1, 2, 1, 3, 5, 5, 10, 9, 8, 8 ];

var t0 = performance.now();
var noDuplicates = [];
console.log('Input: ' + a);

for(var i = 0; i < a.length; i++){
  // if there isn't anything in the array, add it
  if(noDuplicates.length == 0){
    noDuplicates.push(a[i]);
  }
  else{
    let exists = false;

    // iterate through the noDuplicates array and look for existing entries
    // if match is found, set 'exists' boolean to true
    for(var j = 0; j < noDuplicates.length; j++){
      if( noDuplicates[j] == [a[i]] )
        exists = true;
    }

    // if there is no match, add it
    if( exists == false )
      noDuplicates.push(a[i]);
  }
}

console.log('Output: ' + noDuplicates);
var t1 = performance.now();
console.log("Call took " + (t1 - t0) + " milliseconds.");
