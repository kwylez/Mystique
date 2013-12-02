var ffmod        = require('./lib/ff_mod.js');
var mystique     = require('./lib/mystique/mystique');
var importObject = new mystique();
var fileToParse  = process.argv[2];

if (typeof(fileToParse) == 'undefined') {
  
  console.log("You must pass in file to import");

  return;
}

importObject.addObject('./' + fileToParse, function(successMessage, errorMessage){
  console.log("Success message: " + successMessage);
  console.log("Error message: " + errorMessage);
});
