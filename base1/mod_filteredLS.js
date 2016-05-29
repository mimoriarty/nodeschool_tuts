'use strict';

let 
	arr,
	exports = module.exports = {};
	fs = require('fs'),
	path = process.argv[2],
	ext = process.argv[3],
	filterExt = (err, files) => {
		files.filter(file => { 
			if (file.toString().split('.')[1] === ext) {
				console.log(file); 
			} 
		});	
	};

exports.readfilesMD = function () {
	fs.readdir(path, filterExt);
}
