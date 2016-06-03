'use strict';

let
  fs = require('fs'),
  bl = require('bl'),
  rs = fs.createReadStream(process.argv[3], { encoding : 'utf8' }),
  fileData = '',
  http = require('http'),
  server = http.createServer(function(req, res) {
    res.write(fileData);
  });

  rs.pipe(bl(function(err, data) {
    if (err) return console.log(err);

    fileData += data.toString();
  }));

server.listen(process.argv[2]);

/* official solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2])) */
