'use strict';

var
	myModule = require('./mod_filteredLS.js'),
	dir = process.argv[2],
	ext = process.argv[3];

myModule(dir, ext, function (err, data) 
 {
     if (err) return console.log('ERROR');

     data.forEach(function (d)
     {
         console.log(d.toString());
     });
 });

// proposed response
/*
 var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  

*/
