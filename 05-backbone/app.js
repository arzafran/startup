requirejs.config({

    baseUrl: 'js',

    paths: {
        jquery : "vendor/jquery" ,
        underscore : "vendor/underscore" ,
        backbone : "vendor/backbone"  ,
        handlebars : "vendor/handlebars" ,
        EditView: "backbone/views/EditView",
        CollectionView: "backbone/views/CollectionView",
        Movie: "backbone/models/Movie",
        Router: "backbone/routes/router",
        serialize :"vendor/serialize"

    },

    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }

    }
});

requirejs(['jquery', 'backbone','Router'],function ($, Backbone, Router){
  var router = new Router();
  Backbone.history.start();
});