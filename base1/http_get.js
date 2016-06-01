'use strict';

let
  http = require('http');

http.get(process.argv[2], function(response) {
  response
    .setEncoding('utf8')
    .on('error', (err) => `Got error: ${err}`)
    .on('data', (data) => console.log(data));
}).on('error', (err) => `Got error: ${err}`);
