$(document).ready(function(){
  misBanned = new BannedCollection();
  misTweets = new TweetCollection();

var bannedList = new BannedCollectionView({collection : misBanned}),
    timeline = new TweetCollectionView({collection: misTweets}),
    trends = new TrendingCollectionView(),
    $body = $('body');

  $body.on('click','#addbanned',function(){
    var text = $('#nombreadd').val();
    var newBan = new Banned([{'nombre':text}]);
    misBanned.add(newBan);
    newBan.save();
    bannedList.render();
  });
  $body.on('click','.quitarban',function(){
    var ide = $(this).attr('id');
    var unBan = misBanned.find( function(model) {
      return model.attributes[0].nombre===ide;
    });
    unBan.destroy();
    bannedList.render();
  });
    $body.on('click','.singletweet',function(){
    console.log(this);
    timeline.renderSingleTweet($(this).attr('id'));
  });
  $body.on('click','.masinfo',function(){
    var ide = $(this).attr('id');
    trends.renderSingleTrend(ide);
  });

  Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'home' : 'index',
        'trending': 'trending',
        'banned': 'banned'
    },
    index: function(){
      timeline.render();
    },
    trending: function(){
      trends.render();
    },
    banned: function(){
      bannedList.render();
    }
  });

  new Router;
  Backbone.history.start();
});