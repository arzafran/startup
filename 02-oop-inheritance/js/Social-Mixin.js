// Social Mixin

var Social = function (){
	this.share = function (somebody) {
        console.log("Sharing "+ this.get('title') + " with " + somebody);
    	$('#greeter-text').html("Sharing "+ this.get('title') + " with " + somebody);
    }
  return this;
};