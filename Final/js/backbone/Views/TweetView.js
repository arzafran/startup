var TweetView = Backbone.View.extend({
  className: 'singletweet',
  template: _.template($('#tweettemplate').html()),
  initialize: function(){
    this.$el.attr( "id", this.model.get('id') );
    this.render();
  },
  render: function(){
  	var parsed = this.model.toJSON();
  	var now = new Date();
  	parsed.created_at = new Date(parsed.created_at);
  	parsed.created_at = TwitterHelper.timediff(now,parsed.created_at);
  	parsed.text = TwitterHelper.htmlize(parsed.text);
    this.$el.html(this.template(parsed));
  }
});
