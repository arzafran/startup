// Social Mixin

var Social =(function (){
  var publicAPI = function(){
	this.share = function (somebody) {
        console.log("Sharing "+ this.get('title') + " with " + somebody);
    }
  };
  return publicAPI;
}());