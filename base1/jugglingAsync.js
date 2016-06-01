'use strict';

let
  urls = [process.argv[2], process.argv[3], process.argv[4]],
  results = [],
  count = 0,
  http = require('http'),
  processError = (err) => console.log(`Got error; ${err}`),
  printResult = function() {
    results.forEach(function(item) {
      console.log(item);
    });
  };

urls.forEach(function(item, index) {
  http.get(item, function(response) {
    let result = '';
    response
      .setEncoding('utf8')
      .on('data', (data) => result += data)
      .on('end', () => {
        results[index] = result;
        count ++;
        if (count === 3) printResult();
      })
      .on('error', processError)
  }).on('error', processError);
});
