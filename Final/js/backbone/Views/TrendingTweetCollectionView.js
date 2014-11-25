var TrendingTweetCollectionView = Backbone.View.extend({
	initialize: function(){
		/*//this.render();
		var self = this;
		//console.log(this.collection);
		this.collection.fetch({
			success: function(){
				self.render();
				//console.log('a');
			}
		});*/
	},
	isBanned: function(){
		var chau = [];
		misBanned.each(function(value){
			var aux = (value.toJSON());
			chau.push(aux[0]['nombre']);
		});
		return chau;
	},
	render: function(){
		var $tw = $('#wrapper');
		$tw.html('');
			this.collection.each(function(Tweet){
				if (!($.inArray(Tweet.get('user').screen_name,this.isBanned())>-1)) {
					var tweetView = new TweetView({ model: Tweet });
					$tw.append(tweetView.el);
				}
			}, this);
	},
	renderSingleTweet: function(id){
		var este = this.collection.get(id)
		var singleView = new TrendingTweetView({model: este});
		$('#wrapper').html(singleView.el);
	}
});
