var TrendingView = Backbone.View.extend({
  className: 'singletrending',
  template: Handlebars.compile($('#trendingtemplate').html()),
  initialize: function(){
    this.$el.attr( "id", this.model.get('id') );
  },
});
