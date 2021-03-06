'use strict';

let
  http = require('http'),
  bl = require('bl'),
  processError = (err) => console.log(`Got error; ${err}`);

http.get(process.argv[2], function(response) {
  response
    .setEncoding('utf8')
    .pipe(bl(function(err, data) {
      if (err) return processError;

      console.log(data.toString().length);
      console.log(data.toString());
    }));
}).on('error', processError);
