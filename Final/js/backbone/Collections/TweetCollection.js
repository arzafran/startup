var TweetCollection = Backbone.Collection.extend({
	 model: Tweet,
	 url: 'http://localhost:3000/timeline?count=25'
	 /*initialize : function(){
	 	this.fetch({
	 		success: function(){
	 			console.log('a');
	 		}
	 	});
	 }*/
});