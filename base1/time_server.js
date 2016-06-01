'use strict';

let
  d = new Date(),
  formatNumber = num => ('0' + num).slice(-2),
  timestamp = function() {
    return d.getFullYear() + '-' + formatNumber(d.getMonth() + 1) + '-' + formatNumber(d.getDate()) + ' ' + formatNumber(d.getHours()) + ':' + formatNumber(d.getMinutes()) + '\n';
  },
  net = require('net'),
  server = net.createServer(function(socket) {
    socket
      .end(timestamp());
  });


server.listen(process.argv[2]);
