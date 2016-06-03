'use strict';

let
  http = require('http'),
  body = '',
  server = http.createServer(function(req, res) {
    req
      .on('data', function(chunk) {
        body += chunk.toString().toUpperCase();
      })
      .on('end', function() {
        res.write(body);
      });
  });

server.listen(process.argv[2]);
