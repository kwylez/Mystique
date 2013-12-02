var ffmod = require('../../lib/ff_mod.js');
var ff    = new ffmod.FatFractal();
var http  = require('http');
var fs    = require('fs');

var Mystique = function() {
  
  return {
        addObject: function(importJSONFile, finalCallback){
          
          var data        = fs.readFileSync(importJSONFile, 'utf8');
          var modelObject = {};

          if (data) {
            
            var parsedJSON       = JSON.parse(data);
            var records          = parsedJSON['results'];
            var objectName       = parsedJSON['clazz'];
            var objectCollection = parsedJSON['collection'];

            records.forEach(function(record, i){

                if (record) {

                  modelObject = {'clazz' : objectName};

                  /**
                   * Iterate over all the key/value pairs to dynamically
                   * create object
                   */
                   
                   for (key in record) {
                     modelObject[key] = record[key];
                   }

                  ff.processObject(modelObject, objectCollection, function(successMessage, errorMessage){

                    finalCallback(successMessage, errorMessage);
                  });
                }
            });

          } else {

            finalCallback(null, "No data was found for " + importJSONFile);
          }
        }
  };
};

module.exports = Mystique;

