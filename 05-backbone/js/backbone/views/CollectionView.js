define(['jquery', 'backbone', 'handlebars', 'EditView', 'Movie'], function ($, Backbone, Handlebars, EditView, Movie) {
   var CollectionView = Backbone.View.extend({
        initialize: function(){
            this.render();
            this.listenTo(this.collection, 'add remove change' , function(){
                localStorage.setItem("movies",JSON.stringify(this.collection.models) );
                this.render();
            });
        },
        render: function(){
          var source = $("#billboard-template").html();
          var template = Handlebars.compile(source);
          this.$el.html(template(JSON.parse(localStorage.getItem("movies"))));
          $('#page').html(this.$el);
        },
        events: {
          "click .btn.add": "add",
          "click .btn.delete": "delete",          
          "click .btn.edit" : "edit",
        },
        delete: function(){
          this.collection.remove(this.collection.at(event.target.id));
          window.location.reload(true);
        },
        add: function(){
          var add = new EditView();
          added = add.render();
        },
        edit: function(){
          var editableMovie = this.collection.at(event.target.id).toJSON();
          var edit = new EditView();
          edit.render(editableMovie);
        }
    });
  return CollectionView;
});