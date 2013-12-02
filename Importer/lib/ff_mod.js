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
  this.setDebug(true);
  this.setBaseUrl(FatFractal.prototype.FF_BASE_URL);
  this.setAutoLoadRefs(false);
}

FatFractal.prototype.processObject = function(modelObject, collectionName, callback) {
  
  ff.initConfig();
  ff.login(FatFractal.prototype.SYSTEM_USER, FatFractal.prototype.SYSTEM_PASS, 
            
            function(user){
              
              ff.createObjAtUri(modelObject, 
                                  collectionName,
                                  function(data, statusMessage){
                                    callback(statusMessage, null);
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
