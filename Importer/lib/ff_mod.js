var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Storage        = require("dom-storage");
var sessionStorage = new Storage();

var fs   = require('fs');
var path = require('path');

var SYSTEM_USER = 'system';
var SYSTEM_PASS = 'system';

eval(fs.readFileSync(path.resolve(__dirname, './FatFractal.js')).toString());

var ff = new FatFractal;

FatFractal.prototype.FF_BASE_URL = 'http://localhost:8080/mystique';
FatFractal.prototype.SYSTEM_USER = SYSTEM_USER;
FatFractal.prototype.SYSTEM_PASS = SYSTEM_PASS;

FatFractal.prototype.initConfig = function(){
  
  this.setSimulateCookies(true);
  this.setDebug(false);
  this.setBaseUrl(FatFractal.prototype.FF_BASE_URL);
  this.setAutoLoadRefs(false);
}

FatFractal.prototype.processObject = function(modelObject, collectionName, grabBagObjects, callback) {
  
  ff.initConfig();
  ff.login(FatFractal.prototype.SYSTEM_USER, FatFractal.prototype.SYSTEM_PASS, 
            
            function(user){
              
              ff.createObjAtUri(modelObject, 
                                collectionName,
                                function(createdObj, statusMessage){

                                  if (grabBagObjects !== null) {
                                    
                                    /**
                                     * Begin processing all of the grabbag items
                                     */

                                    for (var i = 0; i <= grabBagObjects.items.length; i++) {

                                      var grabBagObjectGUID   = grabBagObjects.items[i];
                                      var grabBagObjectFFUri  = grabBagObjects.collection + "/" + grabBagObjectGUID;
                                      var grabBagPropertyName = grabBagObjects.propertyName;
  
                                      if (typeof(grabBagObjectGUID) !== 'undefined') {
  
                                        ff.getObjFromUri(grabBagObjectFFUri, 
                                                         
                                                         function(grabBagObject){
                                                           
                                                           ff.grabBagAdd(grabBagObject, createdObj, grabBagPropertyName, 
                                                                         function(statusMessage){
                                                                           console.log("response: " + statusMessage);
                                                                         },
                                                                         function(statusCode, statusMessage){
                                                                            console.log("failed to add to grabbag " + statusMessage);
                                                                         });
                                                         }, 
                                                         function(statusCode, statusMessage){
                                                            console.log("failed to get to grabbag object " + statusMessage);
                                                         }
                                        );// end get object from uri
                                      }
                                    }

                                    /**
                                     * End processing all of the grabbag items
                                     */

                                  } else {
                                    
                                    callback(statusMessage, null);
                                  }
                                }, 
                                function(statusCode, statusMessage){
                                  callback(null, statusMessage);
                                });
            }, 
            function(statusCode, statusMessage){
              callback(null, "Login failed " + statusMessage);
            }
  );
}

exports.RegisterRequest = RegisterRequest;
exports.FFUser          = FFUser;
exports.Token           = Token;
exports.FatFractal      = FatFractal;
