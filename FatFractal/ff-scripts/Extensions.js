var ff = require('ffef/FatFractal');

exports.deleteAllForResource = function() {

  var data              = ff.getExtensionRequestData();
  var finalResponse     = {};
  var r                 = ff.response();
  var resourceName      = data.httpParameters.resourceName;
  var responseCode      = "200";
  var deletedURLs       = [];
  var failedDeletedURLs = [];
  var cursor            = ff.getCursorForQuery("/" + resourceName);

  while (cursor.hasNext()) {
     
     var keyValuePair = cursor.next();
     var key          = keyValuePair.key;
     var obj          = keyValuePair.value;

    if (resourceName === 'FFUser') {
      
      var username = obj.userName;

      if ((username === 'system') || (username === 'anonymous')) {
        continue;
      }
    }

    try {
      
      print('currently deleting object at uri ' + obj.ffUrl);

      ff.deleteObjAtUri(obj.ffUrl);

      deletedURLs.push(obj.ffUrl);

    } catch (err) {

      responseCode  = "400";

      failedDeletedURLs.push(obj.ffUrl);
    }
   }
  
  finalResponse = {'message' : 'Collection delete results', 'deletedURLs' : deletedURLs, 'failedDeletedURLs' : failedDeletedURLs};
  
  r.responseCode  = responseCode;
  r.statusMessage = "Debug Deletes Completed";
  r.mimeType      = "application/json";
  r.result        = finalResponse;
};
