define(["backbone","handlebars"], function(Backbone,Handlebars){
	var EditView = Backbone.View.extend({
		template: Handlebars.compile($('#edit-template').html()),
		events: {
			"click .btn.save": "saveData",
      "click .btn.back": "goBack"
		},
		render: function(movie){
      $('body').html(this.template(movie));
      return this;
		},
		saveData: function(){
      var newData = {};
      $("#data").children("input[type='text']").each(function(i, el) {
        newData[el.id] = $(el).val(); 
      });
      $("#data").children("textarea[id='synopsis']").each(function(i, el) {
        newData[el.id] = $(el).val(); 
      });
      var newMovie = new Movie.Model(newData);
      console.log(newMovie);
      this.collection.add(newMovie);
    },
    goBack: function(){
      Collection.render();
    }
    /*
			tried to trigger saveData, and goBack events from editView, but didn't work either. 
			Before that i've tried from collectionView.
    */
	});
	return EditView;
});