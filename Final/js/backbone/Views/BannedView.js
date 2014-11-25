var BannedView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  template: _.template($('#bantemplate').html()),
  initialize: function(){
  	this.render();
  },
  render: function(){
    var data = this.model.toJSON();
    this.$el.html( this.template(data[0]) );
  }
});
