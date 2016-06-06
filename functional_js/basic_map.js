function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return Array.prototype.map.call(numbers, function(item) {
    return item * 2;
  });
}

module.exports = doubleAll;

// proposed SOLUTION
/*module.exports = function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
}*/
