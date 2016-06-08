'use strict';

function duckCount() {
  // SOLUTION GOES HERE

  return Array.from(arguments).reduce((count, currentValue) => {
    if (Object.prototype.hasOwnProperty.call(currentValue, 'quack')) ++count;
    return count;
  }, 0)
}

module.exports = duckCount

/* proposed SOLUTION
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount
*/
