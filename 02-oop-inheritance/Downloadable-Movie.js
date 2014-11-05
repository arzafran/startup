//Downloadable Movie

var DownloadableMovie = (function ($){

  var publicAPI = function(){
    Movie.call(this);
  	this.download = function(){
  	  $.publish('download', this.get('title'));
  	}
  }

  return publicAPI;

}(jQuery));