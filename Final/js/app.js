requirejs.config({

		baseUrl: 'js',

		paths: {
				jquery : "vendor/jquery",
				underscore : "vendor/underscore",
				backbone : "vendor/backbone",
				handlebars : "vendor/handlebars",
				backboneLocalstorage : "vendor/backbone.localStorage",
				TweetModel: "backbone/Models/Tweet",
				BannedModel: "backbone/Models/Banned",
				TrendingModel: "backbone/Models/Trending",
				TweetView: "backbone/Views/TweetView",
				BannedView: "backbone/Views/BannedView",
				TrendingView: "backbone/Views/TrendingView",
				TweetCollection: "backbone/Collections/TweetCollection",
				BannedCollection: "backbone/Collections/BannedCollection",
				TrendingCollection: "backbone/Collections/TrendingCollection",
				TweetCollectionView: "backbone/Views/TweetCollectionView",
				BannedCollectionView: "backbone/Views/BannedCollectionView",
				TrendingCollectionView: "backbone/Views/TrendingCollectionView",
		},

		shim: {
			underscore: {
				exports: "_"
			},
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
		}
});

require(['jquery',
				 'backbone',
				 'BannedModel',
				 'BannedCollection',
				 'TweetCollection',
				 'TrendingCollection',
				 'TweetCollectionView',
				 'TrendingCollectionView',
				 'BannedCollectionView'],
function($, Backbone, Banned, BannedCollection, TweetCollection, TrendingCollection, TweetCollectionView, TrendingCollectionView, BannedCollectionView){		
			
			misBanned = new BannedCollection();
			misTweets = new TweetCollection();
			
			var bannedList = new BannedCollectionView(),
				  timeline = new TweetCollectionView(),
				  trends = new TrendingCollectionView();
				  

			
			var $body = $('body');
			
			timeline.render();

			$body.on('click','#addbanned',function(){
				var text = $('#nombreadd').val();
				var newBan = new Banned([{'nombre':text}]);
				misBanned.add(newBan);
				newBan.save();
				bannedList.render();
			});

			$body.on('click','.quitarban',function(){
				var este = $(this).attr('id');
				var unBan = misBanned.find( function(model) {
				return model.attributes[0].nombre===este;
				});
				unBan.destroy();
				bannedList.render();
			});

			$('.renderizador').click(function(){
				if ($(this).attr('id')==='home') {
					timeline.render();
				} else if ($(this).attr('id')==='banned'){
					bannedList.render();
				} else if ($(this).attr('id')==='trending'){
					trends.render();
				}
			});

			$body.on('click','.singletweet',function(){
				timeline.renderSingleTweet($(this).attr('id'));
			});
			$body.on('click','.masinfo',function(){
				var ide = $(this).attr('id');
				var trendingTweets = new TrendingCollection();
				trendingTweets.url = 'http://localhost:3000/search?q='+ide;
				trendingTweets.fetch();
				console.log(trendingTweets);
				var trendingTweetView = new TweetCollectionView();
				console.log(trendingTweetView);
			});
			Backbone.history.start();
		});