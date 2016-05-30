'use strict';

var
	fs = require('fs'),
	path = require('path');

module.exports = function (directory, filter, callback)
{
    fs.readdir(directory, function (err, list) {
      if (err) return callback(err); 
      var elements = [];
      list.forEach(function(element)
                  {
                      if(path.extname(element) === "." + filter ) 
                      {
                          elements.push(element);
                      }
                  });
      callback(null, elements);
    });
}

// proposed response
/*
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     } 
*/
