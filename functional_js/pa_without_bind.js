'use strict';

var slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE

  return function(){
    var args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return console.log.apply(null, [namespace].concat(args));
  };
}

module.exports = logger;

/**
 * proposed SOLUTION
 *
 *  var slice = Array.prototype.slice

    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }
    
    module.exports = logger
 */
