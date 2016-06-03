'use strict';

const
  ENDPOINT_PARSE = '/api/parsetime',
  ENDPOINT_UNIX = '/api/unixtime',
  KEY_ISO = 'iso';

function json_parseTime(d) {
  return {
    "hour" : d.getHours(),
    "minute" : d.getMinutes(),
    "second" : d.getSeconds(),
  }
}

function json_parseUnixTime(d) {
  return {
    "unixtime" : d.getTime(),
  }
}

let
  http = require('http'),
  url = require('url'),
  server = http.createServer(function(req, res) {
    let
      u = url.parse(req.url, true),
      data;

    if (u.pathname === ENDPOINT_PARSE && u.query.hasOwnProperty(KEY_ISO)) {
      data = json_parseTime(new Date(u.query[KEY_ISO]));
    }

    if (u.pathname === ENDPOINT_UNIX && u.query.hasOwnProperty(KEY_ISO)) {
      data = json_parseUnixTime(new Date(u.query[KEY_ISO]));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  });

server.listen(process.argv[2]);
