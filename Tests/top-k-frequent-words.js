/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    var words = words.sort();
    var frequency = {};

    for (var i = 0; i < words.length; i++) {
        // if there is nothing in this location, set key to word string and value to 1
        if (!frequency[words[i]])
            frequency[words[i]] = 1;
        // otherwise increment the counter for t6his key (the word)
        else
            frequency[words[i]]++;
    }

    console.log(frequency);

    var arr = [];
    for (var key in frequency) {
        arr.push({ key: key, value: frequency[key] });
    }

    // sort by the value, where the highest count is first
    arr.sort(function (a, b) {
        return b.value - a.value;
    });


    var ans = [];
    for (var i = 0; i < k; i++)
        ans.push(arr[i].key);

    return ans;
};
