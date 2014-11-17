define(['jquery', 'backbone'], function ($, Backbone) {
  var model = Backbone.Model.extend({
    defaults: {
          img: '', 
          title: 'IDK', 
          director: 'IDK', 
          releaseyear: 'IDK', 
          duration: 'IDK', 
          synopsis: 'IDK'
    }
  });
  var collection = Backbone.Collection.extend({
    model: model,
    url: "data/movies.json",
    initialize: function () {
        this.fetch();
    }
  });
  return{
    Model: model,
    Collection: collection
  }
});