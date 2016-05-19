'use strict';

let
	fs = require('fs'),
	buffer = fs.readFileSync(process.argv[2], 'utf8');

console.log(buffer.split('\n').length - 1);
