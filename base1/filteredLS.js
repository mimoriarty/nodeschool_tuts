'use strict';

let 
	arr,
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

fs.readdir(path, filterExt);


/* official solution
var fs = require('fs')  
var path = require('path')  
       
var folder = process.argv[2]  
var ext = '.' + process.argv[3]  
       
     fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function(file) {  
           if (path.extname(file) === ext) {  
               console.log(file)  
           }  
       })  
     }) */
