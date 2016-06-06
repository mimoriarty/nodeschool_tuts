'use stsrict';

function repeat(operation, num) {
  // SOLUTION GOES HERE

  if (num <= 0) return;
  operation();
  return repeat(operation, --num);

  // without recursion
  /*for (var i = 1; i < num; i++) {
    operation();
  }*/
}

// Do not remove the line below
module.exports = repeat
