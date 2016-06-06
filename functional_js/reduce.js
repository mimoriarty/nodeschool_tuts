'use strict';

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((count, currentValue) => {
    count[currentValue] = ++count[currentValue] || 1;
    return count;
  }, {});
}

module.exports = countWords
