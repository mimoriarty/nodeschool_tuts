'use strict';

let
	fs = require('fs'),
	buffer = fs.readFile(process.argv[2], 'utf8', printBuffer);

function printBuffer(err, data) {
	console.log(data.split('\n').length - 1);
}
