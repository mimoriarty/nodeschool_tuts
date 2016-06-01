'use strict';

let
  result = '',
  http = require('http'),
  processError = (err) => console.log(`Got error; ${err}`);

http.get(process.argv[2], function(response) {
  response
    .setEncoding('utf8')
    .on('error', processError)
    .on('data', (data) => {
      result += data;
    })
    .on('end', (res) => {
      console.log(result.length);
      console.log(result);
    })
}).on('error', processError);
