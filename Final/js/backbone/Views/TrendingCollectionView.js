function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			alert("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred.");
			break;
	}
}
var TrendingCollectionView = Backbone.View.extend({
	initialize: function(){
	},
	render: function(){
		var $tw = $('#wrapper');
		$tw.html('');
		if (navigator.geolocation) {
				var options = {
					enableHighAccuracy: false,
					timeout: 10000,
					maximumAge: 0
				};
				navigator.geolocation.getCurrentPosition(function(position){
					var lat = position.coords.latitude;
					var lon = position.coords.longitude;
					var woeid_url = "http://localhost:3000/myplace?lat="+lat+"&long="+lon;
					$.getJSON(woeid_url, function(myplace){
						var api_url = "http://localhost:3000/trends?id="+myplace[0].woeid;
						$.getJSON(api_url, function(trends){
							var tmplt = Handlebars.compile($('#trendingtemplate').html());
							$tw.append(tmplt(trends[0]));
						});
					});  
				},showError,options);
		} else { 
			console.log("Geolocation is not supported...");
		}
	},
	renderSingleTrend: function(id){
		var myURL = 'http://localhost:3000/search?q='+id;
		$.getJSON(myURL, function(trends){
			var trendingTweets = new TrendingCollection(trends.statuses);
			var trendTweetView = new TrendingTweetCollectionView({collection:trendingTweets});
			trendTweetView.render();
		});
	}
});

